pragma solidity >=0.4.21 <0.6.0;

import 'openzeppelin-solidity/contracts/drafts/Counters.sol';
import "./ERC721Mintable.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is HouseToken {

    using Counters for Counters.Counter;
    
    Counters.Counter private solutionsCount;
    // TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
    Verifier private _verifier;
    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address account;
        bool minted;
    }

    // TODO define an array of the above struct
    Solution[] private solutions_arr;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private solutions_mapping;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 solutionIndex, address solutionAddress);

    constructor(address verifierAddress, string memory name, string memory symbol) HouseToken(name, symbol) public {
        _verifier = Verifier(verifierAddress);
    }
    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c, uint[2] memory input
    ) public {
        bytes32 solutionHash = keccak256(abi.encodePacked(input[0], input[1]));
        require(solutions_mapping[solutionHash].account == address(0), 'Error: Not a new solution.');
        bool verified = _verifier.verifyTx(a, b, c, input);
        require(verified, 'Error: Not verified.');
        Solution memory solution = Solution({
            index: solutionsCount.current(),
            account: msg.sender,
            minted: false
        });
         solutions_mapping[solutionHash] = solution;
         solutions_arr.push(solution);
         solutionsCount.increment();
         emit SolutionAdded(solutionsCount.current(), msg.sender);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    function mintNFT(uint a, uint b, address to) public {
        //  - make sure the solution is unique (has not been used before)
        bytes32 solutionHash = keccak256(abi.encodePacked(a, b));
        require(solutions_mapping[solutionHash].account != address(0), 'Error: Non-existent Solution.');
        //  - make sure you handle metadata as well as tokenSuplly
        require(solutions_mapping[solutionHash].minted == false, 'Error: Already Minted.');
        require(solutions_mapping[solutionHash].account == msg.sender, 'Error: MSG SENDER is not account for solution hash.');
        super.mint(to, solutions_mapping[solutionHash].index);
        solutions_mapping[solutionHash].minted = true;
    }
}

contract Verifier {
    function verifyTx(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c, uint[2] memory input
    ) public view returns (bool r) {}
}


  



























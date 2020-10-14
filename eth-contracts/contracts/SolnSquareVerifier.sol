pragma solidity >=0.4.21 <0.6.0;

import 'openzeppelin-solidity/contracts/drafts/Counters.sol';
import "./ERC721Mintable.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is HouseToken {

    using Counters for Counters.Counter;
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

    // TODO Create a function to add the solutions to the array and emit the event



    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
}


  



























const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const Verifier = artifacts.require('Verifier');
const truffleAssert = require('truffle-assertions');
const json = require('../../zokrates/code/square/proof.json');

contract('Test Verifier and SolnSquareVerifier', accounts => {
    const account_one = accounts[0];
    const tokenName = 'HouseToken';
    const tokenSymbol = 'HOUSE';

    const A = json.proof.a;
    const B = json.proof.b;
    const C = json.proof.c;
    const inputs = json.inputs;

    // Test if a new solution can be added for contract - SolnSquareVerifier
    describe.only('Test if a new solution can be added for contract - SolnSquareVerifier', () => {
        let verifier;
        let solnSquareVerifier;
        let owner;
        before(async () => {
            owner = account_one;
            verifier = await Verifier.deployed();
            solnSquareVerifier = await SolnSquareVerifier.new(verifier.address, tokenName, tokenSymbol, { from: owner });
        });

        it('Can add a new solution for contract - SolnSquareVerifier and can mint an ERC71 token for contract - SolnSquareVerifier', async () => {
            const tx = await solnSquareVerifier.addSolution(A, B, C, inputs, { from: owner });
            truffleAssert.eventEmitted(tx, 'SolutionAdded');

            await solnSquareVerifier.mintNFT(inputs[0], inputs[1], owner, { from: owner });
            const nftOwner = await solnSquareVerifier.ownerOf(0); // only one token minted
            assert.equal(nftOwner, owner, 'Error: Owner not equal to nftOwner');
        });
    });
});
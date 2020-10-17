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
    describe('Test if a new solution can be added for contract - SolnSquareVerifier', () => {
        let verifier;
        let solnSquareVerifier;
        let owner;
        beforeEach(async () => {
            owner = account_one;
            verifier = await Verifier.deployed();
            solnSquareVerifier = await SolnSquareVerifier.new(verifier.address, tokenName, tokenSymbol, { from: owner });
        });

        it('Can add a new solution for contract - SolnSquareVerifier', async () => {
            const tx = await solnSquareVerifier.addSolution(A, B, C, inputs, { from: owner });
            truffleAssert.eventEmitted(tx, 'SolutionAdded');
        });
    });
    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
});
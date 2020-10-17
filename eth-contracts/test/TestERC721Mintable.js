const HouseToken = artifacts.require('HouseToken');
const truffleAssert = require('truffle-assertions');

contract('Test HouseToken', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];

    const tokenName = 'HouseToken';
    const tokenSymbol = 'HOUSE';
    const tokens = [...Array(10).keys()];
    const tokenBaseURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';

    let instance;
    let owner;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            instance = await HouseToken.new(tokenName, tokenSymbol, {from: account_one});
            owner = account_one;
            // TODO: mint multiple tokens
            for (let index = 0; index < tokens.length; index++) {
                const token = tokens[index];
                await instance.mint(account_two, token, { from: owner });
            }
        });

        it('should return total supply', async function () { 
            const totalSupply = Number(await instance.totalSupply.call({from: owner}));
            assert.equal(totalSupply, tokens.length, 'Error: Total Supply returned does not match tokens length');
        });

        it('should get token balance', async function () { 
            const account_two_bal = await instance.balanceOf(account_two);
            assert.equal(account_two_bal, tokens.length);
        })

        // // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const House1 = tokens[0];
            const account_two_uri_1 = await instance.tokenURI(House1);
            assert.equal(account_two_uri_1, tokenBaseURI + House1); 

            const House2 = tokens[1];
            const account_two_uri_2 = await instance.tokenURI(House2);
            assert.equal(account_two_uri_2, tokenBaseURI + House2); 
        })

        it('should transfer token from one owner to another', async function () { 
            const House1 = tokens[0];
            const House2 = tokens[1];

            const tx = await instance.transferFrom(account_two, account_three, House1, { from: account_two });
            truffleAssert.eventEmitted(tx, 'Transfer');
            const House1Owner = await instance.ownerOf(House1);
            assert.equal(House1Owner, account_three);

            const tx2 = await instance.transferFrom(account_two, account_four, House2, { from: account_two });
            truffleAssert.eventEmitted(tx2, 'Transfer');
            const House2Owner = await instance.ownerOf(House2);
            assert.equal(House2Owner, account_four);
        })
    });

    // describe('have ownership properties', function () {
    //     beforeEach(async function () { 
    //         this.contract = await ERC721Mintable.new({from: account_one});
    //     })

    //     it('should fail when minting when address is not contract owner', async function () { 
            
    //     })

    //     it('should return contract owner', async function () { 
            
    //     })

    // });
})
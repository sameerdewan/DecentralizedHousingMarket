var ERC721Mintable = artifacts.require('HouseToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const tokenName = 'HouseToken';
    const tokenSymbol = 'HOUSE';
    const addressInvalid0x = '0x0000000000000000000000000000000000000000';
    const tokenBaseURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new(tokenName, tokenSymbol, {from: account_one});

            // TODO: mint multiple tokens
        })

        // it('should return total supply', async function () { 
            
        // })

        // it('should get token balance', async function () { 
            
        // })

        // // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        // it('should return token uri', async function () { 
            
        // })

        // it('should transfer token from one owner to another', async function () { 
            
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
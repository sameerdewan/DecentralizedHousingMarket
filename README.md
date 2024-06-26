### Dependencies
    Truffle v5.1.26 (core: 5.1.26)
    Solidity v0.5.16 (solc-js)
    Node v12.18.3
    Web3.js v1.2.1  

### Bootstrapping the Project
    npm install

### How To Test
    cd eth-contracts/test
    ganache-cli
    truffle test

### Minting New Tokens
    https://mycrypto.com/contracts/interact 
    ABI can be found in build, and the addresses needed in the compilation output below.

### Token
    Name: HouseToken
    Symbol: HOUSE
    Contract Address: https://rinkeby.etherscan.io/token/0x990A54cC8B7CD7c8977E598faFD04b7Bf992bc5f

##### Token Mints
    Mint Transaction for Tokens 0 - 9 (Total = 10)
    0. https://rinkeby.etherscan.io/tx/0xd92b7cfc9dd9bf626eb0d9429d9e94c97ecdd54cbc49221f420c6fcc274f16be 
    1. https://rinkeby.etherscan.io/tx/0x3842e70edc17c80133fd2a53358069fa062a86baad2abe0dd0cefadd6984de03
    2. https://rinkeby.etherscan.io/tx/0x634e0e58752882c12af845212cd7217e37990241d676367ac95ac1a636012e98
    3. https://rinkeby.etherscan.io/tx/0xdc6dbee291b0db1ebabe46259085579632decae0fbeef4a24a60d3e9fa9e7629
    4. https://rinkeby.etherscan.io/tx/0x0c96b8e05812a3d6091c525715e005125820f32b7f2a32a03f81717ed82399a8
    5. https://rinkeby.etherscan.io/tx/0x9644492bb9665e0bc42bcbe20bfcb1a15b33df80c42a3f1bb88c0f30ca2107d8
    6. https://rinkeby.etherscan.io/tx/0x1d88c7911e691cc7c1b963bb9b09c2a802038b7f9bd50cecf3319aac926ce74e
    7. https://rinkeby.etherscan.io/tx/0x2a6e09d5d14533f4b82f8464de9dfe8af60028e03091e402283c92facd931356
    8. https://rinkeby.etherscan.io/tx/0xa56c8163cbe418c20319cff32985779960710c72ffcc0329082fc9dfbefa6a58
    9. https://rinkeby.etherscan.io/tx/0x6cceebf9701f18ca9acf7cfa0203a451ff40c6cbab73cedea781d8756b63ae1a

##### OpenSea Listings
    Token Listings 0 - 4 (Total = 5)
    0. https://rinkeby.opensea.io/assets/0x990a54cc8b7cd7c8977e598fafd04b7bf992bc5f/0
    1. https://rinkeby.opensea.io/assets/0x990a54cc8b7cd7c8977e598fafd04b7bf992bc5f/1
    2. https://rinkeby.opensea.io/assets/0x990a54cc8b7cd7c8977e598fafd04b7bf992bc5f/2
    3. https://rinkeby.opensea.io/assets/0x990a54cc8b7cd7c8977e598fafd04b7bf992bc5f/3
    4. https://rinkeby.opensea.io/assets/0x990a54cc8b7cd7c8977e598fafd04b7bf992bc5f/4

##### Original Owner
    0xDAbE176f49fB5c8017Fd619Be0cd07802552c48c

##### Buyer / New Owner
    0x84b8F6d1133513EA7Dec2DebBE74803f44fB8A72

##### Transactions From Original Owner -> Buyer / New Owner
    Transactions for Listings 0 - 4 (Total = 5)
    0. https://rinkeby.etherscan.io/tx/0xb0b18cc0572a4d79f4b172a68b68d7a18a3183479c48a4d8d86db4a16899181e
    1. https://rinkeby.etherscan.io/tx/0xea1cd549139c89f9abe26fccfe39ab2f9f5bc46ca0a634ff7ca79472871f4513
    2. https://rinkeby.etherscan.io/tx/0xfae3d345badd8e78ff6fad9acb5df9e84614a3bf1eae3b4e05d99720cecfcf84
    3. https://rinkeby.etherscan.io/tx/0x487c260cfb3d67704968033ff672b238c66cd7bfb6898ec72e9e0a09d3659d52
    4. https://rinkeby.etherscan.io/tx/0xe96abce8e576a8fcc0d97178654938d5d44deaa8d32ab538f67d57f867734ac8

### Contracts
    HouseToken: https://rinkeby.etherscan.io/token/0x990A54cC8B7CD7c8977E598faFD04b7Bf992bc5f
    SolnSquareVerifier: https://rinkeby.etherscan.io/address/0x990A54cC8B7CD7c8977E598faFD04b7Bf992bc5f
    Verifier: https://rinkeby.etherscan.io/address/0xe5AA02985F1Aa9944B49FaD4c9C1d753e94a9d1C

```bash
Compiling your contracts...
===========================
> Compiling ./contracts/ERC721Mintable.sol
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/Oraclize.sol
> Compiling ./contracts/SolnSquareVerifier.sol
> Compiling ./contracts/verifier.sol
> Compiling openzeppelin-solidity/contracts/drafts/Counters.sol
> Compiling openzeppelin-solidity/contracts/math/SafeMath.sol
> Compiling openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol
> Compiling openzeppelin-solidity/contracts/utils/Address.sol
> Artifacts written to /Users/sameer/DecentralizedHousingMarket/eth-contracts/build/contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        7387841
   > block timestamp:     1602974783
   > account:             0xDAbE176f49fB5c8017Fd619Be0cd07802552c48c
   > balance:             75.196599009000000997
   > gas used:            210237 (0x3353d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        7387843
   > block timestamp:     1602974785
   > account:             0xDAbE176f49fB5c8017Fd619Be0cd07802552c48c
   > balance:             75.186649069000000997
   > gas used:            967631 (0xec3cf)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967631 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        7387844
   > block timestamp:     1602974794
   > account:             0xDAbE176f49fB5c8017Fd619Be0cd07802552c48c
   > balance:             75.153345809000000997
   > gas used:            3330326 (0x32d116)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03330326 ETH

   -------------------------------------
   > Total cost:          0.04297957 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04508194 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x6e09fe9802d9d3db43c8268a61993846c8a95e6584f024f3757aae1cef375ac2
   > Blocks: 0            Seconds: 4
   > contract address:    0x9348eACaBA70a855d51dbd3332eE6B1748808a04
   > block number:        7387842
   > block timestamp:     0x5f8b7457
   > account:             0xDAbE176f49fB5c8017Fd619Be0cd07802552c48c
   > balance:             75.196449009000000997
   > gas used:            225237 (0x36fd5)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00225237 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00225237 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x5bc422e61b4c395b7aef99654a9b20aaddaf2d0b25ee06f86c4c6c44d26f653a
   > Blocks: 1            Seconds: 12
   > contract address:    0xe5AA02985F1Aa9944B49FaD4c9C1d753e94a9d1C
   > block number:        7387844
   > block timestamp:     0x5f8b7475
   > account:             0xDAbE176f49fB5c8017Fd619Be0cd07802552c48c
   > balance:             75.186349069000000997
   > gas used:            967631 (0xec3cf)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967631 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xfd81ace878fb6e780a37e617e3686ee1eb99b99be1c56986c6a3546f81ec78bd
   > Blocks: 0            Seconds: 8
   > contract address:    0x990A54cC8B7CD7c8977E598faFD04b7Bf992bc5f
   > block number:        7387845
   > block timestamp:     0x5f8b7484
   > account:             0xDAbE176f49fB5c8017Fd619Be0cd07802552c48c
   > balance:             75.150945809000000997
   > gas used:            3540326 (0x360566)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03540326 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04507957 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04733194 ETH
```


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/HBorLr9-5qBjYtqKG_X57AhUFn7U-h9p',
      accounts: ['a67a3669f9ea0ee5306a8bad3c15e8763aaeea0be24e08661a1e15c0c4ba5e4a'],
    },
  },
};
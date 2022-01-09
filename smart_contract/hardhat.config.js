require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url : 'https://eth-ropsten.alchemyapi.io/v2/DqR__yYIKbsiJ_XaeXead9uACuuDAluG',
      accounts: [ 'caddd418ea4f81cec5f9970ec4da38b352a3217f418c05353987e3e00b80d1ff' ]
    }
  }
}
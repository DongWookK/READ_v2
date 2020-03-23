// truffle.js config for klaytn.

const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0x5a04c2a84c34190d0fa5b437d954d9dc9ce26ae8871fe2ff99c24df1a4a0d698'

module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    },
}
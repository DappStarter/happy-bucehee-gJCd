require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'half argue bright venture stomach deny mirror public grace civil army gentle'; 
let testAccounts = [
"0x16fc1047afb3c893e31a255f0126d462d949c90580a8ab3bdfda57039c7d514c",
"0xd23c1384338ec638b97508d1a3384df5652fb37d76d1c453d2182a5905d234ca",
"0xd5647f22312670acb8c2ccba1178455d56fa6ab565196a0736c22c64c3c3b4e1",
"0xdb80eae6b8b7807d5f78a56a5834cc3b9a82f9971e5b44a0183dd22f36c629c2",
"0xd79793bdd025a3865bd4a2d4b8791107831ecdf58415c5dbeb891995bdc11f32",
"0xaaca35dbe3a51418855daff560275950eeb47ae94eaec06e8d0128e8910d02c2",
"0xcfed067f839688f852e7383049f5bf105c120dc661592f095bc3bc4ae0ea4683",
"0x9ebe2aafd6b7dd0aad3c82606d3cd4b90c30f335fb749454eb9b49fce57551fd",
"0x45b337ab841c05305176484c8f4be2704ded45fc701e6f9d62fcb2337a1bb92a",
"0x194a3143bf0d3247d05057e1aefe887030eaa66569551e0b1fe845ca08f14ed4"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



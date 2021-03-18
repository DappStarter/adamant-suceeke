require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth soccer property grace clip sun giggle'; 
let testAccounts = [
"0x4fcdd22f9db70f257d11b7cf1ea9bd18df57e1deabb652495a7b8bdf759e8024",
"0x3c0ccfe1af88bcfd6e11276fa0daf93310f52f2a8b1bb958b1aaefa10fb7e881",
"0x6e749d53c09b376196c39802160cf528efafaa575395ee75e42f674db1bec992",
"0x46dfd95fb7152d2c40b125b8e3029d4d993253ea49139e49acc4dd0cf1b73d40",
"0xa58fc37d65ec4c42294f461a655a0e8f343928e6b81c7f1da6f4fe9d9b83868a",
"0x32a0f902e38304ec0a79ce05f785d731bff323fe44b0af992cecceb77e421f4c",
"0x240594591c12f5138d07ba4c70581b8f4f4e3d7a80fca2c1d5f9b062476178b3",
"0x3c57ed923477835a3a3aaa5134bcc71597742ea925a49d2f9f89381665aab311",
"0x936f18363f3fb8e7c9c853ffaf5b7195e9be0785047660aa6b051792265d2371",
"0x059dc850a78528dbe032b504136282e38202a5e834572faeba7c989765a3f756"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

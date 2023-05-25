const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const private_Key = secp.secp256k1.utils.randomPrivateKey();

console.log("Private_Key", toHex(private_Key));

const publicKey = secp.secp256k1.getPublicKey(private_Key);
console.log('public key: ', "0x" + toHex(getAddress(publicKey)));

function getAddress(publicKey) {
    return keccak256(publicKey.slice(1)).slice(-20);
}
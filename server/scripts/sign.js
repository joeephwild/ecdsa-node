const { keccak256 } = require("ethereum-cryptography/keccak");
const secp = require("ethereum-cryptography/secp256k1");
const { toHex, hexToBytes, utf8ToBytes} = require("ethereum-cryptography/utils");

const generateKeys = ()=> {
    const privateKey = toHex(secp.secp256k1.utils.randomPrivateKey());
    const publicKey = toHex(secp.secp256k1.getPublicKey(privateKey));

    console.log("private key : ", privateKey)
    console.log("public key :" , "0x" + publicKey)
    return {
        privateKey,
        publicKey
    }
    
}

const generateAddress = ()=>{
    publicKey = "02ec0cbdc6ace976c52802c5b6133b6f13eb472cd53ec2e0c15c10760e17d4203c"
    const address = toHex(keccak256(hexToBytes(publicKey).slice(1)).slice(-20));
    console.log("address for : ", address)
    return address
}

const generateSign = ()=>{
    const msg = "transfer";
    const privateKey = "8d5ea24f098b88fcb7d08a9717a56fe8613e333e24fe28527dfc3f24a3d08acd"
    hashedMsg = keccak256(utf8ToBytes(msg));
    const sig = secp.secp256k1.sign(hashedMsg, privateKey);
    console.log(sig)
    return sig;
}

const recoverPublicKey = (signature, hashedMessage)=>{
    const publicKey = signature.recoverPublicKey(hashedMessage).toHex()
    console.log("public key ", publicKey)
    return publicKey
}

generateSign()
generateAddress()
generateKeys()

// private_key = "4d84776b588638f425693d0c593154f681a7c9e8ab5a35c4870af885510c3b57"
// public_key = "0x03967e2581ac7ce801db86fde3376982faca0d3f7b5a7eea1750b382e47e44e61a"
// address = "2146a928d85d7878d074686b4a77f7826c25384f"

// private_key = "f882cf74cdae5857e8990cd6e6877e45cf4ba8c967b28538f1dd85f92479d790"
// public_key = "0x0383775d61099f882dd0a3b233db1277155049571f2fd5030239d3687ec22157c9"
// address = "2146a928d85d7878d074686b4a77f7826c25384f"

// private_key = "c489f11e0b77ecdac1a201b6ab44e997922f592bb8142ae8805df9bf28a47d4a"
// public_key = "0x0393808fa0b1e8aee1194abfda4fe596ee1f0244abe3f601e16d98c23df8deece1"
// address = "2146a928d85d7878d074686b4a77f7826c25384f"
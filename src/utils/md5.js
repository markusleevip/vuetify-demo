import CryptoJs from 'crypto-js';

export function md5(value) {

    return CryptoJs.MD5(value).toString();

}
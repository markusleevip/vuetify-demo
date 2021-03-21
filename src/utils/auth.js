import Cookies from 'js-cookie'

const TokenKey = 'UI-Token'
const USER_NAME_KEY = 'user_name_key'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function setUserName(value) {
    return Cookies.set(USER_NAME_KEY, value)
}

export function getLocalUserName() {
    return Cookies.get(USER_NAME_KEY)
}

export function getAvatarTitle() {
    var userName = getLocalUserName();
    if (!isEmpty(userName)){
        return userName[0].toUpperCase();
    }
    return "";
}

function isEmpty(obj){
    if (obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

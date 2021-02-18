import service from '@/utils/request'

export const login = (data) => {
    return service({
        url: "/login",
        method: 'post',
        data
    })
}


export const logon = (data) => {
    return service({
        url: "/logon",
        method: 'post',
        data
    })
}
export const checkToken = () => {
    return service({
        url: "/checkToken",
        method: 'post'        
    })
}




import service from '@/utils/request'

export const myFans = (data) => {
    return service({
        url: "/my/fans",
        method: 'post',
        data
    })
}

export const myFollow = (data) => {
    return service({
        url: "/my/follow",
        method: 'post',
        data
    })
}


export const addFollow = (data) => {
    return service({
        url: "/my/follow/add",
        method: 'put',
        data
    })
}

export const unFollow = (data) => {
    return service({
        url: "/my/follow/delete",
        method: 'put',
        data
    })
}



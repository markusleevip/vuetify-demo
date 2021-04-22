import service from '@/utils/request'

export const myResume = () => {
    return service({
        url: "/my/resume",
        method: 'post'
    })
}

export const myResumeSave = (data) => {
    return service({
        url: "/my/resume/save",
        method: 'put',
        data
    })
}

export const getResume = (resumeid) => {
    return service({
        url: "/show/resume/"+resumeid,
        method: 'get'
    })
}

export const list = (data) => {
    return service({
        url: "/list",
        method: 'post',
        data
    })
}

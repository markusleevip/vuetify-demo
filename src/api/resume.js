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


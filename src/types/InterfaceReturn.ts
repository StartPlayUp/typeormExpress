interface returnApi {
    success: boolean,
}

interface returnUser extends returnApi {
    error?: string
}

interface returnPost extends returnApi {
    error?: string
}

interface returnComment extends returnApi {
    comment?: any,
    error?: string
}

export { returnUser, returnPost, returnComment }
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
    memberComments?: any,
    nonMemberComments?: any,
    error?: string
}

export { returnUser, returnPost, returnComment }
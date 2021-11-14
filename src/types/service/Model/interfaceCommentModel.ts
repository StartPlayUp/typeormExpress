interface interfaceCommentModel {
    content: string,
    ipAddress: string
    postUuid: string,
    delete?: boolean,
    parentComment?: number,
}

export { interfaceCommentModel }
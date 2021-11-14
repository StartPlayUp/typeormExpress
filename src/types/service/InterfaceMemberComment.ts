import { interfaceCommentModel } from "./Model/interfaceCommentModel";

interface IMemberComment extends interfaceCommentModel {
    userUuid: string
}
interface INonMemberComment extends interfaceCommentModel {
    anonymouseId: string,
    password: string
}

export { IMemberComment, INonMemberComment }
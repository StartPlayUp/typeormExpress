import { interfaceCommentModel } from "./Model/interfaceCommentModel";

interface INonMemberComment extends interfaceCommentModel {
    anonymouseId: string,
    password: string
}

export { INonMemberComment }
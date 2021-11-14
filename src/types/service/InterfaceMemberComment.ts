import { interfaceCommentModel } from "./Model/interfaceCommentModel";

interface IMemberComment extends interfaceCommentModel {
    userUuid: string
}

export { IMemberComment }
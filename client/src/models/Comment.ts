import { User } from "./User";

export interface Comment {
    _id: string;
    commentText: string;
    commentCreator: User;
    createdAt: string;
}
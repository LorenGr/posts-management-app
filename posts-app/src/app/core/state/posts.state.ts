export interface Post {
    id: string;
    title: string;
    body: string;
}

export interface PostDetail {
    id: string;
    title: string;
    body: string;
}

export interface PostsState {
    posts: Post[];
    details: PostDetail[]
    search: string;
    currentPage: number;
}

export const initialState: PostsState = {
    posts: [],
    details: [],
    search: '',
    currentPage: 1,
};
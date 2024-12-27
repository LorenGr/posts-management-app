export interface Post {
    id: string;
    title: string;
    body: string;
}

export interface PostsState {
    posts: Post[];
    search: string;
    currentPage: number;
}

export const initialState: PostsState = {
    posts: [],
    search: '',
    currentPage: 1,
};
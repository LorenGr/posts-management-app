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

export interface PostsMeta {
    totalCount: number;
}

export interface PostsState {
    totalPosts: number;
    posts: Post[];
    details: PostDetail[]
    search: string;
    currentPage: number;
}

export const initialState: PostsState = {
    totalPosts: 0,
    posts: [],
    details: [],
    search: '',
    currentPage: 1,
};
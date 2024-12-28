export interface Post {
    id: string;
    title: string;
    body: string;
    new?: boolean;
}

export interface PostDetail {
    id: string;
    title: string;
    body: string;
}

export interface PostsMeta {
    totalCount: number;
    page?: number
}

export interface PostsState {
    totalPosts: number;
    posts: Post[];
    newPosts: Post[];
    details: PostDetail[];
    search: string;
    currentPage: number;
    loading: boolean;
}

export const initialState: PostsState = {
    totalPosts: 0,
    posts: [],
    newPosts: [],
    details: [],
    search: '',
    currentPage: 0,
    loading: false
};
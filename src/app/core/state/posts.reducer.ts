import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import * as PostsActions from './posts.actions';

export const postsReducer = createReducer(
    initialState,
    on(PostsActions.loadPostsSuccess, (state, { posts, meta }) => {
        return {
            ...state,
            posts: meta.page === 1 ? [...state.newPosts, ...posts] : posts,
            totalPosts: meta.totalCount,
            loading: false
        }
    }),
    on(PostsActions.loadPostsFailure, (state) => ({
        ...state,
        loading: false
    })),
    on(PostsActions.setLoading, (state, { loading }) => ({
        ...state,
        loading
    })),

    on(PostsActions.loadDetailSuccess, (state, { detail }) => ({ ...state, details: [...state.details, detail] })),
    on(PostsActions.addPost, (state, { post }) => ({ ...state, details: [...state.details, post], newPosts: [...state.newPosts, { ...post, new: true }] })),
    on(PostsActions.updateSearch, (state, { search }) => ({ ...state, search })),
    on(PostsActions.updatePage, (state, { page }) => ({ ...state, currentPage: page }))
);
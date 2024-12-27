import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import * as PostsActions from './posts.actions';

export const postsReducer = createReducer(
    initialState,
    on(PostsActions.loadPostsSuccess, (state, { posts }) => ({ ...state, posts })),
    on(PostsActions.addPost, (state, { post }) => ({ ...state, posts: [...state.posts, post] })),
    on(PostsActions.updateSearch, (state, { search }) => ({ ...state, search })),
    on(PostsActions.updatePage, (state, { page }) => ({ ...state, currentPage: page }))
);
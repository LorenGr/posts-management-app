import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const selectPostsState = createFeatureSelector<PostsState>('posts');
export const selectPosts = createSelector(selectPostsState, (state) => {

    return state.posts;
});
export const selectSearch = createSelector(selectPostsState, (state) => state.search);
export const selectCurrentPage = createSelector(selectPostsState, (state) => state.currentPage);

export const selectPost = (id: string) =>
    createSelector(selectPosts, (posts) => posts.find((post) => post.id === id));
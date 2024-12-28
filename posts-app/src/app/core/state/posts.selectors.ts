import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const selectPostsState = createFeatureSelector<PostsState>('posts');
export const selectPosts = createSelector(selectPostsState, (state) => state.posts);
export const selectDetails = createSelector(selectPostsState, (state) => state.details);
export const selectSearch = createSelector(selectPostsState, (state) => state.search);
export const selectCurrentPage = createSelector(selectPostsState, (state) => state.currentPage);
export const selectTotalPosts = createSelector(selectPostsState, (state) => state.totalPosts);
export const selectLoading = createSelector(selectPostsState, (state) => state.loading);


export const selectPost = (id: string) =>
    createSelector(selectDetails, (details) => details.find((detail) => detail.id === id));
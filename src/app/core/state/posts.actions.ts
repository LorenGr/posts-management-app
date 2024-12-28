import { createAction, props } from '@ngrx/store';
import { Post, PostDetail, PostsMeta } from './posts.state';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction('[Posts] Load Posts Success', props<{ posts: Post[], meta: PostsMeta }>());
export const loadPostsFailure = createAction('[Posts] Load Posts Failure', props<{ error: any }>());
export const loadDetail = createAction('[Posts] Load Detail', props<{ id: string }>());
export const loadDetailSuccess = createAction('[Posts] Load Detail Success', props<{ detail: PostDetail }>());
export const loadDetailFailure = createAction('[Posts] Load Detail Failure', props<{ error: any }>());
export const addPost = createAction('[Posts] Add Post', props<{ post: Post }>());
export const updateSearch = createAction('[Posts] Update Search', props<{ search: string }>());
export const updatePage = createAction('[Posts] Update Page', props<{ page: number }>());
export const setLoading = createAction('[Posts] Set Loading', props<{ loading: boolean }>());

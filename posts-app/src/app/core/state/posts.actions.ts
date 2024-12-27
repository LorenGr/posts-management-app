import { createAction, props } from '@ngrx/store';
import { Post } from './posts.state';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction('[Posts] Load Posts Success', props<{ posts: Post[] }>());
export const addPost = createAction('[Posts] Add Post', props<{ post: Post }>());
export const updateSearch = createAction('[Posts] Update Search', props<{ search: string }>());
export const updatePage = createAction('[Posts] Update Page', props<{ page: number }>());
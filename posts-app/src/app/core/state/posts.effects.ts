import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';
import * as PostsActions from './posts.actions';
import { of } from 'rxjs';

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService: PostsService) { }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.loadPosts),
            mergeMap((action) =>
                this.postsService.fetchPosts(action.page, action.limit).pipe(
                    map((response: any) => {
                        return PostsActions.loadPostsSuccess({
                            posts: response.data.posts.data,
                            meta: response.data.posts.meta
                        })
                    },
                        catchError(error => of(PostsActions.loadPostsFailure({ error })))
                    )
                )
            )
        )
    );

    loadPost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.loadDetail),
            mergeMap((action) =>
                this.postsService.fetchPost(action.id).pipe(
                    map((response: any) => PostsActions.loadDetailSuccess({ detail: response.data.post })),
                    catchError(error => of(PostsActions.loadDetailFailure({ error })))
                )
            )
        )
    );


}
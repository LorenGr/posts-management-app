import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';
import * as PostsActions from './posts.actions';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectCurrentPage } from './posts.selectors';

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService: PostsService, private store: Store) { }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.loadPosts),
            withLatestFrom(this.store.pipe(select(selectCurrentPage))),
            mergeMap(([action, currentPage]) =>
                this.postsService.fetchPosts(currentPage + 1, 10).pipe(
                    map((response: any) => {
                        return PostsActions.loadPostsSuccess({
                            posts: response.data.posts.data,
                            meta: {
                                page: currentPage + 1,
                                ...response.data.posts.meta
                            }
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
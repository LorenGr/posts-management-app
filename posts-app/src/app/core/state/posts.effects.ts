import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';
import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService: PostsService) { }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.loadPosts),
            mergeMap(() =>
                this.postsService.fetchPosts(1, 10).pipe(
                    map((response: any) => PostsActions.loadPostsSuccess({ posts: response.data.posts.data })
                    )
                )
            )
        )
    );
}
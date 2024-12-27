import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../core/state/posts.state';
import { selectPost, selectPosts } from '../../core/state/posts.selectors';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-posts-view',
    templateUrl: './posts-view.html',
    standalone: true,
    imports: [StoreModule, CommonModule]
})
export class PostViewComponent implements OnInit {
    post$: Observable<Post | undefined> | undefined;

    constructor(private route: ActivatedRoute, private store: Store) {
    }

    ngOnInit(): void {
        const postId = this.route.snapshot.paramMap.get('id') as string;
        this.post$ = this.store.select(selectPost(postId));
    }
}
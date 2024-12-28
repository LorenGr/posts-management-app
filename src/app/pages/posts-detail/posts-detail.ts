import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPost } from '../../core/state/posts.selectors';
import { CommonModule } from '@angular/common';
import { loadDetail } from '../../core/state/posts.actions';
import { PostDetail } from '../../core/state/posts.state';

@Component({
    selector: 'app-posts-detail',
    templateUrl: './posts-detail.html',
    standalone: true,
    styleUrls: ['./posts-detail.css'],
    imports: [StoreModule, CommonModule, RouterLink]
})
export class PostsDetailComponent implements OnInit {
    post$: Observable<PostDetail | undefined> | undefined;
    postId: string;

    constructor(private route: ActivatedRoute, private store: Store) {
        this.postId = this.route.snapshot.paramMap.get('id') as string;
        this.post$ = this.store.select(selectPost(this.postId));
    }

    ngOnInit(): void {
        this.store.dispatch(loadDetail({ id: this.postId }));
    }
}
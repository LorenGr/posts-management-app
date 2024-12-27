import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../core/state/posts.state';
import { selectPosts } from '../../core/state/posts.selectors';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { loadPosts } from '../../core/state/posts.actions';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.html',
    standalone: true,
    imports: [TruncatePipe, CommonModule, StoreModule]
})
export class PostListComponent {
    posts$: Observable<Post[]>;

    ngOnInit(): void {
        this.store.dispatch(loadPosts());
    }

    constructor(private store: Store, private router: Router) {
        this.posts$ = this.store.select(selectPosts);
    }

    navigateToPost(id: string) {
        this.router.navigate(['/posts', id]);
    }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../core/state/posts.state';
import { selectPosts, selectTotalPosts } from '../../core/state/posts.selectors';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { loadPosts } from '../../core/state/posts.actions';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.html',
    standalone: true,
    imports: [TruncatePipe, CommonModule, StoreModule, MatPaginatorModule]
})
export class PostsListComponent {
    posts$: Observable<Post[]>;
    totalPosts$: Observable<number>;
    currentPage: number = 1;
    limit: number = 10;

    ngOnInit(): void {
        this.store.dispatch(loadPosts({ page: this.currentPage, limit: this.limit }));
    }

    onPageChange(event: PageEvent) {
        this.currentPage = event.pageIndex;
        this.store.dispatch(loadPosts({ page: this.currentPage, limit: event.pageSize }));
    }

    constructor(private store: Store, private router: Router) {
        this.posts$ = this.store.select(selectPosts);
        this.totalPosts$ = this.store.select(selectTotalPosts);
    }

    navigateToPost(id: string) {
        this.router.navigate(['/posts', id]);
    }
}
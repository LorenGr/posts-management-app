import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../core/state/posts.state';
import { selectPosts } from '../../core/state/posts.selectors';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { loadPosts } from '../../core/state/posts.actions';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.html',
    standalone: true,
    imports: [TruncatePipe, CommonModule, StoreModule, PaginationComponent]
})
export class PostsListComponent {
    posts$: Observable<Post[]>;
    currentPage: number = 1;

    ngOnInit(): void {
        this.store.dispatch(loadPosts());
    }

    onPageChange(page: number) {
        this.currentPage = this.currentPage + 1;
    }

    constructor(private store: Store, private router: Router) {
        this.posts$ = this.store.select(selectPosts);
    }

    navigateToPost(id: string) {
        this.router.navigate(['/posts', id]);
    }
}
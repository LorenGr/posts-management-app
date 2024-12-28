import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { Post } from '../../core/state/posts.state';
import { selectPosts, selectSearch, selectTotalPosts } from '../../core/state/posts.selectors';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { loadPosts, updateSearch } from '../../core/state/posts.actions';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormControl, FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.html',
    standalone: true,
    imports: [TruncatePipe, CommonModule, StoreModule, FormsModule, MatFormFieldModule, MatFormField, MatInputModule, MatPaginatorModule]
})
export class PostsListComponent {
    posts$: Observable<Post[]>;
    totalPosts$: Observable<number>;
    filteredPosts$: Observable<Post[]> | undefined;
    currentPage: number = 1;
    limit: number = 10;
    searchTerm$: Observable<string>;


    ngOnInit(): void {
        this.store.dispatch(loadPosts({ page: this.currentPage, limit: this.limit }));
        this.filteredPosts$ = combineLatest([this.posts$, this.searchTerm$]).pipe(
            map(([posts, searchTerm]) =>
                posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        );
    }

    onPageChange(event: PageEvent) {
        this.currentPage = event.pageIndex;
        this.store.dispatch(loadPosts({ page: this.currentPage, limit: event.pageSize }));
    }

    onSearchChange(searchString: string) {
        this.store.dispatch(updateSearch({ search: searchString }));
    }

    constructor(private store: Store, private router: Router) {
        this.posts$ = this.store.select(selectPosts);
        this.totalPosts$ = this.store.select(selectTotalPosts);
        this.searchTerm$ = this.store.select(selectSearch);
    }

    navigateToPost(id: string) {
        this.router.navigate(['/posts', id]);
    }
}
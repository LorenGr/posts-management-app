import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { Post } from '../../core/state/posts.state';
import { selectCurrentPage, selectPosts, selectSearch, selectTotalPosts } from '../../core/state/posts.selectors';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { loadPosts, updatePage } from '../../core/state/posts.actions';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreatePostButtonComponent } from '../../shared/components/create-post-button/create-post-button.component';
import { ColorSelectorComponent } from '../../shared/components/color-selector/color-selector.component';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.html',
    standalone: true,
    styleUrls: ['./posts-list.css'],
    imports: [TruncatePipe, CommonModule, StoreModule, FormsModule, MatFormFieldModule, CreatePostButtonComponent, MatFormField, MatInputModule, MatPaginatorModule, ColorSelectorComponent]
})
export class PostsListComponent {
    posts$: Observable<Post[]>;
    totalPosts$: Observable<number>;
    filteredPosts$: Observable<Post[]> | undefined;
    limit: number = 10;
    searchTerm$: Observable<string>;
    currentPage$: Observable<number>;


    ngOnInit(): void {
        this.store.dispatch(loadPosts());
        this.filteredPosts$ = combineLatest([this.posts$, this.searchTerm$]).pipe(
            map(([posts, searchTerm]) =>
                posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        );
    }

    onPageChange(event: PageEvent) {
        this.store.dispatch(updatePage({ page: event.pageIndex }));
        this.store.dispatch(loadPosts());
    }

    constructor(private store: Store, private router: Router) {
        this.posts$ = this.store.select(selectPosts);
        this.currentPage$ = this.store.select(selectCurrentPage);
        this.totalPosts$ = this.store.select(selectTotalPosts);
        this.searchTerm$ = this.store.select(selectSearch);
    }

    navigateToPost(id: string) {
        this.router.navigate(['/posts', id]);
    }
}
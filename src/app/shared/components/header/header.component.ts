import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreatePostButtonComponent } from '../create-post-button/create-post-button.component';
import { ColorSelectorComponent } from '../color-selector/color-selector.component';
import { Store } from '@ngrx/store';
import { addPost, loadPosts, updatePage, updateSearch } from '../../../core/state/posts.actions';
import { Router } from '@angular/router';
import { selectSearch } from '../../../core/state/posts.selectors';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    styleUrls: ['./header.component.css'],
    imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, CreatePostButtonComponent, ColorSelectorComponent]
})
export class HeaderComponent {

    searchTerm: string = '';
    searchTerm$: Observable<string>;
    private subscription: Subscription;

    constructor(private store: Store, private router: Router) {
        this.searchTerm$ = this.store.select(selectSearch);
        this.subscription = this.searchTerm$.subscribe(searchTerm => {
            this.searchTerm = searchTerm;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    goToPosts(): void {
        if (this.router.url !== '/posts') {
            this.router.navigate(['/posts']);
        }
    }

    onSearchChange(searchString: string): void {
        this.searchTerm = searchString;
        this.store.dispatch(updateSearch({ search: searchString }));
        this.goToPosts();
    }

    createPost(post: { title: string, body: string }): void {
        this.store.dispatch(addPost({ post: { ...post, id: Math.random().toString() } }));
        this.store.dispatch(updatePage({ page: 0 }));
        this.store.dispatch(updateSearch({ search: "" }));
        this.goToPosts();
        this.store.dispatch(loadPosts());
    }
}
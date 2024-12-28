import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreatePostButtonComponent } from '../create-post-button/create-post-button.component';
import { ColorSelectorComponent } from '../color-selector/color-selector.component';
import { Store } from '@ngrx/store';
import { addPost, loadPosts, updatePage, updateSearch } from '../../../core/state/posts.actions';
import { Actions } from '@ngrx/effects';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    styleUrls: ['./header.component.css'],
    imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, CreatePostButtonComponent, ColorSelectorComponent]
})
export class HeaderComponent {

    searchTerm: string = '';

    constructor(private store: Store) { }

    onSearchChange(searchString: string): void {
        this.searchTerm = searchString;
        this.store.dispatch(updateSearch({ search: searchString }));
    }

    createPost(post: { title: string, body: string }): void {
        this.store.dispatch(addPost({ post: { ...post, id: Math.random().toString() } }));
        this.store.dispatch(updatePage({ page: 0 }));
        this.store.dispatch(loadPosts());
    }
}
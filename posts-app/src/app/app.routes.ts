import { Routes } from '@angular/router';
import { PostListComponent } from './pages/posts-list/posts-list';
import { PostViewComponent } from './pages/posts-view/posts-view';

export const routes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'posts/:id', component: PostViewComponent },
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: '**', redirectTo: '/posts' },
];


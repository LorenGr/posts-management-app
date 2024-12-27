import { Routes } from '@angular/router';
import { PostsDetailComponent } from './pages/posts-detail/posts-detail';
import { PostsListComponent } from './pages/posts-list/posts-list';

export const routes: Routes = [
    { path: 'posts', component: PostsListComponent },
    { path: 'posts/:id', component: PostsDetailComponent },
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: '**', redirectTo: '/posts' },
];


import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { createApollo } from './core/services/apollo.config';
import { provideStore } from '@ngrx/store';
import { postsReducer } from './core/state/posts.reducer';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from './core/state/posts.effects';
import { provideApollo } from 'apollo-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideApollo(() => createApollo()),
    provideStore({ posts: postsReducer }),
    provideEffects([PostsEffects])
  ]
};

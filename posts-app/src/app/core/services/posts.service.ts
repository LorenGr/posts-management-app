import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class PostsService {
    constructor(private apollo: Apollo) { }

    fetchPost(id: string) {
        return this.apollo.query({
            query: gql`
                query GetPost($id: ID!) {
                    post(id: $id) {
                        id
                        title
                        body
                    }
                }
            `,
            variables: {
                id
            }
        });
    }

    fetchPosts(page: number, limit: number) {
        return this.apollo.query({
            query: gql`
            query GetPosts($options: PageQueryOptions) {
                posts(options: $options) {
                    data {
                        id
                        title
                        body
                    }
                    meta {
                        totalCount
                    }
                }
            }
        `,
            variables: {
                options: {
                    paginate: {
                        page,
                        limit
                    }
                }
            }
        });
    }

    createPost(title: string, body: string) {
        return {
            id: Math.random().toString(),
            title,
            body,
        }; // Simulate local post creation
    }
}
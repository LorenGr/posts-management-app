import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

export function createApollo(): ApolloClientOptions<any> {
    return {
        uri: 'https://graphqlzero.almansi.me/api',
        cache: new InMemoryCache(),
    };
}

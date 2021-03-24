import mutations from './mutations';
import queries from './queries';

const resolvers = {
    Query: {
        ...queries
    },
    Mutations: {
        ...mutations
    }
}

export default resolvers;
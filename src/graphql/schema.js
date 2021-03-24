import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers/index';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(`${__dirname}/**/*.graphql`), { all: true });
export default makeExecutableSchema({ typeDefs, resolvers });
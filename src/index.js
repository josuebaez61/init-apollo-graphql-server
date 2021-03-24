// import Schema from './schemas/schemas';
import { ApolloServer } from 'apollo-server';
import schema from './graphql/schema';
import dotenv from 'dotenv';

dotenv.config(); // Environments variables

const port = process.env.PORT || 5000;

const srv = new ApolloServer({
    schema,
    introspection: true
});


srv.listen(port).then(({url}) => console.log(`Server ready at ${ url }`));
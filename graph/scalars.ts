import { GraphQLScalarType, Kind } from 'graphql';
import { ObjectId } from 'mongodb';

export const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.toISOString(); // Convert outgoing Date to string
  },
  parseValue(value: string) {
    return new Date(value); // Convert incoming string to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING || ast.kind === Kind.INT) {
      return new Date(ast.value); // Convert hard-coded AST string to integer and then to Date
    }
    return null;
  },
});

export const ObjectIdScalar = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'Mongo ObjectId custom scalar type',
  serialize(value) {
    return String(value); // Convert outgoing Date to string
  },
  parseValue(value: string) {
    return new ObjectId(value); // Convert incoming string to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new ObjectId(ast.value); // Convert hard-coded AST string to integer and then to Date
    }

    return null;
  },
});

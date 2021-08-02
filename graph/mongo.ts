import { Db, MongoClient } from 'mongodb';
import { DbCollections, User } from '/types/schema/generated';

// Connection URL
const url = process.env.MONGO_URI;
export const mongoClient = new MongoClient(url || '');

// Database Names
export const DatabaseName = 'next-app';

class MongoConnection {
  Database: Db = undefined as unknown as Db;

  _connectionPromise: Promise<MongoClient> =
    undefined as unknown as Promise<MongoClient>;

  constructor() {
    this._connectionPromise = mongoClient.connect();

    this._connectionPromise
      .then(() => {
        this.Database = mongoClient.db(DatabaseName);
      })
      .catch((error) => {
        throw error;
      });
  }

  get connectionPromise() {
    return this._connectionPromise;
  }

  getCollection<DocumentType>(collectionName: DbCollections) {
    if (this.Database) {
      return this.Database.collection<DocumentType>(collectionName);
    }
    throw new Error('Mongo connection not initialized');
  }

  get Users() {
    return this.getCollection<User>(DbCollections.Users);
  }
}

export const Mongo = new MongoConnection();

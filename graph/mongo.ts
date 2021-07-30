import { Db, MongoClient } from 'mongodb';
import { DbCollections, User } from '/types/schema/generated';

// Connection URL
const url = 'mongodb://root:example@localhost:27017/next-app?authSource=admin';
export const mongoClient = new MongoClient(url);

// Database Name
export const DatabaseName = 'next-app';

class MongoConnection {
  Database: Db = undefined as unknown as Db;

  constructor() {
    mongoClient
      .connect()
      .then(() => {
        this.Database = mongoClient.db(DatabaseName);
      })
      .catch((error) => {
        throw error;
      });
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

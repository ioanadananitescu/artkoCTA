
/* import { MongoClient } from 'mongodb';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Set up database connection
  database: process.env.MONGODB_URI,

  // Define the callbacks for user creation and updating
  callbacks: {
    async signIn(user, account, profile) {
      // You can perform custom actions when a user signs in
      return true;
    },

    async session(session, user) {
      // You can modify the session object here
      return session;
    },

    async jwt(token, user, account, profile, isNewUser) {
      // You can add custom fields to the token payload
      return token;
    },
  },

  // Define event handlers
  events: {
    async createUser(user) {
      // You can perform actions when a new user is created
    },
  },
}); */
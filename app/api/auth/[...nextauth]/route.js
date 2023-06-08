import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            
        })
    ],
    

callbacks:{    
   
        async session({ session }) {
            const sessionUser = await User.findOne({ email: session.user.email })
            session.user.id = sessionUser._id.toString();
            return session;
        },

        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB();
                    //check if the user is already in the database
                const userExists = await User.findOne({ email: profile.email });
                console.log('User exists');

            //if the user doesn't exist, create the user
                if (!userExists) {
             
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })}   
                return true;
            } catch (error) {
                console.log(error.message);
                return false;
                
            } 
        

           
         
            
               
           


            }
        
        }
    
    })


export {handler as GET, handler as POST}

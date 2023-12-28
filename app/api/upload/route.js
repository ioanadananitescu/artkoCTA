// pages/api/images.js
import Imagine from '../../../models/image';
import mongoose from "mongoose";

export const POST=async (request)=> {


    const{imageUrl}=await request.json();
    
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbname: "ArtkoNext1",
        
    });
      
      // Save the image URL to MongoDB
      const image = new Imagine({ imageUrl });
      await image.save();
      return new Response(JSON.stringify(image), { status: 201 })
    } catch (error) {
     
        return new Response("Failed to create a new prompt", { status: 500 });
        
    }
}

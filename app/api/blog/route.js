import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const prompts = await Blog.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })

        
    } catch (error) {
        return new Response("Failed to fetch all blogs", { status: 500 })
    }
} 
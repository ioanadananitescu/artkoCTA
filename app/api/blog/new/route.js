import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const {userId, title, text, tag, category, imageUrl} = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Blog({creator:userId, title, text, tag, category, imageUrl });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
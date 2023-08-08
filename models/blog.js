import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({

creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }, 
  title: {
    type: String,
    required: [true, 'A title is required.'],
  },
  text:{
    type:String,
    required: [true, 'A text is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }, 

  category: {
    type: String, 
    required: [true, 'Please choose a category']
  }, 

  imageUrl: {
    type: String, 
    required:[true, 'Set an image, please']
  }
});

const Blog =models.Blog || model('Blog', BlogSchema);

export default Blog;
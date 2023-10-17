'use client'
import React, { useState } from 'react';



const ImageUpload = () => {
 const [selectedImage, setSelectedImage] = useState(null);
 
  const[imageUrl, setImageUrl]=useState({imageUrl:" "});

  const handleFileUpload = (event) => {
    setSelectedImage(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(file));
     
  }

  const handleSubmit = async () => {
    
      const formData = new FormData();
      formData.append('file', selectedImage);
     
     
      formData.append('upload_preset', 'artkonext');
try {
      const data= await fetch('https://api.cloudinary.com/v1_1/dlel1msov/image/upload', 
      {
        method:'POST',
        body:formData
      }).then(r=>r.json());

      const secureUrl=data.secure_url;
      setImageUrl(secureUrl);
  
        
        console.log('Image uploaded successfully!', data);

        console.log('the url that will be passed:', secureUrl);

        await fetch('/api/upload',  {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify({ imageUrl: secureUrl }),
        } );
  
        console.log('Image URL sent to API and stored in the database.');

      } catch (error) {
        console.error('Failed to upload image.');
      }
  
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" width="200" height="200" />
          <button onClick={handleSubmit}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

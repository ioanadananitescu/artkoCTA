"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import ArtistCard from "@components/ArtistCard";

const MoreWorks = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);
console.log(userPosts);

  return (
    <ArtistCard
      name={userName}
      desc={`A curated selection of ${userName}'s work.`}
      data={userPosts}
     
      
    
    />
  );
};

export default MoreWorks;
"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";
import Skeleton from "./Skeleton";


const PromptCardList = ({ data, handleTagClick }) => {
    
  return (
    <>
   
        <div className="gap-8 xs:columns-1 md:columns-3 sm:columns-2 "  > 
    {data.map((post) => (
 <div className="py-3">
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        /></div>
      ))}
    </div>
  

</>
  )
}

const FirstPageFeed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading]=useState(true);

  // Search states - the search bar that will not be present in the first page
  const [searchText, setSearchText] = useState(""); 
  

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(allPosts);
  

//code for the search bar  

const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };



  const handleTagClick = () => {
   
  };


  return (
    <>
     {/*<section className='mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2'>
      <form className='relative w-full gap-3 flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
           value={searchText}
          onChange={()=>{}}
          required
          className='search_input peer'
        />
      </form>

      {/* All Prompts */}
      {/* {searchText ? (
        <PromptCardList
         
        />):(<div></div>) */}
      {loading? 
      (<Skeleton/>)
      :
        (<PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </>
  );
};

export default FirstPageFeed;
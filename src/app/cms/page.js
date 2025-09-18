"use client";
import { useState, useEffect, useRef } from "react";
import { supabase } from "../lip/supabaseClient";

export default function CMS() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const postManagementRef = useRef(null);


  function formvalidation(title) {
    const newErrors = {};
    if (title.length < 3 || title.length > 100) {
      newErrors.title = "Title must be between 3 and 100 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }


  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: false });
    setPosts(data);
  }


  async function addPosts() {
    if (!formvalidation(title)) return;
    await supabase.from("posts").insert({ title, description });
    setTitle("");
    setDescription("");
    await fetchPosts();
  }


  useEffect(() => {
    fetchPosts();
  }, []);
  async function deletePost(id) {
    await supabase.from("posts").delete().eq("id", id);
    fetchPosts();
    }
  return (
    <>

      <div className="mx-10">
        <h1 className="flex justify-center text-4xl font-bold my-5">
          Post Form
        </h1>

        <div className="flex flex-col gap-2 justify-center">
          <label>Post Title</label>
          <input
            className="border border-gray-500 rounded-lg px-2 py-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}

          <label>Post Description</label>
          <input
            className="border border-gray-500 rounded-lg px-2 py-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="border-2 border-green-500 py-1 px-2 my-5 cursor-pointer hover:bg-gray-300 rounded-lg"
          onClick={addPosts}
        >
          Add Posts
        </button>


        <h1
          ref={postManagementRef}
          className="flex justify-center text-4xl font-bold my-5"
        >
          Post Management
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border-2 border-gray-500 shadow-lg rounded-lg p-5"
            >
              <div className="text-xl font-bold my-5">{post.title}</div>
              <div className="text-black line-clamp-2 break-words">{post.description}</div>
              <button className="border-2 border-red-500 py-1 px-1 cursor-pointer hover:bg-gray-300 rounded-lg" onClick={() => deletePost(post.id)}
                >
                    Delete
                </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

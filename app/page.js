import React from 'react';

const page = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();
  console.log(posts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-100">
      {posts.map((post) => (
        <div className="bg-gray-600 p-4 rounded-lg shadow-md" key={post.id}>
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-800">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default page;

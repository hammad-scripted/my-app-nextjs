import React from 'react';

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <h1>this is a catch all route page for the slug {slug}</h1>
      <h1>This is the {slug} page of our Next.js application Page</h1>
    </div>
  );
};

export default page;

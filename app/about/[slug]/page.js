import React from 'react';

const page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h1>This is the {slug} page of our Next.js application Page</h1>
    </div>
  );
};

export default page;

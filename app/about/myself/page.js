import React from 'react';

const page = () => {
  return (
    <div>
      <h1>Myself Page</h1>
      <p>This is the myself page of our Next.js application.</p>
      <li>
        <a href="/about">Go to About Page</a>
      </li>
      <ul>
        <li>
          Myquote: "The only way to do great work is to love what you do." -
          Steve Jobs
        </li>
      </ul>
    </div>
  );
};

export default page;

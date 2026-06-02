import React from 'react';

const AdminLayout = ({ children, analytics, team }) => {
  return (
    <div className="flex gap-4 items-center justify-center bg-yellow-400 min-h-screen p-5 mt-5">
      <div className="flex bg-amber-900">{children}</div>

      <div className="flex flex-col gap-4 bg-blue-600 p-5 rounded-md text-white">
        <div
          className="flex flex-col gap-4 bg-violet-600 p-5 rounded-md text-white 
        
        "
        >
          {analytics}
        </div>
        <div className="flex flex-col gap-4 bg-green-600 p-5 rounded-md text-white">
          {team}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

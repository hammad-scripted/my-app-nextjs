import React from 'react';
import Link from 'next/link';
const TeamPage = () => {
  return (
    <div>
      <Link href={'/admin-dashboard/team-docs'}>This is the Team Page</Link>
    </div>
  );
};

export default TeamPage;

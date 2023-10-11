import React from "react";
import ProfileCard from './ProfileCard'

const PeoplePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-10">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

export default PeoplePage;

{/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
<img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Default avatar"> */}

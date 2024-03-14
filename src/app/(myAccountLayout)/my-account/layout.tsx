import React from "react";

const myAccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <div className="w-1/6 h-screen bg-gray-200 text-black">
        <ul>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default myAccountLayout;

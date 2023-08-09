import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="bg-yellow-300 p-2.5">about nav bar</nav>
      <main> {children}</main>
    </div>
  );
};

export default AboutLayout;

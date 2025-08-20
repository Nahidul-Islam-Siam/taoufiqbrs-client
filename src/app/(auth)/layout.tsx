"use client";

import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden">
      <div className=" overflow-hidden">{children}</div>
    </div>
  );
};

export default layout;

import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black w-full h-full overflow-auto">
      <div className="w-full h-full container mx-auto ">{children}</div>
    </div>
  );
}

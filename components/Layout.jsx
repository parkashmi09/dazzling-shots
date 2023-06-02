import React from "react";

export default function Layout({ children, className }) {
  return (
    <div
      className={`w-full max-w-full mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
}

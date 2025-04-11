import React from "react";

export function Button({ className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-white text-sm font-medium hover:opacity-90 transition ${className}`}
      {...props}
    />
  );
}

// src/components/ui/Card.tsx
import React from "react";

export function Card({ children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}

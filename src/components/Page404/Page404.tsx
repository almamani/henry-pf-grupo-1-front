// src/components/Page404.tsx
"use client";

import React from "react";
import Link from "next/link";

const Page404: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center p-4 bg-gray-100">
      <h1 className="text-8xl font-extrabold text-gray-800 mb-6">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        No tienes permiso para acceder a esta página.
      </p>
      <Link
        href="/"
        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default Page404;

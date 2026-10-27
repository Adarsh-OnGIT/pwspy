"use client"; // Next.js App Router ke liye zaroori hai

import { useEffect } from "react";

export default function DashboardPage() {
  useEffect(() => {
    // Check karein ki code browser environment mein hi chal raha hai
    if (typeof window !== "undefined") {
      const tokenData = {
        exp: Date.now() + 31536000000, // 1 saal ki validity
      };
      
      localStorage.setItem("rcz_token", JSON.stringify(tokenData));
      console.log("Token set in localStorage successfully!");
    }
  }, []); // Empty dependency array se ye sirf initial component mount par chalega

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
    </div>
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://192.168.56.1:3000",  // IP bạn dùng để truy cập
    "http://localhost:3000",     // localhost
  ],
};

export default nextConfig;

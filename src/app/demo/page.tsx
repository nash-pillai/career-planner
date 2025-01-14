"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Careers() {
  return (
    <div>
      <h1 className="py-8 text-center text-3xl font-semibold">
        Watch this video to learn more about our service!
      </h1>
      <video
        src="https://res.cloudinary.com/jaybots/video/upload/v1729820950/cdn/northstar/demo.mp4"
        className="mx-auto max-w-6xl rounded-lg"
        controls
      />
      <div>
        <Link href="/">
          <Button className="mx-auto my-8 block bg-purple-600 text-lg hover:bg-purple-500">
            Now, check out our website for yourself!
          </Button>
        </Link>
      </div>
    </div>
  );
}

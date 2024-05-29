import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Sajitz's Blog | Web Development, Experiences, and More",
  description: "Frontend Webdeveloper",
};

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-sky-500 dark:text-blue-700">
        Blog
      </h1>
    </div>
  );
}

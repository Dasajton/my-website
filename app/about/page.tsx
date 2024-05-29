import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About David Sajitz | Frontend Webdeveloper",
  description: "Frontend Webdeveloper",
};

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-sky-500 dark:text-blue-700">
        About Me
      </h1>
    </div>
  );
}

import Link from "next/link";

export default function DropdownLink({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="mx-auto my-4 flex w-5/6 items-center rounded-lg bg-blue-700 p-6 text-2xl text-slate-200 shadow-md shadow-sky-500 dark:bg-sky-500 dark:shadow-blue-700"
    >
      {children}
    </Link>
  );
}

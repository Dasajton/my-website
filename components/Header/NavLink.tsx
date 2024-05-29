import Link from "next/link";

export default function NavLink({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return <Link href={href}>{children}</Link>;
}

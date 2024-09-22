import Link from "next/link";

export default function Header() {
  return (
    <ul className="flex gap-2 bg-orange-600">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link href="/career">Career</Link>
      </li>
    </ul>
  );
}

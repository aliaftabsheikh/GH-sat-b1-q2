import Link from "next/link";

export default function Header() {
  return (
    <header>
      <ul className="flex gap-2 bg-red-500">
        <Link href="/about">
        <li>About</li>
        </Link>

        <li>Contact Us</li>
        <li>Careers</li>
      </ul>
    </header>
  );
}

import Link from "next/link";

export default function About() {
  return (
    <div>
      <ul className="flex gap-2 bg-orange-600">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/career">Careers</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <h1>About Page</h1>{" "}
    </div>
  );
}

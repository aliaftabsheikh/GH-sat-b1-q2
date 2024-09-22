Components
What are Components?
In Next.js, components are reusable pieces of UI that help you build pages efficiently. They are often used for common UI patterns like buttons, headers, footers, etc.

Creating a Component
To create a component, simply define a new .tsx file under the src/components folder.

Example:

Create a Header.tsx in the src/components/ directory:

import Link from "next/link";

```
// src/Components/Header.tsx

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
```

How to use a component ?

```
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header /> // Header Component
        {children}
        <Footer /> // Footer component
      </body>
    </html>
  );
}
```

Layouts
What are Layouts?
Layouts in Next.js are used to wrap multiple pages with shared UI elements like navigation, headers, footers, and sidebars. They help in maintaining a consistent layout across different pages of your app.

This layout wraps all the pages in the application, providing a consistent header and footer.

Usage in Pages:

Layouts automatically wrap the page.tsx files located within their respective directories. In this example, the RootLayout will wrap the entire application.

Here is a diagram demonstration of a Layout file, and how it works.

![Screenshot (6)](https://github.com/user-attachments/assets/264e16f7-4e6b-4eea-b051-f51b248eeae9)

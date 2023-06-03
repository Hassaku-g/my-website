import Link from "next/link";

export default function CustomLink({ href, children }) {
  return (
    <>
      <a href={href} ref="noopener noreferrer">
        {children}
      </a>
    </>
  );
}

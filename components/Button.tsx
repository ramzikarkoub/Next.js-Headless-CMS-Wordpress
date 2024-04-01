import Link from "next/link";
import React from "react";

export default function Button({ name, padding, href, target, className }) {
  const combinedClassName = `${padding} ${className}`;

  return (
    <Link href={href} target={target} className={combinedClassName}>
      {name}
    </Link>
  );
}

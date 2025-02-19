import { IButton } from "@/interfaces/IButton";
import Link from "next/link";

export default function Button({ label, type, link, apparence }: IButton) {
  return link ? (
    <Link
      href={link}
      className={`${apparence} transition-colors duration-300 ease-in-out inline-block`}
    >
      <button type={type} className={`w-full h-full`}>
        {label}
      </button>
    </Link>
  ) : (
    <button
      type={type}
      className={`${apparence}  transition-colors duration-300 ease-in-out `}
    >
      {label}
    </button>
  );
}

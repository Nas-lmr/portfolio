import { IButton } from "@/interfaces/IButton";
import Link from "next/link";

export default function Button({
  label,
  bgColor,
  width,
  height,
  borderRadius,
  type,
  textColor,
  margin,
  link,
}: IButton) {
  return link ? (
    <Link
      href={link}
      className={`${bgColor} ${width} ${height} ${borderRadius} ${margin} inline-block`}
    >
      <button
        type={type}
        className={`w-full h-full ${textColor} transition duration-300 ease-in-out`}
      >
        {label}
      </button>
    </Link>
  ) : (
    <button
      type={type}
      className={`${bgColor} ${width} ${height} ${borderRadius} ${textColor} ${margin} transition duration-300 ease-in-out `}
    >
      {label}
    </button>
  );
}

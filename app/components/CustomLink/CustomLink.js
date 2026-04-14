import Link from "next/link";

const CustomLink = ({ children, path }) => {
  return <Link href={path}>{children}</Link>;
};

export default CustomLink;

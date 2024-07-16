import Link from "next/link";

type Props = { params: { lng: string } };
export default function Navbar({ params }: Props) {
  const { lng } = params;

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href={`/${lng}/about`}>About</Link>
      <Link href={`/${lng}/support`}>Support</Link>
    </nav>
  );
}

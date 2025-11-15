import Link from "next/link";
import Image from "next/image";
import logoImage from "/public/images/imprenta.png"; // your logo image

export default function Logo() {
  return (
    <Link href="https://arachniweb.vercel.app/" className="inline-flex" aria-label="Imprenta">
      <Image
        src="/images/arachni-web-logo.png"
        alt="Imprenta Logo"
        width={28}   // adjust to your desired size
        height={28}
        className="object-contain"
      />
    </Link>
  );
}

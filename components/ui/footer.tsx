import Link from "next/link";
import Logo from "./logo";
import { SocialIcon } from "react-social-icons";

const socialLinks = [
  {
    url: "https://www.instagram.com/imprenta_malloco/",
    label: "Instagram",
  },
  {
    url: "https://wa.me/5694467757",
    label: "WhatsApp",
  },
];

export default function FooterHero({ border = false }: { border?: boolean }) {
  return (
    <footer
      className={`w-full bg-gradient-to-t from-gray-100 to-gray-50 py-24 ${
        border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-12">
        {/* Social Links centered */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Síguenos en nuestras redes</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.url}
                url={link.url}
                bgColor="#000"
                style={{ height: 48, width: 48 }}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Logo + Copyright at bottom left */}
        <div className="flex items-center justify-start gap-4">
          <Logo />
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ArachniWeb.cl - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

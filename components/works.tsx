import Image from "next/image";
import letrero from "@/public/images/Letrero.png"
import calendario from "@/public/images/Calendario.png"
import autocopiativo from "@/public/images/Autocopiativos.png"
import timbre from "@/public/images/Timbre.png"
import ordenes from "@/public/images/ordenes-de-trabajo-personalizadas.png"
import tarjeta from "@/public/images/Tarjeta.png"

export default function Works() {
  const works = [
    { src: "/images/Letrero.png", alt: "Pendón publicitario" },
    { src: "/images/Calendario.png", alt: "Calendarios" },
    { src: "/images/Autocopiativos.png", alt: "Autocopiativos" },
    { src: "/images/Timbre.png", alt: "Timbres" },
    { src: "/images/ordenes-de-trabajo-personalizadas.png", alt: "Ordenes de trabajo personalizadas"  },
    { src: "/images/Tarjeta.png", alt: "Tarjetas" },
  ];

  return (
    <section className="relative">
        <section className="py-20 bg-white dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-black-500">
            Nuestro Trabajo
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {works.map((work, index) => (
                <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                >
                <Image
                    src={work.src}
                    alt={work.alt}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                />
                </div>
            ))}
            </div>
        </div>
        </section>
    </section>
  );
}
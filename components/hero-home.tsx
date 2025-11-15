import Image from "next/image";


export default function HeroHome() {
  return (
    <section className="relative w-full h-[120vh]"> {/* altura definida */}
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/imprenta-wallpaper-2.png"
          alt="imprenta-logo"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Contenido */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-6 md:pb-20 md:pt-6">
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <div className="flex justify-center">
                  <Image
                    src="/images/imprenta.png"
                    alt="imprenta-logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-full w-full max-w-[500px] h-auto"
                  />
                </div>
              </div>
            </div>
            <h1
                className="text-red-500 mb-6 border-y text-5xl font-bold md:text-6xl"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
                data-aos="zoom-y-out"
                data-aos-delay={150} >
              Pendones, autoadhesivos, calendarios, volantes, tarjetas, comandas
              y más!
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}


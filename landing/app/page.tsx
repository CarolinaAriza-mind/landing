import { FaWhatsapp } from "react-icons/fa";

const phone = "5492804389138"; // Reemplazar por el WhatsApp del negocio

const wa = (message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const services = [
  {
    number: "01",
    name: "Limpieza facial",
    description: "Tratamientos personalizados para cuidar y renovar tu piel.",
    time: "60 minutos",
  },
  {
    number: "02",
    name: "Tratamientos faciales",
    description:
      "Experiencias de cuidado adaptadas a las necesidades de cada piel.",
    time: "45-60 minutos",
  },
  {
    number: "03",
    name: "Diseño de cejas",
    description: "Diseño y perfilado para realzar tu mirada.",
    time: "30 minutos",
  },
];

export const metadata = {
  title: "AURA Estudio | Belleza y bienestar",
  description:
    "Un espacio dedicado al cuidado personal. Conocé nuestros tratamientos y reservá tu turno.",
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAF8F4] text-[#302923]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#e9e1d7] bg-[#FAF8F4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-semibold tracking-[0.25em]">
            AURA<span className="text-[#AD896B]">.</span>
          </a>

          <nav className="hidden items-center gap-9 text-sm md:flex">
            <a href="#inicio" className="hover:text-[#AD896B]">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-[#AD896B]">
              Servicios
            </a>
            <a href="#nosotros" className="hover:text-[#AD896B]">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-[#AD896B]">
              Contacto
            </a>
          </nav>

          <a
            href={wa("Hola, quiero consultar por un turno en AURA")}
            target="_blank"
            rel="noreferrer"
            className="bg-[#40352D] px-5 py-3 text-xs tracking-wider text-white transition hover:bg-[#AD896B]"
          >
            RESERVAR TURNO
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24"
      >
        <div className="max-w-xl">
          <span className="text-xs font-medium tracking-[0.3em] text-[#AD896B]">
            BELLEZA · CUIDADO · BIENESTAR
          </span>

          <h1 className="mt-7 font-serif text-6xl leading-[1.08] md:text-7xl">
            Un momento
            <br />
            para <span className="italic text-[#AD896B]">vos.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-8 text-[#766D64]">
            Un espacio pensado para desconectar de la rutina, cuidar tu piel y
            disfrutar de una experiencia de belleza personalizada.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={wa("Hola, quiero reservar un turno.")}
              target="_blank"
              rel="noreferrer"
              className="bg-[#40352D] px-8 py-4 text-sm text-white transition hover:bg-[#AD896B]"
            >
              Reservar mi turno →
            </a>
            <a
              href="#servicios"
              className="border border-[#B9AA9A] px-8 py-4 text-sm transition hover:bg-[#EDE5DA]"
            >
              Conocer servicios
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-[#E4DCD1] pt-7">
            <span className="text-3xl text-[#AD896B]">✳</span>
            <p className="text-xs leading-6 text-[#766D64]">
              Atención personalizada
              <br />
              Cada detalle pensado para vos
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="min-h-[480px] bg-cover bg-center md:min-h-[570px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200')",
            }}
          />
          <div className="absolute -bottom-6 -left-4 bg-[#EDE5DA] p-6 md:-left-10">
            <p className="font-serif text-2xl italic">Tu espacio.</p>
            <p className="mt-1 text-xs tracking-widest text-[#766D64]">
              TU MOMENTO
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="border-y border-[#E9E1D7] bg-[#F1ECE5]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-center sm:grid-cols-3">
          {[
            ["✳", "Atención personalizada"],
            ["♡", "Experiencias de bienestar"],
            ["◇", "Cuidado en cada detalle"],
          ].map(([icon, title]) => (
            <div key={title}>
              <span className="text-2xl text-[#AD896B]">{icon}</span>
              <p className="mt-2 text-sm">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <span className="text-xs tracking-[0.3em] text-[#AD896B]">
            NUESTROS SERVICIOS
          </span>
          <h2 className="mt-5 font-serif text-5xl">
            Cuidarte es parte del viaje
          </h2>
          <p className="mt-5 leading-7 text-[#766D64]">
            Descubrí nuestras propuestas y encontrá el tratamiento ideal para
            vos
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="border border-[#E7DED3] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="text-sm text-[#AD896B]">{service.number}</span>
              <h3 className="mt-9 font-serif text-3xl">{service.name}</h3>
              <p className="mt-5 min-h-20 text-sm leading-7 text-[#766D64]">
                {service.description}
              </p>
              <div className="mt-7 border-t border-[#E9E1D7] pt-5">
                <p className="text-xs text-[#766D64]">
                  DURACIÓN: {service.time}
                </p>
                <a
                  href={wa(`Hola, quiero consultar por ${service.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#AD896B] hover:text-[#40352D]"
                >
                  Consultar disponibilidad →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-[#EDE5DA]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
          <div
            className="min-h-[430px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200')",
            }}
          />

          <div>
            <span className="text-xs tracking-[0.3em] text-[#AD896B]">
              CONOCÉ A AURA
            </span>
            <h2 className="mt-6 font-serif text-5xl leading-tight">
              Belleza que nace del cuidado.
            </h2>
            <p className="mt-7 leading-8 text-[#766D64]">
              Creemos que dedicarte tiempo también es una forma de cuidarte. Por
              eso creamos un espacio cálido, donde cada persona recibe atención
              y tratamientos pensados para sus necesidades.
            </p>
            <p className="mt-5 leading-8 text-[#766D64]">
              Nuestro objetivo es que cada visita sea una experiencia para
              disfrutar.
            </p>
            <a
              href={wa("Hola, quiero conocer más sobre AURA.")}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-block border-b border-[#AD896B] pb-2 text-sm"
            >
              Conocenos mejor →
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <span className="text-xs tracking-[0.3em] text-[#AD896B]">
            NUESTRO ESPACIO
          </span>
          <h2 className="mt-5 font-serif text-5xl">Pequeños momentos</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            "photo-1570172619644-dfd03ed5d881",
            "photo-1560750588-73207b1ef5b8",
            "photo-1512290923902-8a9f81dc236c",
          ].map((photo) => (
            <div
              key={photo}
              className="aspect-[4/5] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/${photo}?w=800')`,
              }}
            />
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-[#766D64]">
          Fotografías ilustrativas para esta demostración.
        </p>
      </section>

      {/* CTA */}
      <section
        id="contacto"
        className="bg-[#40352D] px-6 py-24 text-center text-white"
      >
        <span className="text-xs tracking-[0.3em] text-[#D6B99D]">
          TU MOMENTO EMPIEZA ACÁ
        </span>
        <h2 className="mx-auto mt-6 max-w-2xl font-serif text-5xl leading-tight md:text-6xl">
          Regalate un momento para vos
        </h2>
        <p className="mx-auto mt-6 max-w-lg leading-7 text-[#DDD1C5]">
          Escribinos y encontrá el tratamiento ideal. Estamos para ayudarte
        </p>
        <a
          href={wa("Hola, quiero reservar un turno en AURA.")}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-block bg-[#D6B99D] px-9 py-4 text-sm text-[#302923] transition hover:bg-white"
        >
          HABLAR POR WHATSAPP →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#302923] px-6 py-9 text-center text-[#D7CCC0]">
        <p className="font-serif text-3xl tracking-[0.2em]">AURA</p>

        <p className="mt-3 text-xs">Belleza · Cuidado · Bienestar</p>

        <p className="mt-7 text-xs text-[#A99B8D]">
          © 2026 AURA Estudio. Demo comercial.
        </p>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={wa("Hola! Quisiera consultar por sus servicios")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#20BA5A]"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </main>
  );
}

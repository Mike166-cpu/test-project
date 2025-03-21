import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShieldCheck, Camera, AlarmClock, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Home = () => {
  const images = [
    "https://source.unsplash.com/1600x900/?security,home",
    "https://source.unsplash.com/1600x900/?security,camera",
    "https://source.unsplash.com/1600x900/?alarm,building",
  ];
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-gradient-to-tr from-gray-200 via-yellow-100/60 to-transparent font-poppins overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('/subtle-pattern.svg')] opacity-10"></div>

        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-10 gap-12">
          {/* Left Column */}
          <div className="text-black text-center md:text-left max-w-2xl animate-fade-in px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Wij creëren een gastvrije en veilige omgeving voor{" "}
              <span className="text-yellow-500 relative inline-block">
                iedereen
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 Q50,10 100,0"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
              <span className="text-yellow-500">.</span>
            </h1>

            <p className="text-gray-700 text-base sm:text-lg mb-8">
              Professionele beveiligingsdiensten voor bedrijven en evenementen
              in heel Nederland.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Gratis Veiligheidscheck
              </button>
              <button className="border-2 border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
                Ons Werk
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full md:w-1/2 h-72 sm:h-96 lg:h-[500px] animate-fade-in px-2">
            <div className="grid grid-cols-3 gap-3 h-full">
              <div className="col-span-2 relative overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="https://beesafesecurity.nl/wp-content/uploads/2024/09/beeafe-1-e1727730659435-1024x783.png"
                  alt="Security professional"
                  className="h-full w-full object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    Professionele beveiliging
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-1/2 relative overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="https://beesafesecurity.nl/wp-content/uploads/2025/01/BEE02519-e1737991922994-971x1024.png"
                    alt="Security guard"
                    className="h-full w-full object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-medium">
                      Evenementenbeveiliging
                    </span>
                  </div>
                </div>

                <div className="h-1/2 relative overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="https://beesafesecurity.nl/wp-content/uploads/2024/09/20240531143718_IMG_0052-1-803x1024.jpg"
                    alt="Security team"
                    className="h-full w-full object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-medium">
                      Team van experts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Yellow Accent */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full -z-10 blur-sm opacity-50"></div>
          </div>
        </div>

      </section>

      {/* end of hero section */}

      <section className="bg-white py-24 px-6 font-poppins">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom kiezen voor{" "}
              <span className="text-yellow-500">BeeSafe Security</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mb-8"></div>
            <p className="text-gray-600 text-lg max-w-xl">
              Wij combineren ervaring, technologie en toewijding om jouw
              omgeving veiliger en gastvrijer te maken.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
                title: "Branche expertise",
                description:
                  "Van grote evenementen tot intieme feesten, wij stemmen onze aanpak en uitstraling af op jouw evenement.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
                title: "Jij staat centraal",
                description:
                  "Jij staat centraal in onze werkwijze, wij denken met je mee en bieden passende oplossingen.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Eerlijke tarieven",
                description:
                  "Bij ons kun je rekenen op eerlijke en transparante tarieven. We geloven in duidelijke afspraken.",
              },
            ].map((feature, index) => (
              <div key={index} className="group transition-all duration-300">
                <div className="flex items-center mb-6 text-yellow-500">
                  <div className="w-12 h-12 border border-yellow-200 rounded-lg flex items-center justify-center group-hover:bg-yellow-50 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-600 transition-colors duration-200 font-medium"
                >
                  <span className="border-b border-transparent group-hover:border-yellow-500 transition-all duration-300">
                    Lees meer
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20 px-6 font-poppins bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header with split design */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <div className="mb-8 md:mb-0 md:max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
                Onze <span className="text-yellow-500">Diensten</span>
                <span className="absolute -bottom-3 left-0 right-0 h-1 bg-yellow-500 transform skew-x-12"></span>
              </h2>
              <p className="text-gray-600">
                Van objectbeveiliging tot evenementen en hospitality — wij
                hebben de expertise om jouw omgeving te beschermen.
              </p>
            </div>
            <a
              href="/diensten"
              className="inline-flex items-center bg-gray-900 hover:bg-yellow-500 text-white px-6 py-3 rounded-md transition-colors duration-300 self-start md:self-auto"
            >
              <span>Alle diensten</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Card layout with numbered design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                image:
                  "https://beesafesecurity.nl/wp-content/uploads/2024/09/IMG_0768-e1728316202253-1024x991.jpg",
                title: "Objectbeveiliging",
                description:
                  "Permanente of tijdelijke bewaking van gebouwen, terreinen en eigendommen met professionele beveiligers.",
                link: "/",
              },
              {
                number: "02",
                image:
                  "https://beesafesecurity.nl/wp-content/uploads/2024/09/af-1-e1727731811587-832x1024.jpg",
                title: "Evenementenbeveiliging",
                description:
                  "Beveiliging voor evenementen, festivals of bijeenkomsten met oog voor gastvrijheid en veiligheid.",
                link: "/",
              },
              {
                number: "03",
                image:
                  "https://beesafesecurity.nl/wp-content/uploads/2024/09/beeafe-1-e1727730659435-1024x783.png",
                title: "Hospitality Security",
                description:
                  "Combineer beveiliging met een gastvrije uitstraling voor een professionele eerste indruk.",
                link: "/",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="relative mb-6">
                  {/* Large number in background */}
                  <span className="absolute -top-10 -left-4 text-7xl md:text-8xl font-black text-gray-100 z-0 select-none">
                    {service.number}
                  </span>

                  {/* Image with border overlay */}
                  <div className="rounded-lg overflow-hidden relative z-10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[3/2] object-cover"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 transition-all duration-300 rounded-lg"></div>
                  </div>

                  {/* Service tag */}
                  <div className="absolute -bottom-4 right-4 bg-yellow-500 py-2 px-4 text-xs uppercase tracking-wider text-black font-semibold z-20">
                    Security
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-block text-sm uppercase tracking-wider font-semibold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300"
                  >
                    Ontdek meer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCiAL PROOF */}
      {/* SOCIAL PROOF */}
      <section className="bg-gradient-to-b from-white to-amber-50 py-16 md:py-24 px-4 md:px-8 lg:px-16 font-poppins">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Wat klanten over ons zeggen
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Onze klanten waarderen onze gastvrijheid, professionaliteit en
              betrouwbaarheid.
            </p>
          </div>

          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-12 p-4 md:p-6 bg-white rounded-xl shadow-md mx-auto max-w-3xl">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-lg font-bold text-gray-900">4.9/5.0</p>
            </div>
            <div className="h-12 hidden md:block border-l border-gray-200"></div>
            <div className="text-center md:text-left">
              <p className="text-gray-700">
                Gebaseerd op <span className="font-bold">86</span> beoordelingen
              </p>
            </div>
            <div className="h-12 hidden md:block border-l border-gray-200"></div>
            <a
              href="/"
              className="text-amber-600 hover:text-amber-700 font-medium flex items-center transition-colors duration-300"
            >
              Bekijk alle reviews
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Jeroen van Dijk",
                role: "Evenement Organisator",
                quote:
                  "De samenwerking met BeeSafe was uitmuntend. Hun team was niet alleen professioneel, maar ook ontzettend vriendelijk en attent naar onze gasten. Ze begrijpen dat veiligheid hand in hand gaat met gastvrijheid.",
                company: "Festival Nederland",
                image: "/api/placeholder/80/80",
              },
              {
                name: "Sophie Janssen",
                role: "Office Manager",
                quote:
                  "Ik voelde me echt veilig met hun team op locatie. Ze zijn oplettend zonder intimiderend te zijn en passen perfect in onze kantooromgeving. Een absolute aanrader voor bedrijven die waarde hechten aan veiligheid én uitstraling!",
                company: "Tech Solutions BV",
                image: "/api/placeholder/80/80",
              },
              {
                name: "Ahmed El-Mansour",
                role: "HR Manager",
                quote:
                  "BeeSafe levert betrouwbare en representatieve beveiligers die uitstekend communiceren. Ze denken mee over veiligheidsprotocollen en zorgen ervoor dat onze medewerkers zich beschermd voelen zonder dat het een 'fort' wordt.",
                company: "Kantoren Utrecht",
                image: "/api/placeholder/80/80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-amber-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-300"
            >
              Vraag vrijblijvend een offerte aan
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns=""
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* BACKGROUND INFO */}
      <section className="bg-gradient-to-b from-amber-50 to-gray-100 py-16 md:py-24 px-4 md:px-8 lg:px-16 font-poppins relative overflow-hidden">
        {/* Subtle honeycomb pattern background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23F59E0B' stroke-width='2'/%3E%3C/svg%3E\")",
            backgroundSize: "56px 100px",
          }}
        ></div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Over <span className="text-amber-500">BeeSafe</span> Security
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              BeeSafe Security is een Nederlands beveiligingsbedrijf dat zich
              richt op gastvrije, representatieve beveiliging. We combineren
              veiligheid met menselijkheid en zorgen voor een professionele
              uitstraling bij elk project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Objectbeveiliging
              </h3>
              <p className="text-gray-600">
                Professionele beveiliging voor uw gebouwen en eigendommen
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Evenementbeveiliging
              </h3>
              <p className="text-gray-600">
                Gastvrije beveiliging voor uw evenementen en bijeenkomsten
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Hospitality
              </h3>
              <p className="text-gray-600">
                Representatieve beveiliging met oog voor gastvrijheid
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/over-ons"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-300"
            >
              Leer ons beter kennen
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

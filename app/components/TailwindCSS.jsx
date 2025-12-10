export default function TailwindCSS() {
  return (
    <main  className="bg-gray-50 min-h-screen">
      {/* HERO SECTION WITH TWO CARDS */}
      <section className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">

        {/* LEFT CARD */}
        <div className="bg-white shadow-lg rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">
            Tailwind CSS Site Template For Portfolio
          </h2>
          <p className="text-gray-600 mb-6">
            A complete Tailwind CSS website template specially crafted for
            digital agency, design agency, and portfolio business.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-lg font-semibold text-gray-700">
              Download Brochure
            </button>
          </div>

          {/* Clients Logos */}
          <p className="text-gray-500 mb-2">Some Of Our Clients:</p>
          <div className="flex gap-6 items-center">
            <div className="text-xl font-bold text-gray-700">Ayro UI</div>
            <div className="text-xl font-bold text-gray-700">GrayGrids</div>
            <div className="text-xl font-bold text-gray-700">UIdeck</div>
          </div>

          <img
            src="https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg"
            alt="Portfolio"
            className="mt-6 rounded-xl"
          />
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white shadow-lg rounded-2xl p-10 relative overflow-hidden">
          <h3 className="text-gray-500">Hey There 👋 I am</h3>
          <h1 className="text-4xl font-bold mt-1">Daniel Jack</h1>
          <p className="text-lg text-gray-600 mt-2 mb-6">
            Professional Graphic Designer
          </p>

          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            interdum consequat convallis.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
              Contact Me
            </button>
            <button className="px-6 py-3 border border-gray-400 rounded-lg font-semibold text-gray-700">
              Learn More
            </button>
          </div>

          <img
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
            alt="Designer"
            className="rounded-xl mt-8 w-full"
          />
        </div>
      </section>

      {/* FOOTER SECTION TITLES */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Agency Portfolio</h2>
        <p className="text-gray-600">
          Specially crafted for digital agency, portfolio, and business sites.
        </p>

        <h2 className="text-3xl font-bold mt-14 mb-4">Personal Portfolio</h2>
        <p className="text-gray-600">
          Specially crafted for personal portfolio, resume, and digital websites.
        </p>
      </div>
    </main>
  );
}

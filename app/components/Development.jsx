export default function Development() {
  return (
    <section id="contact" className="w-full bg-white">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Welcome to my Web <br />
            Development Portfolio!
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            I'm Lily Smith, a passionate web developer based in USA. 
            Here, you'll get a glimpse of my journey in the world of 
            web development, where creativity meets functionality.
          </p>

          {/* EMAIL INPUT SECTION */}
          <div className="mt-8">
            <label className="text-gray-700 font-medium">Your email</label>

            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none"
              />

              <button className="bg-red-500 px-4 text-white flex items-center justify-center">
                ...
              </button>

              <button className="bg-black text-white px-6 py-3 rounded-r-lg font-semibold">
                REQUIRE OFFER
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Read my <a className="underline">Terms and Conditions</a>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/5325585/pexels-photo-5325585.jpeg"
            alt="Portfolio"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

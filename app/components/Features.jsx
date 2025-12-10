export default function Features() {
  const features = [
    "Fast Performance",
    "Responsive Layout",
    "SEO Friendly",
    "Modern Design",
  ];

  return (
    <section id="feature" className="py-16 px-10">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow text-center font-semibold">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">Pricing Plans</h2>

      <div className="flex justify-center gap-10">
        <div className="p-10 bg-white rounded-xl shadow w-80 text-center">
          <h3 className="text-2xl font-bold mb-4">Basic</h3>
          <p className="text-4xl font-bold mb-6">$19/mo</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Choose Plan
          </button>
        </div>

        <div className="p-10 bg-blue-600 text-white rounded-xl shadow w-80 text-center scale-105">
          <h3 className="text-2xl font-bold mb-4">Premium</h3>
          <p className="text-4xl font-bold mb-6">$49/mo</p>
          <button className="px-6 py-3 bg-white text-blue-700 rounded-lg">
            Choose Plan
          </button>
        </div>
      </div>
    </section>
  );
}

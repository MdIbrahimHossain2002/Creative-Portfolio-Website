export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white shadow">
      <h1 className="text-2xl font-bold text-blue-600">Brand</h1>
      <ul className="flex gap-6 text-lg font-medium">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

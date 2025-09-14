const HelpPage = () => (
  <div className="p-4 sm:p-6 text-white space-y-6">
    <h1 className="text-2xl sm:text-3xl font-bold">Help Center</h1>
    <p className="text-sm sm:text-base text-gray-400">
      Need assistance? Reach out to us or explore our resources below.
    </p>

    <div className="space-y-4">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">📞 Contact Support</h2>
        <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
        <p className="text-sm text-gray-300">Email: support@innovacraft.com</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">📍 Office Address</h2>
        <p className="text-sm text-gray-300">InnovaCraft HQ, Sector 44, Gurugram, Haryana</p>
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=gurugram%20sector%2044&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-48 mt-2 rounded-md"
        />
      </div>
    </div>
  </div>
);
export default HelpPage;

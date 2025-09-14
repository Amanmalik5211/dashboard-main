const DashboardPage = () => (
  <div className="p-4 sm:p-6 text-white space-y-4">
    <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
    <p className="text-sm sm:text-base text-gray-400">
      Welcome to your dashboard overview. Track your activity, performance, and quick stats here.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Total Contacts</h2>
        <p className="text-2xl font-bold mt-2">427,296</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Weekly Growth</h2>
        <p className="text-2xl font-bold mt-2 text-green-400">+12%</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Active Sessions</h2>
        <p className="text-2xl font-bold mt-2">1,024</p>
      </div>
    </div>
  </div>
);
export default DashboardPage;

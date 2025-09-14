const ReportsPage = () => (
  <div className="p-4 sm:p-6 text-white space-y-4">
    <h1 className="text-2xl sm:text-3xl font-bold">Reports</h1>
    <p className="text-sm sm:text-base text-gray-400">
      Generate and download detailed reports of your activity and performance.
    </p>

    <div className="space-y-3">
      <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <span>Weekly Report</span>
        <button className="bg-green-700 px-3 py-1 rounded-md text-sm">Download</button>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <span>Monthly Summary</span>
        <button className="bg-green-700 px-3 py-1 rounded-md text-sm">Download</button>
      </div>
    </div>
  </div>
);
export default ReportsPage;

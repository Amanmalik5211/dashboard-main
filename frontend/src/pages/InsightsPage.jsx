const InsightsPage = () => (
  <div className="p-4 sm:p-6 text-white space-y-4">
    <h1 className="text-2xl sm:text-3xl font-bold">Insights</h1>
    <p className="text-sm sm:text-base text-gray-400">
      Dive into your analytics. Understand user behavior, trends, and performance metrics.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">User Engagement</h2>
        <p className="text-sm text-gray-300 mt-2">Avg. session time: 5m 42s</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Conversion Rate</h2>
        <p className="text-sm text-gray-300 mt-2">Last 7 days: 8.4%</p>
      </div>
    </div>
  </div>
);
export default InsightsPage;

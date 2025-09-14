const IntegrationPage = () => (
  <div className="p-4 sm:p-6 text-white space-y-4">
    <h1 className="text-2xl sm:text-3xl font-bold">Integrations</h1>
    <p className="text-sm sm:text-base text-gray-400">
      Connect your favorite tools and services to streamline your workflow.
    </p>

    <ul className="space-y-3">
      <li className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <span>Slack</span>
        <button className="bg-green-700 px-3 py-1 rounded-md text-sm">Connect</button>
      </li>
      <li className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <span>Google Sheets</span>
        <button className="bg-green-700 px-3 py-1 rounded-md text-sm">Connect</button>
      </li>
      <li className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <span>Zapier</span>
        <button className="bg-green-700 px-3 py-1 rounded-md text-sm">Connect</button>
      </li>
    </ul>
  </div>
);
export default IntegrationPage;

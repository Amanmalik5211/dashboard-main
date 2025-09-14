const SettingsPage = () => (
  <div className="p-4 sm:p-6 text-white space-y-6">
    <h1 className="text-2xl sm:text-3xl font-bold">Settings</h1>
    <p className="text-sm sm:text-base text-gray-400">
      Manage your account preferences, notifications, and security settings.
    </p>

    <div className="space-y-4">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">🔒 Security</h2>
        <p className="text-sm text-gray-300">Change password, enable 2FA, and manage sessions.</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">🔔 Notifications</h2>
        <p className="text-sm text-gray-300">Email alerts, push notifications, and preferences.</p>
      </div>
    </div>
  </div>
);
export default SettingsPage;

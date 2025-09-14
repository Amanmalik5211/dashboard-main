const LayoutsPage = () => (
  <div className="p-4 sm:p-6 text-white space-y-4">
    <h1 className="text-2xl sm:text-3xl font-bold">Layouts</h1>
    <p className="text-sm sm:text-base text-gray-400">
      Customize your dashboard layout. Choose from predefined templates or create your own.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-gray-800 p-4 rounded-lg">📐 Grid View</div>
      <div className="bg-gray-800 p-4 rounded-lg">📊 Analytics View</div>
    </div>
  </div>
);
export default LayoutsPage;

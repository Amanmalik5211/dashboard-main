const Header = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "User",
    email: "User@example.com",
  };

  return (
    <header className="p-4 border-b border-gray-800 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Hello, {user.name}</h2>
        <p className="text-sm text-gray-400">
          Here’s an overview of your contacts. Manage or create new ones with ease!
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <button className="bg-green-900 px-4 py-2 rounded-md hover:bg-green-700">
          Add Contact
        </button>
      </div>
    </header>
  );
};

export default Header;

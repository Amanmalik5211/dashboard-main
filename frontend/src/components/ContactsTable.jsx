import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TableRow from "./TableRow";
import Pagination from "./Pagination";

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);

  const [statusFilter, setStatusFilter] = useState("");
  const [fieldFilter, setFieldFilter] = useState("");
  const [fieldValue, setFieldValue] = useState("");

  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showNewFilterDropdown, setShowNewFilterDropdown] = useState(false);

  const [statusOptions, setStatusOptions] = useState({
    Active: false,
    Inactive: false,
  });

  const [newFilterField, setNewFilterField] = useState("");
  const [newFilterValue, setNewFilterValue] = useState("");

  const fetchContacts = () => {
    const params = new URLSearchParams({
      search,
      page,
      limit: 6,
    });

    if (statusFilter) params.append("status", statusFilter);
    if (fieldFilter && fieldValue) {
      params.append("field", fieldFilter);
      params.append("value", fieldValue);
    }

// http://localhost:5000/

    fetch(`https://dashboard-backend-a28o.onrender.com/api/contacts?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setContacts(data?.data || []);
        setTotalPages(data?.totalPages || 1);
      })
      .catch((err) => {
        console.error("Failed to fetch contacts:", err);
        setContacts([]);
      });
  };

  useEffect(() => {
    fetchContacts();
  }, [search, page, statusFilter, fieldFilter, fieldValue]);


  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // http://localhost:5000/
  const handleDelete = () => {
    fetch("https://dashboard-backend-a28o.onrender.com/api/contacts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: selectedIds }),
    })
      .then((res) => res.json())
      .then(() => {
        setSelectedIds([]);
        setPage(1);
        fetchContacts();
      });
  };

  const toggleStatusDropdown = () => {
    setShowStatusDropdown((prev) => !prev);
    setShowNewFilterDropdown(false);
  };

  const toggleNewFilterDropdown = () => {
    setShowNewFilterDropdown((prev) => !prev);
    setShowStatusDropdown(false);
  };

  const applyStatusFilter = () => {
    const selected = Object.entries(statusOptions)
      .filter(([_, checked]) => checked)
      .map(([status]) => status);

    if (selected.length === 1) {
      setStatusFilter(selected[0]);
    } else {
      setStatusFilter(""); 
    }

    setPage(1);
    setShowStatusDropdown(false);
  };

  const applyNewFilter = () => {
    setFieldFilter(newFilterField);
    setFieldValue(newFilterValue);
    setPage(1);
    setShowNewFilterDropdown(false);
  };

  const isFilterActive =
  search.trim() ||
  statusFilter ||
  (fieldFilter && fieldValue);

  const clearAllFilters = () => {
  setSearch("");
  setStatusFilter("");
  setFieldFilter("");
  setFieldValue("");
  setNewFilterField("");
  setNewFilterValue("");
  setStatusOptions({ Active: false, Inactive: false });
  setPage(1);
};


  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="flex justify-between mb-4">
        <div className="w-72">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex space-x-2 relative">
          {selectedIds.length > 0 && (
  <button
    className="px-3 py-2 text-sm bg-red-600 rounded-md"
    onClick={handleDelete}
  >
    Delete
  </button>
)}

{isFilterActive && (
  <button
    className="px-3 py-2 text-sm bg-yellow-600 rounded-md"
    onClick={clearAllFilters}
  >
    Clear Filter
  </button>
)}


          <button
            className="px-3 py-2 text-sm bg-gray-700 rounded-md"
            onClick={toggleStatusDropdown}
          >
            Filter
          </button>
          <button
            className="px-3 py-2 text-sm bg-gray-700 rounded-md"
            onClick={toggleNewFilterDropdown}
          >
            New Filter
          </button>

          {showStatusDropdown && (
            <div className="absolute top-10 -left-16  bg-gray-900 p-4 rounded-md shadow-lg z-10 w-48">
              <label className="flex items-center justify-between mb-2">
                <span className="text-white">Active</span>
                <input
                  type="checkbox"
                  checked={statusOptions.Active}
                  onChange={() =>
                    setStatusOptions((prev) => ({
                      ...prev,
                      Active: !prev.Active,
                    }))
                  }
                  className="accent-green-500"
                />
              </label>
              <label className="flex items-center justify-between mb-2">
                <span className="text-white">Inactive</span>
                <input
                  type="checkbox"
                  checked={statusOptions.Inactive}
                  onChange={() =>
                    setStatusOptions((prev) => ({
                      ...prev,
                      Inactive: !prev.Inactive,
                    }))
                  }
                  className="accent-green-500"
                />
              </label>
              <button
                className="w-full px-3 py-2 text-sm bg-green-600 rounded-md mt-2"
                onClick={applyStatusFilter}
              >
                Apply Filter
              </button>
            </div>
          )}

          {showNewFilterDropdown && (
            <div className="absolute top-10 -left-12 bg-gray-900 p-4 rounded-md shadow-lg z-10 w-48">
              <select
                className="w-full bg-gray-700 text-white px-2 py-1 rounded mb-2"
                value={newFilterField}
                onChange={(e) => setNewFilterField(e.target.value)}
              >
                <option value="">Select Field</option>
                <option value="location">Location</option>
                <option value="referral">Referral</option>
                <option value="verified">Verified</option>
              </select>
              <input
                type="text"
                placeholder="Filter value"
                className="w-full bg-gray-700 text-white px-2 py-1 rounded mb-2"
                value={newFilterValue}
                onChange={(e) => setNewFilterValue(e.target.value)}
              />
              <button
                className="w-full px-3 py-2 text-sm bg-green-600 rounded-md"
                onClick={applyNewFilter}
              >
                Apply Filter
              </button>
            </div>
          )}
        </div>
      </div>

      <table className="w-full text-left">
        <thead className="text-gray-400 text-sm border-b border-gray-700">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">ID</th>
            <th className="p-2">Status</th>
            <th className="p-2">Location</th>
            <th className="p-2">Verified</th>
            <th className="p-2">Referral</th>
            <th className="p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((c) => (
              <TableRow
                key={c.id}
                {...c}
                selected={selectedIds.includes(c.id)}
                onSelect={toggleSelect}
              />
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-gray-400 py-4">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={() => setPage((p) => Math.max(p - 1, 1))}
        onNext={() => setPage((p) => Math.min(p + 1, totalPages))}
      />
    </div>
  );
};

export default ContactsTable;

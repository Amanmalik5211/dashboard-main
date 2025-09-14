import React from "react";

const TableRow = ({
  name,
  id,
  status,
  location,
  verified,
  referral,
  value,
  selected,
  onSelect,
}) => {
  return (
    <tr className="border-b border-gray-700 text-sm">
      <td className="p-2 flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(id)}
          className="accent-green-500"
        />
        <span>{name}</span>
      </td>
      <td className="p-2">{id}</td>
      <td className="p-2">
        <span
          className={`px-2 py-1 rounded-md text-xs ${
            status === "Active" ? "bg-green-700" : "bg-gray-700"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="p-2">{location}</td>
      <td className="p-2">{verified ? "✅" : "⚪"}</td>
      <td className="p-2">{referral}</td>
      <td className="p-2">
        <div className="w-20 h-2 bg-gray-600 rounded">
          <div
            className={`h-2 rounded ${
              value === "High"
                ? "w-full bg-green-500"
                : value === "Medium"
                ? "w-2/3 bg-green-500"
                : "w-1/3 bg-green-500"
            }`}
          ></div>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;

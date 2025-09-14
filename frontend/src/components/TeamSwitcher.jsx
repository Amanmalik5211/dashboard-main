import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PiShootingStarFill } from "react-icons/pi";

export default function TeamSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState("InnovaCraft");

  const teams = ["InnovaCraft", "Acme Corp.", "Evil Corp."];

  return (
    <div className="relative">
      <div
        className="p-4 font-bold text-xl flex items-center justify-between space-x-2 cursor-pointer hover:bg-gray-700 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6  rounded-full"><PiShootingStarFill /></div>
          <span>{activeTeam}</span>
        </div>
        <ChevronDown size={18} className="text-gray-400" />
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-56 bg-gray-800 rounded-md shadow-lg py-2 z-50">
          <p className="px-4 text-gray-400 text-xs mb-2">TEAMS</p>
          {teams.map((team, idx) => (
            <div
              key={team}
              onClick={() => {
                setActiveTeam(team);
                setIsOpen(false);
              }}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              <div className="flex items-center space-x-2">
              <div className="w-6 h-6  rounded-full"><PiShootingStarFill /></div>

                <span>{team}</span>
              </div>
              <span className="text-gray-400 text-xs">⌘{idx + 1}</span>
            </div>
          ))}

          <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-gray-300">
            + Add team
          </div>
        </div>
      )}
    </div>
  );
}

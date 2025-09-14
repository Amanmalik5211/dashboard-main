import React from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import ContactsTable from "../components/ContactsTable";

const stats = [
  { label: "Connections", value: "427,296", change: "+12%", positive: true },
  { label: "Contacts", value: "37,429", change: "+42%", positive: true },
  { label: "Value", value: "$82,439", change: "+37%", positive: true },
  { label: "Referrals", value: "3,497", change: "-17%", positive: false },
];

const ContactsPage = () => {
  return (
    <div className="w-full space-y-6">
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatsCard key={i} {...s} />
        ))}
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px]">
          <ContactsTable />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

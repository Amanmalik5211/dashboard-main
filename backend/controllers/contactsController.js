const axios = require("axios");
const formatUser = require("../utils/formatUser");
const store = require("../data/contactsStore");
const user = require("./user.json");

const loadContacts = async () => {
  const res = { data: { results: user } };
  const formatted = res.data.results.map(formatUser);
  store.setContacts(formatted);
};

const getContacts = (req, res) => {
  const { search, status, field, value, page = 1, limit = 6 } = req.query;
  let filtered = store.getContacts();

if (search) {
  const lowered = search.toLowerCase();
  filtered = filtered.filter((c) =>
    c.name.toLowerCase().includes(lowered)
  );
}


  if (status) {
    filtered = filtered.filter((c) => c.status === status);
  }

  if (field && value) {
    filtered = filtered.filter((c) =>
      String(c[field]).toLowerCase().includes(value.toLowerCase())
    );
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + parseInt(limit));

    res.json({
    data: paginated,
    total,
    page: parseInt(page),
    totalPages: Math.ceil(total / limit),
  });
};


const deleteContacts = (req, res) => {
  const { ids } = req.body;
  store.deleteContactsByIds(ids);
  res.json({ success: true, remaining: store.getContacts().length });
};

module.exports = {
  loadContacts,
  getContacts,
  deleteContacts,
};

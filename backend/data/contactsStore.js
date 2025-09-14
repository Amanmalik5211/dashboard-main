let contacts = [];

module.exports = {
  getContacts: () => contacts,
  setContacts: (newData) => { contacts = newData; },
  deleteContactsByIds: (ids) => {
    contacts = contacts.filter((c) => !ids.includes(c.id));
  },
};

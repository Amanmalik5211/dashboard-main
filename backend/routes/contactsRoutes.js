const express = require("express");
const router = express.Router();
const {
  getContacts,
  deleteContacts,
} = require("../controllers/contactsController");

router.get("/", getContacts);
router.delete("/", deleteContacts);

module.exports = router;

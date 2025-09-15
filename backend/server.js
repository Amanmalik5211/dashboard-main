const express = require("express");
const morgan = require("morgan");

const cors = require("cors");
const contactsRoutes = require("./routes/contactsRoutes");
const { loadContacts } = require("./controllers/contactsController");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(morgan("dev")); 
app.use(express.json());

app.use("/api/contacts", contactsRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, async () => {
  await loadContacts();
  console.log("Backend running at http://localhost:5000");
});

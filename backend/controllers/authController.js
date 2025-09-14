const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { addUser, findUserByEmail } = require("../data/userStore");

const SECRET_KEY = "secretkey";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const exists = findUserByEmail(email);
    if (exists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword };
    addUser(newUser);

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "8h" });

    const { password: _, ...safeUser } = newUser;

    res.status(200).json({ token, user: safeUser });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "8h" });

    const { password: _, ...safeUser } = user;
    res.status(200).json({ token, user: safeUser });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { signup, login };

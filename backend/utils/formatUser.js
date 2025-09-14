module.exports = function formatUser(user) {
  return {
    name: `${user.name.first} ${user.name.last}`,
    id: user.login.uuid,
    status: user.registered.age > 2 ? "Active" : "Inactive",
    location: `${user.location.city}, ${user.location.country}`,
    verified: user.registered.age > 1,
    referral: user.email,
    value: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
  };
};

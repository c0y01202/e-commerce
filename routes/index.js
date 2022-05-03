const router = require("express").Router();
const apiRoutes = require("./api");

router.use("./api", apiRoutes);

router.use((req, res) => {
  res.send(404).end();
});

module.exports = router;

// const User = require('./User');

// module.exports = { User };

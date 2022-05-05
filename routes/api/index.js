const router = require("express").Router();
const res = require("express/lib/response");
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;

// // GET /api/users
// router.get('/', (req, res) => {});

// // GET /api/users/1
// router.get('/:id', (req, res) => {});

// // POST /api/users
// router.post('/', (req, res) => {});

// // PUT /api/users/1
// router.put('/:id', (req, res) => {});

// // DELETE /api/users/1
// router.delete('/:id', (req, res) => {});

const router = require("express").Router();

router.get("/products", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.get("/products/:id", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.post("/products", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.delete("/products/:id", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.patch("/products/:id", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

module.exports = router;

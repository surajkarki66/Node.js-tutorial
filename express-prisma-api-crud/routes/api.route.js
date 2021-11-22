const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/products", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({});
    res.json(products);
  } catch (err) {
    next(err);
  }
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

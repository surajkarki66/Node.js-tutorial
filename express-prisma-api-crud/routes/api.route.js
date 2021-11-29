const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/products", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
    });
    const categories = await prisma.category.findMany({
      include: { products: true },
    });
    res.json({ products, categories });
  } catch (err) {
    next(err);
  }
});

router.get("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { category: true },
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post("/products", async (req, res, next) => {
  try {
    const data = req.body;
    const product = await prisma.product.create({
      data,
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.delete("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await prisma.product.delete({
      where: { id: Number(id) },
    });
    res.json(deletedProduct);
  } catch (err) {
    next(err);
  }
});

router.patch("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.update({
      where: { id: Number(id) },
      data: req.body,
      include: { category: true },
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

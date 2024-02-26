import prisma from '../db/db.config.js';

export const getProductList = async (req, res) => {
  const categoryId = parseInt(req.params.categoryId);

  try {
    // Fetch products based on category ID
    const productList = await prisma.product.findMany({
      where: {
        categoryId: categoryId,
      },
    });

    res.status(200).json(productList);
  } catch (error) {
    console.error('Error fetching product list:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProductDetails = async (req, res) => {
  const productId = parseInt(req.params.productId);

  try {
    // Fetch details of a specific product by its ID
    const productDetails = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (productDetails) {
      res.status(200).json(productDetails);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

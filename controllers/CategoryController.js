import prisma from '../db/db.config.js';

export const getCategoryList = async (req, res) => {
  try {
    // Fetch all categories
    const categoryList = await prisma.category.findMany();
    res.status(200).json(categoryList);
  } catch (error) {
    console.error('Error fetching category list:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCategoryDetails = async (req, res) => {
  const categoryId = parseInt(req.params.categoryId);

  try {
    // Fetch details of a specific category by its ID
    const categoryDetails = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (categoryDetails) {
      res.status(200).json(categoryDetails);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    console.error('Error fetching category details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
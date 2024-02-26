import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    //to see queries 
    // log: ["query"],


});
const categories = [
    {
      name: 'Electronics',
      description: 'Cutting-edge electronic gadgets',
    },
    {
      name: 'Bags',
      description: 'Stylish and durable bags for every occasion',
    },
    {
      name: 'Sunglasses',
      description: 'Fashionable sunglasses for a trendy look',
    },
  ];
  
  const generateRandomProduct = (categoryId) => {
    const titles = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomPrice = Math.random() * (100 - 10) + 10; // Random price between 10 and 100
    const randomDescription = 'One line description for the product';
    const randomAvailability = Math.random() < 0.5; // Random true or false
  
    return {
      title: randomTitle,
      price: parseFloat(randomPrice.toFixed(2)), // Convert to float
      description: randomDescription,
      availability: randomAvailability,
      categoryId: categoryId,
    };
  };
  
  const seedDatabase = async () => {
    try {
      for (const category of categories) {
        const createdCategory = await prisma.category.create({
          data: {
            name: category.name,
            description: category.description,
          },
        });
  
        const products = Array.from({ length: 5 }, () => generateRandomProduct(createdCategory.id));
  
        await prisma.product.createMany({
          data: products,
        });
  
        console.log(`Category '${category.name}' seeded with 5 products`);
      }
      console.log('Seed data insertion complete');
    } catch (error) {
      console.error('Error inserting seed data:', error);
    } finally {
      await prisma.$disconnect();
    }
  };
  
  // Call the async function
  seedDatabase();

export default prisma
import prisma from "../db/db.config.js";

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // if  given user already exists
      const existingUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
  
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists.' });
      }
  
      // create a new user
      const newUser = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password, // encrypted pass
        },
      });
      
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

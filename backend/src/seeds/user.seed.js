import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
 
  {
    email: "ananya.sharma@example.com",
    fullName: "Ananya Sharma",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/f8/d1/25/f8d125caeefb2c41de7080ce7d791fe1.jpg",
  },
  {
    email: "priya.reddy@example.com",
    fullName: "Priya Reddy",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/d9/8e/f3/d98ef3ea5c295286fe35ec06df1941fb.jpg",
  },
  {
    email: "kavya.iyer@example.com",
    fullName: "Kavya Iyer",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/77/06/c1/7706c18cdc74963cba7a376ce712cce6.jpg",
  },
  {
    email: "sneha.patel@example.com",
    fullName: "Sneha Patel",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/d1/5f/bb/d15fbb3cf5c8ef690818ce562ae19f8d.jpg",
  },
  {
    email: "aishwarya.nair@example.com",
    fullName: "Aishwarya Nair",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/1200x/8a/54/dc/8a54dc43169f7dc19a5a05e9e38020df.jpg",
  },
  {
    email: "neha.kapoor@example.com",
    fullName: "Neha Kapoor",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/1200x/79/21/89/792189360a4bfa241c38f655e884780e.jpg",
  },
  {
    email: "pooja.mehta@example.com",
    fullName: "Pooja Mehta",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/1200x/bf/97/43/bf97434aa72fe97d1895d93423f76eed.jpg",
  },

  {
    email: "rahul.verma@example.com",
    fullName: "Rahul Verma",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/74/92/4e/74924e4b91509db451d4d5fe4edd6c6f.jpg",
  },
  {
    email: "arjun.malhotra@example.com",
    fullName: "Arjun Malhotra",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/d2/61/20/d2612000acb95b7a7dd7baeb432b15ab.jpg",
  },
  {
    email: "vikram.singh@example.com",
    fullName: "Vikram Singh",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/1200x/c9/e0/74/c9e074830974ba09a81d874ade2f9ca1.jpg",
  },
  {
    email: "rohit.aggarwal@example.com",
    fullName: "Rohit Aggarwal",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/ce/e6/d4/cee6d4bace48de61344c5d1fd8d95ec5.jpg",
  },
  {
    email: "karthik.subramanian@example.com",
    fullName: "Karthik Subramanian",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/16/b6/0f/16b60f757130e08a1f763d91a77976c1.jpg",
  },
  {
    email: "manoj.yadav@example.com",
    fullName: "Manoj Yadav",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/1200x/7f/20/cd/7f20cd564c796c70dd02addbe06f2fd6.jpg",
  },
  {
    email: "suresh.naidu@example.com",
    fullName: "Suresh Naidu",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/b6/2e/7c/b62e7cc7a617d410163827b6f0bf8f57.jpg",
  },
  {
    email: "deepak.mishra@example.com",
    fullName: "Deepak Mishra",
    password: "$2b$10$KIXQ7m1zPZQJQz4QJ5jP3e8xQ6g3sKq5FJmP9F0P5QZq4pQ9Z6a8S",
    profilePic: "https://i.pinimg.com/736x/75/7b/25/757b2500eb98f9abed8c49a531dc9d4d.jpg",
  },
];


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
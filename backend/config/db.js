import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://usermac221:4xN60JxDkRr7kTIp@cluster0.av7bbnm.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};

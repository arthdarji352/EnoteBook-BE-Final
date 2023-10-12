import { connect } from "mongoose";
// import "dotenv/config";

const connectToMongo = async () => {
  try {
    await connect("mongodb+srv://arth:arth@merndatabase.u4kxcj7.mongodb.net/eNotebook");
    console.log("*** Database coonected Successfully ***");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;

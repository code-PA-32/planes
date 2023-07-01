import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema/index";


const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

mongoose
  .connect(process.env.MONGO_DB!)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((e) => console.log(e));

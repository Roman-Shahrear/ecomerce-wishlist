import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import suggestionWishlist from "./routes/wishlistSuggestProduct.js";
import logger from "./utils/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
/* <!------------ Config dotenv -----------!> */
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

/* ----- For Read file Swagger-Outputfile ----- */
const swaggerDocument = JSON.parse(
  fs.readFileSync("./utils/swagger-output.json", "utf8")
);

/* ----- Serve Swagger documentation ----- */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* <!------------ Routes ----------!> */
app.use("/api/wishlist", suggestionWishlist);

/* <!------------ Mongoose Setup -----------!> */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => logger.info(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} Can connect on server`));

app.use(errorHandler);

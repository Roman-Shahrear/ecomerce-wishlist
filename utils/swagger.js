import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Suggestion wishlist for ecomerce",
    description: `Ten products suggestion for wishlist`,
  },
  host: "localhost: 3001",
};

const outputFile = "./swagger-output.json";
const routes = ["../routes/wishlistSuggestProduct.js"];

swaggerAutogen()(outputFile, routes, doc);

import Product from "../models/Product.model.js";
import logger from "./logger.js";

export const suggestProducts = async (wishlist) => {
  try {
    /* <!------------ For empty wishlist -----------!> */
    if (!wishlist || wishlist.length === 0) {
      logger.info("Wishlist is empty, returning 10 random products");
      return await Product.find().limit(10);
    }

    const tags = [];
    const categories = [];

    wishlist.forEach((product) => {
      if (product.tags) {
        tags.push(...product.tags);
      }
      if (product.category) {
        categories.push(product.category);
      }
    });

    logger.info(`Tags: ${tags}, Categories: ${categories}`);

    /* <!------------ Finding product which is not yet in wishlist tags & category -----------!> */
    const suggestedProducts = await Product.find({
      _id: { $nin: wishlist.map((product) => product._id) },
      $or: [{ tags: { $in: tags } }, { category: { $in: categories } }],
    }).limit(10);

    logger.info(`Suggested Products: ${suggestedProducts}`);

    return suggestedProducts.length > 0 ? suggestedProducts : [];
  } catch (error) {
    logger.error(`Error suggesting products: ${error}`);
    throw new Error("Error suggesting products");
  }
};

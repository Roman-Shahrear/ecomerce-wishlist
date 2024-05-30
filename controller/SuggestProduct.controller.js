import mongoose from "mongoose";
import { suggestProducts } from "../utils/uwishlistApiFeature.js";
import logger from "../utils/logger.js";
import { validationResult } from "express-validator";

export const suggestProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const wishlist = req.body.wishlist.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));

    logger.info(`Received wishlist: ${JSON.stringify(wishlist)}`);

    const suggestions = await suggestProducts(wishlist);
    res.json(suggestions);
  } catch (error) {
    logger.error(`Error in suggestProduct controller: ${error}`);
    res.status(500).send("Server Error");
  }
};

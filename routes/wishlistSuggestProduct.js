import exporess from "express";
import { suggestProduct } from "../controller/SuggestProduct.controller.js";
import { validateWishlist } from "../middleware/validateWishlist.js";

const router = exporess.Router();

router.post("/suggest-products", validateWishlist, suggestProduct);

export default router;

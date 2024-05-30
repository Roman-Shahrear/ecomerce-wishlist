import { check, validationResult } from "express-validator";

export const validateWishlist = [
  check("wishlist").isArray().withMessage("Wishlist should be an array"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

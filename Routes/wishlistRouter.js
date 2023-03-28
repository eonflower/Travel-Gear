const express = require("express");
const wishlistRouter = express.Router();
const Wishlist = require("../models/Wishlist.js");


//GET ALL
wishlistRouter.get("/", async (req, res, next) => {
    try {
        const wishlistItems = await Wishlist.find();
        return res.status(200).send(wishlistItems);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// //GET by ID
wishlistRouter.get("/:id", async (req, res, next) => {
    try {
        const wishlistItem = await Wishlist.findById(req.params.id);
        if (!wishlistItem) {
        return res.status(404).send("Wishlist item not found"); 
        } 
        return res.status(200).send(wishlistItem);
    } catch (err) {
        res.status.apply(500);
        return next(err);
    }
});

//POST
wishlistRouter.post("/", (req, res, next) => {
    const newWishlistItem = new Wishlist(req.body);
    newWishlistItem
        .save()
        .then((savedWishlistItem) => {
        return res.status(201).send(savedWishlistItem);
        })
        .catch((err) => {
        res.status(500);
        return next(err);
        });
});

// //UPDATE by ID
wishlistRouter.put("/:id", async (req, res, next) => {
    try {
        const updatedWishlistItem = await Wishlist.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        if (!updatedWishlistItem) {
        return res.status(404).send("wishlist item not found");
        }
        return res.status(200).send(updatedWishlistItem);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// //DELETE by ID
wishlistRouter.delete("/:id", async (req, res, next) => {
    try {
        const deletedWishlistItem = await Wishlist.findByIdAndDelete(req.params.id);
        if (!deletedWishlistItem) {
        return res.status(404).send("wishlist item not found");
        }
        return res.status(200).send(`Deleted wishlist item with ID: ${req.params.id}`);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});
module.exports = wishlistRouter;

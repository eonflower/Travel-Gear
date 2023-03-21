const express = require("express");
const photographyRouter = express.Router();
const Photography = require("../models/Photography.js");


//GET ALL
photographyRouter.get("/", async (req, res, next) => {
  try {
    const photographyItems = await Photography.find();
    return res.status(200).send(photographyItems);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// //GET by ID
photographyRouter.get("/:id", async (req, res, next) => {
  try {
    const photographyItems = await PhotoGear.findById(req.params.id);
    if (!photographyItems) {
    return res.status(404).send("PhotoGear item not found"); 
    } 
    return res.status(200).send(photographyItems);
  } catch (err) {
    res.status.apply(500);
    return next(err);
  }
});

//POST
photographyRouter.post("/", (req, res, next) => {
  const newPhotographyItems = new Photography(req.body);
  newPhotographyItems
    .save()
    .then((savedPhotographyItems) => {
      return res.status(201).send(savedPhotographyItems);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// //UPDATE by ID
photographyRouter.put("/:id", async (req, res, next) => {
  try {
    const updatedPhotographyItems = await PhotoGear.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPhotographyItems) {
      return res.status(404).send("Photography item not found");
    }
    return res.status(200).send(updatedPhotographyItems);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// //DELETE by ID
photographyRouter.delete("/:id", async (req, res, next) => {
  try {
    const deletedPhotographyItems = await PhotoGear.findByIdAndDelete(req.params.id);
    if (!deletedPhotographyItems) {
      return res.status(404).send("Photography item not found");
    }
    return res.status(200).send(`Deleted PhotoGear item with ID: ${req.params.id}`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});
module.exports = photographyRouter;

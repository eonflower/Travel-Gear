const express = require("express");
const techGearRouter = express.Router();
const TechGear = require("../models/Techgear.js");


// GET ALL
techGearRouter.get("/", async (req, res, next) => {
  try {
    const techGearItems = await TechGear.find();
    return res.status(200).send(techGearItems);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});
// GET by ID
techGearRouter.get("/:id", async (req, res, next) => {
  console.log(req.params.id)
  try {
    const techGearItem = await TechGear.findById(req.params.id);
    if (!techGearItem) {
      return res.status(404).send("TechGear item not found");
    }
    return res.status(200).send(techGearItem);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});


//Post 
techGearRouter.post("/", (req, res, next) => {
  const newTechgearItems = new TechGear(req.body);
  newTechgearItems
    .save()
    .then((savedTechGearItem) => {
      return res.status(201).send(savedTechGearItem);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

//UPDATE by ID
techGearRouter.put("/:id", async (req, res, next) => {
  try {
    const updatedTechGearItem = await TechGear.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTechGearItem) {
      return res.status(404).send("TechGear item not found");
    }
    return res.status(200).send(updatedTechGearItem);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//DELETE by ID
techGearRouter.delete("/:id", async (req, res, next) => {
  try {
    const deletedTechGearItem = await TechGear.findByIdAndDelete(req.params.id);
    if (!deletedTechGearItem) {
      return res.status(404).send("TechGear item not found");
    }
    return res.status(200).send(`Deleted TechGear item with ID: ${req.params.id}`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});


module.exports = techGearRouter;

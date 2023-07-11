import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import AddressModel from "../models/AddressBook.js";

const addressRouter = express.Router();

addressRouter.get(
  "/seeds",
  expressAsyncHandler(async (req, res) => {
    const createAddress = await AddressModel.insertMany(data.addressBook);
    res.send(createAddress);
  })
);

addressRouter.get(
  "/addresslist",
  expressAsyncHandler(async (req, res) => {
    try {
      const result = await AddressModel.find();
      res.send(result);
    } catch (error) {
      console.log("AddressList not found");
    }
  })
);

addressRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    try {
        // const {name,email,address,city,pin} =req.body;
      const newAddress = new AddressModel({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        pin: req.body.pin,
      });
      await newAddress.save();
      res.send({
        message: "Address Added Successfully",
      });
    } catch (error) {
      res.send({
        message: "Invalid Address",
      });
    }
  })
);

export default addressRouter;

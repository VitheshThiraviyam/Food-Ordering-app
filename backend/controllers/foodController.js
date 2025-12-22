import mongoose from "mongoose";
import foodModel from "../models/Foodmodel.js";
import fs from 'fs';
import path from "path";

const addFood = async (req,res) => {
    let file_name = `${req.file.file_name}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price : req.body.price,
        category: req.body.category,
        image: file_name
    })
    try{
        await food.save();
        res.json({success: true, message: "Food added"});
    }
    catch(error)
    {
        console.log(error);
    }
}
const listFood = async (req,res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success: true, data: foods});
    }
    catch(error)
    {
        console.log(error);
    }
}
const removeFood = async (req,res) => {
    try{
        const food = await foodModel.findById(req.body.id);
        const imagePath = path.join("uploads", food.image);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.log("Image delete error:", err);
            }
        });
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food removed"});
    }
    catch(error)
    {
        console.log(error);
    }
}

export {addFood, listFood, removeFood};
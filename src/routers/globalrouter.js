import express from "express";
import globalcontroller from "../controllers/globalcontrollers";

const globalrouter = express.Router();

globalrouter.get("/", globalcontroller.homecontroller)

export default globalrouter;

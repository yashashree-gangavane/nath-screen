"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_1 = require("../controllers/company");
const body_parser_1 = __importDefault(require("body-parser"));
const jsonParser = body_parser_1.default.json();
const router = (0, express_1.Router)();
router.get("/company", company_1.getCompanys);
router.post("/add-company", jsonParser, company_1.addCompany);
router.put("/edit-company/:id", jsonParser, company_1.updateCompany);
router.delete("/delete-company/:id", jsonParser, company_1.deleteCompany);
exports.default = router;

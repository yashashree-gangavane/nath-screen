"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompany = exports.updateCompany = exports.addCompany = exports.getCompanys = void 0;
const Company_1 = __importDefault(require("../../models/Company"));
const getCompanys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companys = yield Company_1.default.find();
        res.status(200).json({ companys });
    }
    catch (error) {
        console.error(error.message);
        throw error;
    }
});
exports.getCompanys = getCompanys;
const addCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.info(`Attempting to add company: ${JSON.stringify(req.body)}`);
        const body = req.body;
        const company = new Company_1.default({
            name: body.name,
            gstNo: body.gstNo,
            address: body.address,
        });
        const newCompany = yield company.save();
        const allCompanys = yield Company_1.default.find();
        res
            .status(201)
            .json({ message: "Company added", company: newCompany, companys: allCompanys });
        console.info(`Company added successfully ${newCompany}`);
    }
    catch (error) {
        throw error;
    }
});
exports.addCompany = addCompany;
const updateCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateCompany = yield Company_1.default.findByIdAndUpdate({ _id: id }, body);
        const allCompanys = yield Company_1.default.find();
        res.status(200).json({
            message: "Company updated",
            company: updateCompany,
            companys: allCompanys,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateCompany = updateCompany;
const deleteCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCompany = yield Company_1.default.findByIdAndRemove(req.params.id);
        const allCompanys = yield Company_1.default.find();
        res.status(200).json({
            message: "Company deleted",
            company: deletedCompany,
            companys: allCompanys,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCompany = deleteCompany;

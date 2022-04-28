"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const companySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    gstNumber: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Company", companySchema);

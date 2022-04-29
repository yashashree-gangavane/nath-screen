"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
console.info("Starting server");
app.use((0, cors_1.default)());
app.use(routes_1.default);
//TODO: const uri: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017/mydb`
const uri = `mongodb://localhost:27017/mydb`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    console.info("Server started successfully");
})
    .catch(error => {
    console.error(`Error in running server at ${PORT}`, error);
    throw error;
});

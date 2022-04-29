import {Router} from "express"
import {addCompany, deleteCompany, getCompanys, updateCompany} from "../controllers/company";

import bodyParser from "body-parser";

const jsonParser = bodyParser.json();

const router: Router = Router()

router.get("/company", getCompanys)

router.post("/add-company", jsonParser, addCompany)

router.put("/edit-company/:id", jsonParser, updateCompany)

router.delete("/delete-company/:id", jsonParser, deleteCompany)

export default router
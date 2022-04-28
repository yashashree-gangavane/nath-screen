import {Router} from "express"
import {addCompany, deleteCompany, getCompanys, updateCompany} from "../controllers/company";


const router: Router = Router()

router.get("/companys", getCompanys)

router.post("/add-company", addCompany)

router.put("/edit-company/:id", updateCompany)

router.delete("/delete-company/:id", deleteCompany)

export default router
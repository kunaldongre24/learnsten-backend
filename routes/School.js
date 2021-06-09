import SchoolController from "../controllers/SchoolController";
import AuthRedirect from "../middleware/AuthRedirect";
const express = require("express");
const router = express.Router();

router.get("/", AuthRedirect, SchoolController.getAllSchools);

router.post("/", AuthRedirect, SchoolController.createNewSchool);

router.get("/user/:userId", SchoolController.getSchoolByUserId);

router.get("/:schoolId", SchoolController.getSchoolBySchoolId);

router.put("/:schoolId", AuthRedirect, SchoolController.updateSchool);

module.exports = router;

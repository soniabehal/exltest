const express=require("express");
const router=express.Router();
const courses=require("../controllers/courses");
router.get('/',courses.getAllCourses)
module.exports=router;
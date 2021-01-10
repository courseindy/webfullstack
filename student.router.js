var express = require("express");
var router = express.Router();
var Student = require("./student.model");

//Get data all
router.get("/", (req, res) => {
    Student.find().exec((err, data) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send(data);
    });
});

//Insert data to database 
router.post("/", (req, res) => {
    var obj = new Student(req.body);
    obj.save((err, data) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send("insert data success");
    });
});

//Update data to database
router.put("/:_id", (req, res)=> {
    Student.findByIdAndUpdate(req.params._id, req.body, (err, data) =>{
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send("update data success");
    });
});

//Delete data to database
router.delete("/:_id", (req, res)=> {
    Student.findByIdAndDelete(req.params._id, (err, data)=> {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send("delete data success");
    });
});

//Search data by id
router.get("/:_id", (req, res)=> {
    Student.findById(req.params._id).exec((err, data)=> {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send(data);
    });
});

module.exports = router;
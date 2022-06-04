const express = require('express'); 
const router = express.Router();
const mongoose = require('mongoose');

const student = require('../models/student');

const Student = require('../models/student');

 
router.get('/',(req,res,next) => {
    Student.find() 
    .exec()        
    .then(result => res.status(200).json(result))  
    .catch(err => res.status(500).json(err))  
    })
router.post('/', (req, res, next) => {
    const information ={                  
        _id : mongoose.Types.ObjectId(),                    
          Name : req.body.Name,                               
          Batch : req.body.Batch,         
                                                        
        }
        const student = new Student(information);            
        student.save()                                      
        .then(result => res.status(200).json(result))     
        .catch(err => res.status(500).json(err))            
    })
 router.get('/:studentId',(req,res,next) => {     
        const id = req.params.studentId;               
        student.findById(id)                         
        .exec()
        .then(result => res.status(200).json(result))  
        .catch(err => res.status(500).json(err)) 


    })

router.delete('/:studentId',(req,res,next) => {
    const id = req.params.studentId;
    Student.deleteOne({_id: id})
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err)) 

})

//to update or patch data in database
router.patch('/:studentId',(req, res, next) => {
    const id = req.params.studentId;
    const updateObj = {};                                  //creating a null object  
    for(const info of req.body){
      updateObj[info.key] = info.value;                       //using for loop iterating through req.body and then creating index and varriables
    }
    
    Student.updateOne( {_id : id}, {$set: updateObj})                      //$set : is a syntex and its mandatory while patching 
    .exec()
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({
      message: "Error"
    }));
  })

module.exports = router;
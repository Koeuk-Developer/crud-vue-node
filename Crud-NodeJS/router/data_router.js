const express = require('express');
const {v4: uuidv4} = require('uuid')
const router = express.Router();

const {getData, saveData} = require('../models/data_model');
const datas = getData('database/data_database.json');

console.log(datas)

// get All data
router.get('/', function (req, res) {
     res.json({success: true, "message": "hell", datas: datas});
})

// get one data
router.get('/:id', function(req, res) {
     let id = req.params.id;
     let data = datas.find(data => data.id == id);
     if (data != undefined){
          res.json({success: true, "message": "get one data", data :data});
     }else{
          res.json({success: false, "message": 'cannot get one data'});
     }
})

// create data

router.post ('/post', function(req, res) {
     newData = {
          id: uuidv4(),
          name: req.body.name,
          description: req.body.description,
     }
     datas.push(newData);
     saveData('database/data_database.json', datas);
     res.status({success: true, "message": "create fully"})
})
router.put('/:id', function(req, res) {
     let id = req.params.id;
     let index = datas.findIndex(data => data.id == id);
 
     if (index != undefined) {

         let data = datas[index];
         data.name = req.body.name;
         data.description = req.body.description;
         saveData('database/data_database.json', datas);
         res.json({ message: 'Product updated successfully' });
     } else {
         return res.status(404).json({ message: 'No such product present' });
     }
 });

 // delete

 router.delete('/:id', function(req, res) {
     let id = req.params.id;
     let index =datas.findIndex(data => data.id == id);
     if (index != undefined) {
          datas.splice(index, 1);
          saveData('database/data_database.json', datas);
          res.json({message: "delete success fully"});
     }else {
          res.status(404).json({message: "fuck u"})
     }

 })

module.exports = router;

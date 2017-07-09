var _ = require('lodash');
var Cat = require('../models/catModel');

module.exports = function(app) {
    
    _cats = [];

    /* create */
    app.post('/cat', function(req,res){
        var newCat = new Cat(req.body);
        newCat.save(function(err) {
            if(err){
                res.json({info:'error durring cat create', error:err});                
            };
            _cats.push(req.body);           
             res.json({info:'cat created successuflly'});
        });            
    });

    /* Read */
    app.get('/cat',function(req,res) {
        Cat.find(function(err,cats) {
            if(err) {
                res.json({info:'error during find cats', error:err});
                return;
            };
            res.json({info:'cats found successfully', data:cats});
        });        
    });

    app.get('/cat/:id', function(req,res){
        Cat.findById(req.params.id, function(err,cat) {
            if(err){
                res.json({info:"error during find cat", error:err});
                return;
            };
            if(cat) {
                res.json({info:'cat found successfully', data:cat});
            } else {
                res.json({info:'cat not found'});
            }
        });
    });

    /* Update */
    app.put('/cat/:id', function(req,res) {
        Cat.findByIdAndUpdate(req.params.id,function(err,cat){
            if(err){
                res.json({info:'error during find cat', error:err});
                return;
            };
            res.json({info:'cat  updated successfully'});
        });
       /* var index = _.findIndex(
            _cats,
            {
                name:req.params.id
            }
        );
        _.merge(_cats[index],req.body);*/
        
    });
    
    /* Delete */
    app.delete('/cat/:id', function(req,res) {  
        Cat.findByIdAndRemove(req.params.id, function(err){
            if(err) {
                res.json({info:'error during find cat', error:err});
                return;
            };
            res.json({info:'cat  deleted successfully'});
        });  
       /* _.remove(_cats, function(cat) {
            return cat.name === req.params.id;
        });*/
    });

};
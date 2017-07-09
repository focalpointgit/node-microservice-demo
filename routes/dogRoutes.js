var _ = require('lodash');
var dog = require('../models/dogModel');

module.exports = function(app) {
    
    _dogs = [];

    /* create */
    app.post('/dog', function(req,res){
        var newdog = new dog(req.body);
        newdog.save(function(err) {
            if(err){
                res.json({info:'error durring dog create', error:err});                
            };
            _dogs.push(req.body);           
             res.json({info:'dog created successuflly'});
        });            
    });

    /* Read */
    app.get('/dog',function(req,res) {
        dog.find(function(err,dogs) {
            if(err) {
                res.json({info:'error during find dogs', error:err});
                return;
            };
            //res.json({info:'dogs found successfully', data:dogs});
            setTimeout(function(){
                res.json({info:'dogs found successfully',data:dogs});
            },10000);
        });        
    });

    app.get('/dog/:id', function(req,res){
        dog.findById(req.params.id, function(err,dog) {
            if(err){
                res.json({info:"error during find dog", error:err});
                return;
            };
            if(dog) {
                res.json({info:'dog found successfully', data:dog});
            } else {
                res.json({info:'dog not found'});
            }
        });
    });

    /* Update */
    app.put('/dog/:id', function(req,res) {
        dog.findByIdAndUpdate(req.params.id,function(err,dog){
            if(err){
                res.json({info:'error during find dog', error:err});
                return;
            };
            res.json({info:'dog  updated successfully'});
        });
       /* var index = _.findIndex(
            _dogs,
            {
                name:req.params.id
            }
        );
        _.merge(_dogs[index],req.body);*/
        
    });
    
    /* Delete */
    app.delete('/dog/:id', function(req,res) {  
        dog.findByIdAndRemove(req.params.id, function(err){
            if(err) {
                res.json({info:'error during find dog', error:err});
                return;
            };
            res.json({info:'dog  deleted successfully'});
        });  
       /* _.remove(_dogs, function(dog) {
            return dog.name === req.params.id;
        });*/
    });

};
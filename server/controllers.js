
const mongoose = require('mongoose'),
Task = mongoose.model('Task')

module.exports = {

    index: (req, res) =>{

        Task.find({}, function(err, tasks) {
            if(err) {
                console.log('something went wrong');
                } else { // else console.log that we did well and then redirect to the root route
                console.log('here you go');
                }
        res.json(tasks);
        })

    },

    result: (req, res) =>{
        Task.findOne({id:req.params._id}, function(err, tasks) {
            if(err) {
                console.log('something went wrong');
                } else { // else console.log that we did well and then redirect to the root route
                console.log('here you go');
                res.json(tasks);
                }
        });
},

    newtask:(req, res) =>{
            console.log("POST DATA", req.body);
            // create a new User with the name and age corresponding to those from req.body
            var task = new Task(req.body);
            task.save(function(err) {
                if(err) {
                console.log('something went wrong');
                } else { 
                console.log('successfully added a task!');
                }
            res.json(task);
            })
    },

    updatetask:(req, res) =>{
        Task.findOneAndUpdate({id:req.params._id ,title:req.body.title,  description:req.body.description, completed:req.body.completed}, function(err) {
            if(err) {
            console.log('something went wrong');
            } else { 
            console.log('successfully added a task!');
            }
        res.json(task);
        })
},
    removetask:(req, res) =>{
        console.log("POST DATA", req.body);
        // create a new User with the name and age corresponding to those from req.body
        Task.remove({id:req.params._id},function(err) {
            console.log('successfully deleted a user!');
        res.redirect('/');
        })
    },
    
    }
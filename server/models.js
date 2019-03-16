const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angular_first', {useNewUrlParser:true})
  .catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
    title: {
      type: String, 
      default: ""
    },
    description: {
      type: Boolean, 
      default: false
    },
    completed: {
      type: Boolean, 
      default: false 
    }, 
}, {timestamps:true});

module.exoprts = mongoose.model('Task', TaskSchema); 

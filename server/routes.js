///////// ROUTES /////////////

const mongoose = require('mongoose'),
Task = mongoose.model('Task')
const controllers = require('./controllers.js');
module.exports = function(app){

    app.get('/', controllers.index);
     
    app.get('/:id', controllers.result);

    app.post('/:name',controllers.newtask);

    app.put('/update/:id', controllers.updatetask);

    app.delete('/:name',controllers.removetask);

}

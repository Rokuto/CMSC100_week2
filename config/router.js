var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router) {
    router.route('/student')
        .get(student.find)
        .post(student.insert)
		//.delete(student.remove);
    
    router.route('/student/:id')
        .get(student.findOne)
        .put(student.update)
    	.delete(student.remove);
    
    router.route('/teacher')
        .get(teacher.find)
        .put(teacher.update)
        .post(teacher.add)
        .delete(teacher.del);
    return router;
};
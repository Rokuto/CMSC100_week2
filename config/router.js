var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router) {
    router.route('/student')
        .get(student.find);
    
    router.route('/teacher')
        .get(teacher.find)
        .put(teacher.update)
        .post(teacher.add)
        .delete(teacher.del);
    return router;
};

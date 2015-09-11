var request = require('supertest'),
	should = require('should-http');

describe('student', function(){	
		var url = 'localhost:5000';
	describe('find()', function(){
		it('should retrieve all student record', function(done){
			request(url)
				.get('/student')
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Array);
					done();
				});
				
		});
	});

	describe('findOne()', function(){
		it('should retrieve all student record', function(done){
			request(url)
				.get('/student/2013-11111')
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					done();
				});
				
		});
	});
	
	describe('insert()', function(){
		it('should return newly created record', function(done){
			request(url)
				.post('/student')
				.send({'studNo':'2015-12345', 'name':'Marie', 'b-date':'1997-11-12'})
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					done();
				});
				
		});
	});
	
});

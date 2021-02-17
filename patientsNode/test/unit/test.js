/* eslint-disable no-console */
/* eslint-disable no-undef */
let chai = require('chai');
let chaiHttp = require('chai-http');
// eslint-disable-next-line no-unused-vars
let server = require('../../app');
// eslint-disable-next-line no-unused-vars
let should = chai.should();
chai.use(chaiHttp);
const url = 'http://localhost:8080';
let logging = require('../../utils/logging');


describe('/GET ping service', () => {
	it('it should GET ping status message', (done) => {
		chai.request(url)
			.get('/api/v1/walgreens/nodejs/boilerplate/ping')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.status.should.equal('ok');
				res.body.apiname.should.equal('waglobsbunodeboilerplt');
				res.body.apiversion.should.equal('v1_0_0');
				done();
			});
	});
	
});

describe('Test Info/Debug/Error Message Logging', () => {
	it('it should log info message', (done) => {
		logging.logInfo("SampleAplicationName",101,1001,1,"GET","200","Success","TestInfoLog","100ms",null,null);
		done();
	});
	it('it should log info message', (done) => {
		logging.logInfo(null,102,1002,1,"GET","200","Success","TestInfoLog","100ms",null,null);
		done();
	});
	it('it should log Debug message', (done) => {
		logging.logDebug("SampleAplicationName",103,1003,2,"GET","200","Success","TestDebugLog","150ms",null,null);
		done();
	});
	it('it should log Debug message', (done) => {
		logging.logDebug(null,104,1004,2,"GET","200","Success","TestDebugLog","150ms",null,null);
		done();
	});
	it('it should log error message', (done) => {
		let error = new Error("Internal Error")
		logging.logError("SampleAplicationName",105,1005,3,"GET","500","Failure","Error Occured %s", "50ms","KFK-ERR-001","Error accessing input topic",error);
		done();
	});
	it('it should log error message', (done) => {
		let error = new Error("Internal Error")
		logging.logError(null,106,1006,3,"GET","500","Failure","Error Occured %s", "50ms","KFK-ERR-001","Error accessing input topic",error);
		done();
	});


}); 



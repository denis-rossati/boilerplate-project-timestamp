const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const server = require('../../server');

const should = chai.should();
chai.use(chaiHttp);

describe('/GET /api/:timestamp', () => {
  it('should return the right result when a date is passed to the url', (done) => {
    chai.request(server)
      .get('/api/2015-12-25')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('unix');
        res.body.should.have.property('unix').eql(1451001600000);
        res.body.should.have.property('utc');
        res.body.should.have.property('utc').eql('Fri, 25 Dec 2015 00:00:00 GMT');
        done();
      });
  });

  it('should return the right result when a unix time is passed to the url', (done) => {
    chai.request(server)
      .get('/api/1451001600000')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('unix');
        res.body.should.have.property('unix').eql(1451001600000);
        res.body.should.have.property('utc');
        res.body.should.have.property('utc').eql('Fri, 25 Dec 2015 00:00:00 GMT');
        done();
      });
  });

  it('should return the a advise when a invalid argument is passed to the url', (done) => {
    chai.request(server)
      .get('/api/something-else')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('error');
        res.body.should.have.property('error').eql('Invalid Date');
        done();
      });
  });
});

describe('/GET /api', () => {
  it('should return the current time', () => {
    chai.request(server)
      .get('/api')
      .end((err, res) => {
        res.should.have.status(200);
        // I don't know how to test it and I'm in rush :(
        res.body.should.have.property('unix');
        res.body.should.have.property('utc');
      });
  });
});

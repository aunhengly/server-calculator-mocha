let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./index');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

// describe('Add', () => {
//   it('It should be 12', done => {
//     chai
//       .request(server)
//       .post('/10?add=2')
//       .send(register_details) // this is like sending $http.post or this.http.post in Angular
//       .end((err, res) => {
//         // when we get a response from the endpoint
//         // in other words,
//         // the res object should have a status of 201
//         console.log();
//         // res.should.have.status(200);
//         // the property, res.body.state, we expect it to be true.
//         expect(res.body.state).to.be.true;

//         done(); // Don't forget the done callback to indicate we're done!
//       });
//   });
// });

describe('Add', () => {
  it('It should be 12', done => {
    chai
      .request(server)
      .post('/10?add=2')
      .send(register_details) // this is like sending $http.post or this.http.post in Angular
      .end((err, res) => {
        // when we get a response from the endpoint
        // in other words,
        // the res object should have a status of 201
        // res.should.have.status(200);
        // the property, res.body.state, we expect it to be true.
        expect(res.body.state).to.be.true;

        done(); // Don't forget the done callback to indicate we're done!
      });
  });
});

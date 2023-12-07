import chai from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import { DefaultService } from "../src/api/services/DefaultService";
const listNamesMockResponse = require('./list-names-mock-response.json');
const app = require('../src/index');
chai.use(chaiHttp);

describe('GET', () => {
  afterEach(function() {
      sinon.restore();
  });

  it('should return listnames json', (done) => {
    sinon.stub(DefaultService, 'getListsFormat').resolves(listNamesMockResponse);
    chai.request(app)
      .get('/list-names')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(JSON.parse(res.text)).to.deep.equal(listNamesMockResponse);
        done(); // Don't forget to call done() for async tests
      });
  });
});

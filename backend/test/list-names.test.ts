import chai from "chai";
import chaiHttp from "chai-http";
import chaiJestSnapshot from "chai-jest-snapshot";
import sinon from "sinon";
import { DefaultService } from "../src/service/nyTimesClient/services/DefaultService";

const listNamesMockResponse = require('./list-names-mock-response.json');
const app = require('../src/index');
chai.use(chaiHttp);
chai.use(chaiJestSnapshot);

describe('GET', () => {
  before(function () {
    chaiJestSnapshot.resetSnapshotRegistry();
  });

  beforeEach(function () {
    chaiJestSnapshot.configureUsingMochaContext(this);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('should return listnames json', (done) => {
    sinon.stub(DefaultService, 'getListsFormat').resolves(listNamesMockResponse);
    chai.request(app)
      .get('/list-names')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.text).to.matchSnapshot();
        done(); // Don't forget to call done() for async tests
      });
  });
});

import chai from "chai";
import chaiHttp from "chai-http";
import chaiJestSnapshot from "chai-jest-snapshot";
import sinon from "sinon";
import { DefaultService } from "../src/service/nyTimesClient/services/DefaultService";

const app = require('../src/index');
const bestSellersListMockResponse = require('./best-sellers-list-mock-response.json');

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

  it('should return books in a category json', (done) => {
    sinon.stub(DefaultService, 'getListsDateListJson').resolves(bestSellersListMockResponse);
    chai.request(app)
      .get('/category?encodedListName=hardcover-fiction')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.text).to.matchSnapshot();
        done(); // Don't forget to call done() for async tests
      });
  });
});
import chai from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import { DefaultService } from "../src/api/services/DefaultService";

const app = require('../src/index');
const bestSellersListMockResponse = require('./best-sellers-list-mock-response.json');


chai.use(chaiHttp);

// Use snapshot testing

describe('GET', () => {
  afterEach(function() {
      sinon.restore();
  });

  it('should return books in a category json', (done) => {
    sinon.stub(DefaultService, 'getListsDateListJson').resolves(bestSellersListMockResponse);
    chai.request(app)
      .get('/category?encodedListName=hardcover-fiction')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(JSON.parse(res.text)).to.deep.equal(bestSellersListMockResponse);
        done(); // Don't forget to call done() for async tests
      });
  });
});
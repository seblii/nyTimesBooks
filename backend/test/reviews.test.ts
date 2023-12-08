import chai from "chai";
import chaiHttp from "chai-http";
import chaiJestSnapshot from "chai-jest-snapshot";
import sinon from "sinon";
import { DefaultService } from "../src/service/nyTimesClient/services/DefaultService";

const app = require('../src/index');
const reviewsMockResponse = require("./reviews-mock-response.json");

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

    it('should return reviews references json', (done) => {
        sinon.stub(DefaultService, 'getReviewsFormat').resolves(reviewsMockResponse);
        chai.request(app)
            .get('/reviews?isbn=12345')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.matchSnapshot();
                done(); // Don't forget to call done() for async tests
            });
    });
});
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listNames_1 = __importDefault(require("../services/listNames"));
const router = express_1.default.Router();
/**
 * Returns a list of book categories.
 */
router.get('/', async (req, res, next) => {
    try {
        const result = await listNames_1.default.getListNames();
        res.status(result.status || 200).send(result.data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
});
module.exports = router;

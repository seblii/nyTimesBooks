"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bestsellers_1 = __importDefault(require("../services/bestsellers"));
const router = express.Router();
/**
 * Returns topsellers book by list name.
 */
router.get('/:list_name_encoded', async (req, res, next) => {
    const options = {
        list_name_encoded: req.params['list_name_encoded']
    };
    try {
        const result = await bestsellers_1.default.getBestsellersByListName(options);
        res.status(result.status || 200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
});
module.exports = router;

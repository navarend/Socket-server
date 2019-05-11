"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/messages', (req, res) => {
    res.json({
        ok: true,
        message: 'Success !!!'
    });
});
router.post('/messages', (req, res) => {
    const body = req.body.body;
    const to = req.body.to;
    res.json({
        ok: true,
        body, to
    });
});
router.post('/messages/:id', (req, res) => {
    const body = req.body.body;
    const to = req.body.to;
    const id = req.params.id;
    res.json({
        ok: true,
        body, to, id
    });
});
exports.default = router;

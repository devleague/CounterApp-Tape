'use strict';

const express = require('express');
const router = express.Router();
const ds = require('../dataStore');

router.get('/', (req, res) => res.json(ds.data));

router.get('/:id', (req, res) => res.json(ds.getById(req.params.id)));

module.exports = router;

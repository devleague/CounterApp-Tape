'use strict';

const express = require('express');
const router = express.Router();
const ds = require('../dataStore');

router.get('/', (req, res) => res.json(ds));

module.exports = router;

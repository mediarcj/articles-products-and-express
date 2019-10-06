const express = require('express');
const router = express.Router();
// const knex = require('../knex/knex');
// const Articles_DB = require('../db/articles');
// const validations = require('../middleware/validations');
const checkHead = require('../middleware/articleHeaderCheck');

router.use(checkHead.checkHeader);

module.exports = router;
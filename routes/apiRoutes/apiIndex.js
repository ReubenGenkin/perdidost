
const router = require('express').Router();
const apiIndex = require('./apiRoutes');

router.use(apiIndex);

module.exports = router;

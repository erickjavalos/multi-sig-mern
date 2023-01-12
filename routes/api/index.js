const router = require('express').Router();
const nfts = require('./nfts');

router.use('/nfts', nfts);

module.exports = router;
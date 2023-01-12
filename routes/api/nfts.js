const router = require('express').Router();
const NFT = require('../../models/NFT');


// create an nft entry
router.post('/addNft', (req, res) => {
    console.log("backend hit")
    NFT.create(req.body)
    .then((newBook) => {
    res.json(newBook);
    })
    .catch((err) => {
        res.json(err);
    });

  });

  module.exports = router;
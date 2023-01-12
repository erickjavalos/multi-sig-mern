const router = require('express').Router();
const NFT = require('../../models/NFT');


// create an nft entry
router.post('/addNft', (req, res) => {
    NFT.create(req.body)
        .then((newBook) => {
        res.json(newBook);
        })
        .catch((err) => {
        res.json(err);
        });
  });

  router.post('/sendADA', (req,res) => {
    console.log("send ada endpoint hit")
    res.status(200).json('sent!')
  })



  module.exports = router;
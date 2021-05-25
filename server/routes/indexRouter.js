const Restik = require("../models/restiki.model");

const router = require("express").Router();



router.post('/addmessage', async (req, res) => {
  const {input, id} = req.body
  const myMessageRestik = await Restik.findByIdAndUpdate(id, {$push : {messages: input}}, {new: true})
  res.json(myMessageRestik).status(200)
})


router.get('/allrest', async(req, res)=>{
  const allMyRestik = await Restik.find()
  res.json(allMyRestik).status(200)
})

router.post("/createrest", async (req, res) => {
  const {text, title, img} = req.body
  if (text && title) {
      const newRestik = await Restik.create({
        text,
        title,
        img
      });

    return res.json(newRestik).status(200)
  }
   res.sendStatus(501);
});

router.post('/redactrestik', async(req, res)=>{
  const {text, title, img} = req.body.inputs
  const MyRestik = await Restik.findOneAndUpdate({_id: req.body.id}, {text, title, img }, {new: true})
  res.json(MyRestik).status(200)
})

router.get('/:id/deleterest', async(req, res)=>{
  await Restik.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router;

//= ====================================| Import the Module |=====================================\\
const router = require('express').Router()

//= ====================================| Databases |=====================================\\
const ValidatorDB = require('../../Databases/validatorDB')

//= ====================================| Redirect |=====================================\\
router.get('/example', async function (req, res) {
  const query = req.query.text // https://(urlsite)/api/example?text=YOUR_TEXT_HERE
  const apiKey = req.query.apikey // https://(urlsite)/api/example?text=YOUR_TEXT_HERE&apikey=YOUR_APIKEY_HERE

  if (query === undefined) {
    return res.status(404).json({
      status: 404,
      message: 'Please input the query!'
    })
  }
  if (apiKey === undefined) {
    return res.status(404).json({
      status: 404,
      message: 'Please input the ApiKey!'
    })
  }
  const checkKey = ValidatorDB.chekApiKey(apiKey)
  if (!checkKey) {
    return res.status(403).json({
      status: 403,
      message: `ApiKey ${apiKey} not found, please register first!`
    })
  }

  res.status(200).json({
    status: 200,
    message: `You input ${query}`
  })
})

module.exports = router

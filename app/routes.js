/* eslint-disable-next-line no-unused-vars */
const router = require('govuk-prototype-kit').requests.setupRouter()

// Add your routes here

router.post('/licence-select', function (req, res) {
  var canoeOrKoala = req.body['canoe-or-koala']
  if (canoeOrKoala == "canoe"){
    res.redirect('/apply-canoe-licence')
  } else {
    res.redirect('/apply-koala-licence')
  }
})

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

router.post('/summary', function (req, res) {
  var licenceType = req.body['licence-type']
  var licenceStartDay = req.body['licence-start-day']
  var licenceStartMonth = months[req.body['licence-start-month']-1]
  var licenceStartYear = req.body['licence-start-year']

  var licence_config = {
    type: licenceType,
    startDay: licenceStartDay,
    startMonth: licenceStartMonth,
    startYear: licenceStartYear
  }

  res.render('summary', {config: licence_config})

})


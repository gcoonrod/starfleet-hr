var express = require('express'),
    router = express.Router(),
    personnelController = require("../controllers/personnel");

//Base: /api/personnel/
router.route('/personnel')
    .get(personnelController.getPersonnel)
    .post(personnelController.postPerson);

module.exports = router;

var express = require('express'),
    router = express.Router();

//Base: /api/personnel/
router.route('/personnel')
    .get(function(request, response) {
        var mock = {
            users: [{
                id: 1,
                givenName: "James",
                middleName: "Tiberius",
                familyName: "Kirk",
                rank: "Captain"
            }, {
                id: 2,
                givenName: "Geordi",
                middleName: "",
                familyName: "La Forge",
                rank: "Lt. Commander"
            }]
        };

        response.json(mock);
    });

module.exports = router;

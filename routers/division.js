var express = require('express'),
    router = express.Router();

//Base: /api/division/
router.route('/divisions')
    .get(function(request, response) {
        var mock = {
            divisions: [{
                id: 1,
                name: "Command",
                short: "CMD"
            }, {
                id: 2,
                name: "Operations",
                short: "OPS"
            }, {
                id: 3,
                name: "Sciences",
                short: "SCI"
            }]
        };

        response.json(mock);
    });

module.exports = router;

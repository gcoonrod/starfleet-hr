var Division = require('../models/division');

exports.getDivisions = function(request, response) {
    Division.find(function(error, divisions) {
        if (error) {
            response.send(error);
        }

        response.json(divisions);
    });
};

exports.getDivision = function(request, response) {
    Division.find({
        _id: request.params.division_id
    }, function(error, division) {
        if (error) {
            response.send(error);
        }

        response.json(division);
    });
};

exports.postDivision = function(request, response) {
    var division = new Division();

    division.name = request.body.name;
    division.short = request.body.short;

    division.save(function(error) {
        if (error) {
            response.send(error);
        }

        response.json({
            message: division.name + " added to Starfleet HR.",
            data: division
        });
    });
};

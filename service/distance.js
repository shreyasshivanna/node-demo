
var distance = {
    findDistance: function(req, res, next){
        var sub = {
            result: req.params.zipcode1 - req.params.zipcode2
        }
        res.send(sub)
    }
};
module.exports = distance;
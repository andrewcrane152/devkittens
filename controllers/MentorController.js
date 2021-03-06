var exports = module.exports = {};

var User = require('../models/User.js');
var	Cohort = require('../models/CohortModel.js');
var	Mentor = require('../models/MentorModel.js');

exports.getAllMentors = function(req, res){
	Mentor.find({})
	.populate('userId')
	.exec(function(err, data) {
		res.json(data);
	})
}

exports.assignMentorCohortId = function(req, res){
	var cohort = {
		cohortId: req.params.cohortId,
		students: []
	}
	Mentor.findOne({ userId: req.body._id }, function (err, mentor) {
		if (err) return res.status(500).send(err);
		if(mentor.cohorts && mentor.cohorts.length > 0){
			for (i = 0; i < mentor.cohorts.length; i++){
				if(mentor.cohorts[i].cohortId == cohort.cohortId){
					return res.send('Mentor is already added to this cohort')
				} 
			}
		}
		mentor.cohorts.push(cohort);
		mentor.save(function (err, savedMentor) {
			if (err) return res.status(500).send(err);
			Cohort.findById(cohort.cohortId, function (err, cohort) {
				if (err) return res.status(500).send(err);
				cohort.mentors.push({ userId: mentor.userId });
				cohort.save(function (err, data) {
					return res.send('Successfully assigned mentor to cohort.')
				})
			})
		})
	})
}
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Challenge = new Schema({
    ChallengeID: { type: String, required: true },
    Name: { type: String, required: true },
    ShortDescription: String,
    LongDescription: String,
    StartDate: { type: Date, min: "1980-12-12", required: true },
    StartDateText: String,
    EndDate: { type: Date, min: "2070-12-12", required: true },
    EndDateText: String,
    TimeMadeActive: { type: Date },
    IsAccepted: boolean,
    HasUnearnedPoints: boolean,
    TotalPoints: number,
    TotalEarnedPoints: number,
    AcceptancePoints: number,
    IterationPoints: number,
    ChallengeType: String,
    ChallengeTypeEnum: number,
    ChallengeGroupType: String,
    IsTeamChallenge: boolean,
    IsUserALeaderOfATeamInThisChallenge: boolean,
    MemberOfTeamChallenge: boolean,
    MemberProgress: number,
    Comments: Array < String > [],
    LastViewedComments: Date,
    MetricText: String,
    ActivityText: String,
    ProgressHeaderText: String,
    MilestoneHeaderText: String,
    NumberOfQuestionsToPass: number,
    AllSubchallengeCompletetionValue: number,
});

var Challenge = mongoose.Model("Challenge", Challenge);

module.exports = Challenge;

var courses = [
    {
        title:"Raspberry Cake",
        cost: 50
    },
    {
        title:"Lemon Souffle",
        cost: 40
    },
    {
        title:"Black Forest Cake",
        cost: 60
    },
]
exports.showCourses = (req, res) => {
    res.render("courses", {offeredCourses: courses});
}

exports.showSignup = (req, res) => {
    res.render("contact");
}

exports.postedSignUpForm = (req,res) => {
    res.render("thanks");
}

exports.showIndex = (req,res) => {
    res.render("index");
}
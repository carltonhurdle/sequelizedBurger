//the controller
/*
edit burger model to match sequelize
get the route and forward to index
match the route get to sequelize
replace the older function
use promise to pass the burgers into the main index page
post route to create the burgers
pass the result
redirect
update the burgers
export
*/

var express = require("express");
var db = require("../models/");

router.get("/", function(req, res) {
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
	db.Burger.findAll()
		.then(function(dbBurger) {
			console.log(dbBurger);
			var hbsObject = { burger: dbBurger };
			return res.render("index", hbsObject);
		});
});

router.post("/burgers/create", function(req, res) {
	db.Burger.create({
		burger_name: req.body.burger_name
	})
	.then(function(dbBurger) {
		console.log(dbBurger);
		res.redirect("/");
	});
});

router.put("/burgers/update", function(req, res) {
	db.Burger.update({
		devoured: true
	}, 
		{
			where: {
				id: req.body.burger_id
			}
		}
	) .then(function(dbBurger) {
		res.redirect("/");
	});
});

module.exports = router;
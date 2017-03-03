'use strict';
var data = require("../data.json");
exports.view = function(req, res){
	var t = {
		"items": [
		]
	}
	for (var i = 0; i < data.items.length; i++) {
		console.log("haha");
		if ((!data.items[i].deal) && (data.items[i].owner != 1)) {
			t.items.push(data.items[i])
		}
	}
				console.log(t);

  res.render('browse', t);

};


exports.getMatchData = function(req, res) {
	var itemid = req.params.itemid; // the item the user wants to exchange with
	var thisid = req.params.thisid; // the item the user interested in
	console.log(itemid);
	console.log(thisid);
	var items = data.items;
	var useritem = items[itemid];
	var thisitem = items[thisid];
	var interestlist = useritem.interested;
	console.log(interestlist.length);
	for (var i = 0; i < interestlist.length; i++) {
		if (interestlist[i].tradewith == thisid) {
			console.log("Match!");
			break;
		}
		if (i == interestlist.length - 1) {
			var interested = data.items[thisid].interested;
			console.log(interested);
			var newinterested = {
				"userid": 1,
				"tradewith": itemid
			}
			interested.push(newinterested);
			console.log(interested);
			console.log("wtf!");
			res.send([]);
			return;
		}
	}
	var userid = items[itemid].owner; // The browser's id
	var thisownerid = items[thisid].owner; // The item's owner's id
	var username = data.accounts[userid].name;
	var thisownername = data.accounts[thisownerid].name;
	var itemname = items[itemid].name;
	var thisname = items[thisid].name;
	data.items[itemid].deal = true;
	data.items[thisid].deal = true;
	console.log(data.items[itemid].deal);
	console.log(data.items[thisid].deal);
	var t = {
		"youritem": itemid,
		"item": thisid
	};
	data.accounts[userid].matches.push(t);
	console.log(t);
	t = {
		"youritem": thisid,
		"item": itemid
	};
	data.accounts[thisownerid].matches.push(t);
	console.log(t);
	//var postsarray1 = data.accounts[userid - 1].posts;
	//postsarray1.splice(postsarray1.indexOf(itemid), 1);
	//console.log(postsarray1);
	//var postsarray2 = data.accounts[thisownerid - 1].posts;
	//postsarray2.splice(postsarray2.indexOf(thisid), 1);
	//console.log(postarray2);

	console.log([username, itemname, thisownername, thisname]);
	res.send([username, itemname, thisownername, thisname])
	//return [thisid, itemid,items[thisid - 1].owner, items[itemid - 1].owner];

}
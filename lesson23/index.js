var config = {
	el: "#frame",
	data: {
		techlist1: [{state: "ongoing"}, {state: "onload"}, {state: "standby"}, {state: "done"}],
		techlist2: [{state: "YOU"}, {state: "SHALL"}, {state: "NOT"}, {state: "PASS"}],
		move() {
			config.data.techlist2.unshift(config.data.techlist1[config.data.techlist1.length - 1]);
			config.data.techlist1.pop();
		},
		movereverse() {
			config.data.techlist1.unshift(config.data.techlist2[config.data.techlist2.length - 1]);
			config.data.techlist2.pop();
		}
	}
}
let wire = new Vue(config);

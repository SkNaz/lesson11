
 function report(value, id) {
 	localStorage.setItem(id, value);
 }

 Vue.component("diagram", {
 	data() {
 		return {
 			chtoto: [
 				{name: "HEY", color: "red", value: 222},
 				{name: "YO", color: "blue", value: 153},
 				{name: "LALALA", color: "green", value: 103}
 			]
 		}
 	},
 	template: `
        	<div>
				<blak v-for="item in chtoto" :ribble="item" :key="item.index" />
        	</div>
    	`
 })

 Vue.component("blak", {
 	props: {
 		ribble: Object
 	},
 	data() {
 		return {
 			hz: 123
 		}
 	},
 	template: `
 		<div :class="'black'"
 			:style="{height: ribble.value + 'px', color: ribble.color}">
 			{{ribble.name}}
 			<input type="range" :id="ribble.name" min="100" max="300" v-model="ribble.value" onchange="report(this.value, this.id)" />
 		</div>

 	`,
 	created() {
 		 this.ribble.value = localStorage.getItem(this.ribble.name);
 	}
 })




 var config = {
 	el: "#test",
 	data: {
 		tr() {

 		},
 		obj: {
 			label: "212"
 		}
 	}
 }

 let test = new Vue(config);
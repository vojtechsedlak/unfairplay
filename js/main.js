$(document).ready(function() {
	console.log("yeehaaa");
	var data = $.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRFBkYQECaeklzVE3RzDWIJpwJa3-mh8vamy6qINnGwAfI7cgPQAFktOAqq5u3CbmC1YkK6dAaQKToa/pub?gid=0&single=true&output=csv');
	console.log(data);
})
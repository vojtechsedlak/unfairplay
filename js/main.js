$(document).ready(function() {
	console.log("yeehaaa");
	$('#dots').show();
    $.ajax({url: "https://spreadsheets.google.com/feeds/list/1J9RVuxRU_5MDO1K0FAucTNN0tvf5N7XVQuDH7TR9Bgg/default/public/values?alt=json", success: function(result){
        var data = result.feed.entry;
        for (var i=0;i<data.length;i++) {
        	var name = data[i].gsx$organization.$t;
        	var logo = data[i].gsx$imagepleasedontedit.$t;
        	var handle = data[i].gsx$twitter.$t;
        	var tweet = encodeURI('.@'+handle+': Withdraw your support for @FairPlayCanada. You should be ashamed for supporting this Internet censorship proposal, which will harm consumers, innovation and free expression online (cc: @NavdeepSBains) http://nositeblocking.ca #DontCensorCanada #cdnpoli')
        	$('#board').append('<div class="entity col-3"><div class="entity-image"><img src="assets/logos/'+logo+'"></div><a target="_new" class="btn" href="https://twitter.com/intent/tweet?text='+tweet+'"><img src="assets/twitter.png" width:20px;"> Tweet</a></div>');
        }
        $('#dots').hide();
    }});
})
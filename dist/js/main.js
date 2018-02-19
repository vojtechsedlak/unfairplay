$(document).ready(function() {
	console.log("yeehaaa");
	$('#dots').show();
    $.ajax({url: "https://spreadsheets.google.com/feeds/list/1J9RVuxRU_5MDO1K0FAucTNN0tvf5N7XVQuDH7TR9Bgg/default/public/values?alt=json", success: function(result){
        var data = result.feed.entry;
        for (var i=0;i<data.length;i++) {
        	var name = data[i].gsx$organization.$t;
        	var logo = data[i].gsx$imagepleasedontedit.$t;
        	var handle = encodeURI(data[i].gsx$twitter.$t);
        	var tweet = encodeURI('.'+handle+': Withdraw your support for @FairPlayCanada. This ineffective Internet censorship proposal will harm consumers, innovation and free expression online (cc: @CRTCeng @NavdeepSBains) https://unfairplay.ca %23DontCensor')
        	$('#board').append('<div class="entity col-3"><div class="entity-image"><img src="assets/images/'+logo+'"></div><a target="_new" onClick="gtag(\'event\', \'Tweet Click\')" class="btn" href="https://twitter.com/intent/tweet?text='+tweet+'&hashtags=DontCensor"><img src="assets/images/twitter_white.svg" width:20px;"> Tweet</a></div>');
        }
        $('#dots').hide();
    }});
})
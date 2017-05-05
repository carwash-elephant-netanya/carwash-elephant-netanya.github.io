$(document).ready(function(){
    String.prototype.hashCode = function() {
        var hash = 0, i, chr;
        if (this.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr   = this.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    window.todays_discount = function(){
        var now = new Date();
        return Math.abs(now.toDateString().hashCode())%15
    }
    var codes = [13576,38173,49382,49586,193845,748392,84857,94837,94837,47171,38493,38495,394872,94756,1834759,9584713,438294,94856,905837,487139,4849483,491834,48596]
    $("#discount_code").text(codes[window.todays_discount()])
    $("#discount").text(window.todays_discount() + "%")
    window.initMap = function() {
        var uluru = {lat:32.326636, lng:34.861967};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 19,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    $('.parallax').parallax();
})

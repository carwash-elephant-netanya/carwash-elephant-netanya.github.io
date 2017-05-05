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
    var codes = ["managing_sam", "useful_dragon", "sad_sun", "managing_butterfly", "excited_sam", "excited_antelope", "managing_antelope", "complete_sun", "sad_antelope", "happy_antelope", "sad_sam", "complete_sam", "happy_butterfly", "useful_sun", "sad_dragon", "managing_dragon", "excited_dragon", "managing_sun", "happy_dragon", "happy_sam", "useful_antelope", "excited_moon", "happy_sun", "useful_moon", "complete_antelope", "excited_butterfly", "sad_moon", "useful_butterfly", "sad_butterfly", "managing_moon", "complete_moon", "happy_moon", "complete_butterfly", "excited_sun", "useful_sam", "complete_dragon"]
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

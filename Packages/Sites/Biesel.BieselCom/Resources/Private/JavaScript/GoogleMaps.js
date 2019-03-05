/**
 * GoogleMaps
 *
 * @module GoogleMaps
 */
(function GoogleMaps() {

    /**
     * @class GoogleMaps
     * @constructor
     */
    function GoogleMaps(dom) {

        var that = this;

        /**
         * @property dom
         * @private
         * @type {jQuery}
         */
        this.dom = $(dom);

        /**
         * @property location
         * @private
         * @type {object}
         */
        this.location = {lat: 47.795167, lng: 12.226762};

        /**
         * @property zoom
         * @private
         * @type integer
         */
        this.zoom = 15;

        /**
         * @property apiKey
         * @private
         * @type string
         */
        this.apiKey = 'AIzaSyAW4UW8_c01TvutggZSgRnGaY7_Nm2nnMg';

        /**
         * @property apiUrl
         * @private
         * @type string
         */
        this.apiUrl = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;

        /**
         * @property routePlannerUrl
         * @private
         * @type string
         */
        this.routePlannerUrl = 'https://www.google.de/maps/dir//Rohrdorfer+Str.+1,+83101+Rohrdorf/@47.7952358,12.2264,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4776168df451a791:0x59208eeb7f65ca3f!2m2!1d12.2268858!2d47.795151';

        /**
         * @property map
         * @private
         * @type {object}
         */
        this.map = null;

        /**
         * Initialize the map and load api
         *
         * @method init
         */
        this.init = function () {
            jQuery.getScript(this.apiUrl, function() {
                that.createMapObject();
                that.createMarker();
            });
        };

        /**
         * Create map object with zoom and location
         *
         * @method createMapObject
         */
        this.createMapObject = function() {
            this.map = new google.maps.Map(document.getElementById('map'), {zoom: this.zoom, center: this.location});
        };

        /**
         * Creates the marker for the map with content
         *
         * @method createMarker
         */
        this.createMarker = function () {
            var marker = new google.maps.Marker({
                position: this.location,
                map: that.map,
                title: 'Biesel GmbH'
            });

            var infowindow = new google.maps.InfoWindow({
                content: that.infoWindowContent()
            });

            marker.addListener('click', function() {
                infowindow.open(that.map, marker);
            });

            marker.setMap(this.map);
        };

        /**
         * Returns the html content of the marker as string
         *
         * @method createMarker
         * @return string
         */
        this.infoWindowContent = function() {
            return "<div class='google-maps-infowindow'>" +
                        "<h3>Biesel GmbH</h3>" +
                        "<p><i class='far fa-location-arrow'></i>Rohrdorfer Str. 1, 83101 Achenmühle</p>" +
                        "<p><i class='far fa-phone'></i> ++49-8032-98827-0</p>" +
                        "<a href='" + this.routePlannerUrl + "'target='_blank' ><i class='far fa-map-marker link'></i>Anfahrtsplaner</a>" +
                   "</div>";
        };

        // initialize
        this.init();
    }

    // Set defaults after dom is ready
    $(document).ready(function () {
        $("[data-attr='google-maps']").each(function(index, element) {
            var googleMaps = new GoogleMaps(element);
        });
    });

})();
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class Effects {
    constructor() {
        this.wellcome = $('.wellcome');
        this.wellcomeContainer = $('.wellcome__container');
        this.promo = $('.promo');
        this.promoContainer = $('.promo__container');
        this.services = $('.services');
        this.servicesContainer1 = $('.services__container_1');
        this.servicesContainer2 = $('.services__container_2');
        this.wellcomeAnimation();
        this.promoAnimation();
        this.servicesAnimation();
    }

    wellcomeAnimation() {
        var that = this;
        new Waypoint({
            element: this.wellcome[0],
            handler: function(direction) {
                if (direction == 'down') {
                    that.wellcomeContainer.addClass('animation__container');
                }
            },
            offset: 0
        });
    }

    promoAnimation() {
        var that = this;
        new Waypoint({
            element: this.promo[0],
            handler: function(direction) {
                if (direction == 'down') {
                    that.promoContainer.addClass('animation__container');
                }
            },
            offset: 600
        });
    }

    servicesAnimation() {
        var that = this;
        new Waypoint({
            element: this.services[0],
            handler: function(direction) {
                if (direction == 'down') {
                    that.servicesContainer1.addClass('animation__container_1');
                } 
            },
            offset: 300
        });

        new Waypoint({
            element: this.services[0],
            handler: function(direction) {
                if (direction == 'down') {
                    that.servicesContainer2.addClass('animation__container_2');
                }
            },
             offset: 200
        });
    }
}

export default Effects;
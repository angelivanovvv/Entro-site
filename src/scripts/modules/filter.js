import jQueryBridget from  'jquery-bridget';
import Isotope from 'isotope-layout';

jQueryBridget('isotope', Isotope, $);
var postFilter;

class Filter {
    constructor() {
        this.btnsGroup = $('.gallery__btn__group');
        this.grid = $('.isotope-grid');
        this.activeButton();
        this.setFilter(this.grid);
        this.setFilterConditions(this.btnsGroup);
    }
    activeButton() {
        this.btnsGroup.each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.active_btn').removeClass('active_btn');
                $(this).addClass('active_btn');
            });
        });
    }
    setFilter(element) {
        element.isotope({
            itemSelector: '.gallery__box',
            percentPosition: true,
            masonry: {
                columnWidth: '.gallery__box'
            }
        });
    }
    setFilterConditions(element) {
        var that = this;
        element.on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            that.grid.isotope({ filter: filterValue });
        });
    }
}

export default Filter;
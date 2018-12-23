class Navigation {
    constructor() {
        this.window = $(window);
        this.document = $(document);
        this.viewPortWidth = this.window.innerWidth();
        this.header = $('.header');
        this.headerLogo = $('.header .header__logo');
        this.headerMenu = $('.header__menu li a');
        this.headerMobileBtn = $('.header__mobile_btn');
        this.activeMenuButton();
        this.navCondition(this.viewPortWidth);
        this.resizeNavCondition();
    }
    activeMenuButton() {
        this.headerMenu.click(function() {
            $('li a').removeClass('active');
            $(this).addClass('active');
        });
    }
    desktopNav() {
        var that = this;
        this.window.on('scroll', function() {
            if (that.window.scrollTop() > 1) {
                that.header.css({
                    'height': '80px',
                    'border-bottom': '1px solid #dbdbdb'
                });
                that.headerLogo.css({
                    'line-height': '80px'
                });
                that.headerMenu.css({
                    'height': '80px',
                    'padding-top': '24px'
                });
                that.headerMobileBtn.css({
                    'margin-top': '22px'
                });
            } else {
                that.header.css({
                    'height': '100px',
                    'border-bottom': '0'
                });
                that.headerLogo.css({
                    'line-height': '100px'
                });
                that.headerMenu.css({
                    'height': '100px',
                    'padding-top': '32px'
                });
                that.headerMobileBtn.css({
                    'margin-top': '32px'
                });
            }
        });
    }
    mobileNav() {
        this.header.css({
            'height': '60px',
            'border-bottom': '1px solid #dbdbdb'
        });
        this.headerLogo.css({
            'line-height': '60px'
        });
        this.headerMenu.css({
            'height': '55px',
            'padding-top': '8px'
        });
        this.headerMobileBtn.css({
            'margin-top': '11px'
        });
    }
    navCondition(width) {
        if (width + 17 > 768) {
            this.desktopNav();
            this.header.css({
                'height': '100px',
                'border-bottom': '0'
            });
            this.headerLogo.css({
                'line-height': '100px'
            });
            this.headerMenu.css({
                'height': '100px',
                'padding-top': '32px'
            });
            this.headerMobileBtn.css({
                'margin-top': '32px'
            });
        } else if (width + 17 < 768) {
            this.window.unbind('scroll');
            this.mobileNav();
        }
    }
    resizeNavCondition() {
        var that = this;
        this.window.resize(function() {
            var currentViewPortWidth = that.window.width();
            that.navCondition(currentViewPortWidth);
        });
    }
}

export default Navigation;
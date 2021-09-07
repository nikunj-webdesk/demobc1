import collapsibleFactory from '../common/collapsible';
import collapsibleGroupFactory from '../common/collapsible-group';

const PLUGIN_KEY = 'menu';

/*
 * Manage the behaviour of a menu
 * @param {jQuery} $menu
 */
class Menu {
    constructor($menu) {
        this.$menu = $menu;
        this.$body = $('body');
        this.hasMaxMenuDisplayDepth = this.$body.find('.navPages-list').hasClass('navPages-list-depth-max');

        // Init collapsible
        this.collapsibles = collapsibleFactory('[data-collapsible]', { $context: this.$menu });
        this.collapsibleGroups = collapsibleGroupFactory($menu);

        // Auto-bind
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);

        // Listen
        this.bindEvents();

         $('.MobileMenuLinks nav > ul > li .navPages-action-depth-max').on('click',function(){
            if($(this).attr('data-collapsible') === 'navPages-mob-ByVehicle'){
                $('body').addClass('is-openSizeVehicle');
                $('.mobVehicleWrap').show();
            }
            if($(this).attr('data-collapsible') === 'navPages-mob-BySize'){
                $('body').addClass('is-openSizeVehicle');
                $('.mobSizeWrap').show();
            }
            $(this).siblings().toggleClass('is-open-custom');
        });

        $('.mobSearchWidget > ul > li .navPage-subMenu-action').on('click', function(){
            if($(this).attr('data-collapsible') === 'navPages-mob-ByVehicle'){
                $('body').addClass('is-openSizeVehicle');
                $('.mobVehicleWrap').show();
            }
            if($(this).attr('data-collapsible') === 'navPages-mob-BySize'){
                $('body').addClass('is-openSizeVehicle');
                $('.mobSizeWrap').show();
            }
            if($(this).attr('data-collapsible') === 'navPages-mob-ByType'){
                $('body').addClass('is-openSizeVehicle');
                $('.mobTypeWrap').show();
            }
        });

        $('.MobileMenuLinks .BackToMenu').on('click',function(){
           $(this).parent().removeClass('is-open-custom');
           $(this).parent().siblings().removeClass('is-open-custom');

           $(this).parent().removeClass('is-open');
           $(this).parent().siblings().removeClass('is-open');
        });

        $('.TopBarMenu .closeMenu').on('click', function(){
            $(this).parent().parent().hide();
            $('body').removeClass('is-openSizeVehicle');
        });

        $('.MenuWrap .navPage-subMenu .tabs a').on('click',function(){
            var thisHref = $(this).attr('data-id');
            $(this).parent().addClass('is-active');
            $(this).parent().siblings().removeClass('is-active');
            $(thisHref).siblings().removeClass('is-active');
            $(thisHref).addClass('is-active');
        });

        $('.navUser-action--cart').on('click',function(){
            $('body').toggleClass('cart-overlay');
        });

        $('.top-banner-winter-tires .CloseSign').on('click',function(){
            $(this).parents('.top-banner-winter-tires').hide();
        });

        $.ajax({
            url: "/cart.php", 
            method: 'GET',
            success: function(result){
                $('.header-Cart-Total').html($(result).find('.getCartTotal').html());

            }
        });

        $('.Search-Widget-Inner .has-subMenu').on('click',function(){
            $(this).toggleClass('is-open');
            $(this).next().toggleClass('is-open');
            $(this).parent().siblings().children('.has-subMenu').removeClass('is-open');
            $(this).parent().siblings().children('.has-subMenu').next().removeClass('is-open');

            if(!$(this).hasClass('is-open')){
               $('body').removeClass('menu_bg_color_2'); 
               $('body').removeClass('menu_bg_color_x');  
            }else{               
               $('body').addClass('menu_bg_color_2');   
               $('body').addClass('menu_bg_color_x');   
            }
        });
        
        $(window).scroll(function() {
            (getScrollTop() >= 100) ? $('.header').addClass('header_fixed') : $('.header').removeClass('header_fixed');
            (getScrollTop() >= 100) ? $('body').addClass('sticky_active') : $('body').removeClass('sticky_active');
        });
        function getScrollTop() {
            if(typeof pageYOffset!= 'undefined'){
                return pageYOffset;
            } else {
                var B = document.body;
                var D = document.documentElement;
                D = (D.clientHeight)? D : B;
                return D.scrollTop;
            }
        }

        $('.navUser-action--quickSearch').on('click', function(){
            $('#quickSearch').toggle();
            $('.quickSearchResults').hide();
        });

        $('#search_query').on('keyup', function(){
            $('.quickSearchResults').show();
            $('.ClearSearch').show();
        });

        $('.MenuWrap > .navPages > ul > li > .has-subMenu').on('click',function(){ 
            if(!$(this).hasClass('is-open')){
              $('body').removeClass('menu_bg_color menu_bg_color_2');
            }else{               
               $('body').addClass('menu_bg_color');   
            }
        }); 

        $('.menuWrapMob .itemsList ul li a').on('click', function(){
            $(this).toggleClass('is-active');
            $(this).parent().siblings().children('a').removeClass('is-active');
        });

        $('.BackTop').on('click',function(){
            $('html,body').animate({
                scrollTop: 0},
            'slow');
        });

        $('.Cat-Search-List-Row .Show-List-Btn').click(function(){
            $(this).toggleClass('is-open');
            $(this).parent().siblings().toggle();
        });
	
    }

    collapseAll() {
        this.collapsibles.forEach(collapsible => collapsible.close());
        this.collapsibleGroups.forEach(group => group.close());
    }

    collapseNeighbors($neighbors) {
        const $collapsibles = collapsibleFactory('[data-collapsible]', { $context: $neighbors });

        $collapsibles.forEach($collapsible => $collapsible.close());
    }

    bindEvents() {
        this.$menu.on('click', this.onMenuClick);
        this.$body.on('click', this.onDocumentClick);
    }

    unbindEvents() {
        this.$menu.off('click', this.onMenuClick);
        this.$body.off('click', this.onDocumentClick);
    }

    onMenuClick(event) {
        event.stopPropagation();

        if (this.hasMaxMenuDisplayDepth) {
            const $neighbors = $(event.target).parent().siblings();

            this.collapseNeighbors($neighbors);
        }
    }

    onDocumentClick() {
        this.collapseAll();
        $('body').removeClass('menu_bg_color menu_bg_color_2');
    }
}

/*
 * Create a new Menu instance
 * @param {string} [selector]
 * @return {Menu}
 */
export default function menuFactory(selector = `[data-${PLUGIN_KEY}]`) {
    const $menu = $(selector).eq(0);
    const instanceKey = `${PLUGIN_KEY}Instance`;
    const cachedMenu = $menu.data(instanceKey);

    if (cachedMenu instanceof Menu) {
        return cachedMenu;
    }

    const menu = new Menu($menu);

    $menu.data(instanceKey, menu);

    return menu;
}

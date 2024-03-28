/*
 * Title:   Bacba Shop - HTML Template
 * Author:  QTC Media
 */

/* --------------------------------------------------------
 [Table of contents]
 
 1. revolutionSlider
 2. backToTop
 3. galleryLightbox
 4. isotopeMasonry
 5. slickCarousel
 6. slickFilterProductBestSelling
 7. slickFilterProductNewArrivals
 8. slickFilterProductSpecialProducts
 9. slickFilterProductTopBrands
 10. slickFilterProductTopSellers
 11. searchViewModel
 12. searchHiddenModel
 13. menuMobile
 14. showSelectFilter
 15. ajaxLoadItem
 16. countdown
 17. shopSlider
 18. filterByPrice
 19. customSelectOption
 20. customProductLayout
 21. boxQuantity
 22. accordionShopOrder
 23. initMap
 24. quantityButton
 25. slider_no_dot
 26. ajax_load_product_brand
 27. ajax_load_fashion_category
 28. smooth_scrolling
 29. slick_menu
 30. bacba_revolutionSlider
 31. show_menu_filter_home2
 
 [End table of contents]
 ----------------------------------------------------------------------- */

"use strict"; // Start of use strict


/*Begin Revolution Slider*/
function revolutionSlider() {
    if ($('#slider_v1').length) {
        jQuery("#slider_v1").revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            minHeight: '300',
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [580, 580, 580, 580, 580]
        });
    }

    if ($('#slider_v2').length) {
        jQuery("#slider_v2").revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            minHeight: '300',
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [580, 580, 580, 580, 580]
        });
    }

    if ($('#slider_v4').length) {
        jQuery("#slider_v4").revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            minHeight: '400',
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [710, 710, 710, 710, 710]
        });
    }

    if ($('#slider_v5').length) {
        jQuery("#slider_v5").revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            minHeight: '400',
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [715, 715, 715, 715, 715]
        });
    }

    if ($('#slider_v6').length) {
        jQuery("#slider_v6").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1903, 1203, 975],
            gridwidth: [1200, 980],
            gridheight: [496, 496, 496, 496, 496]
        });
    }
}
/*End Revolution Slider*/

/*Begin Back To Top*/
function backToTop() {
    if ($('.bacba-backtop').length) {
        var scrollTrigger = 500,
                backTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('.bacba-backtop').addClass('bacba-show-backtop');
                    } else {
                        $('.bacba-backtop').removeClass('bacba-show-backtop');
                    }
                };
        $(window).on('scroll', function () {
            backTop();
        });
    }
}
/*End Back To Top*/

/*Begin Gallery Lightbox*/
function galleryLightbox() {
    if ($('#gallery_widget').length) {
        $('#gallery_widget').lightGallery();
    }
}
/*End Gallery Lightbox*/

/*Begin Product Filter*/
function isotopeMasonry() {
    if ($('.isotope-product').length) {
        $('.isotope-product').each(function () {
            var iThis = $(this);
            var $grid = iThis.find('.grid').isotope({
                itemSelector: '.grid-item'
            });
            iThis.find('.btn-filter').each(function () {
                $(this).on('click', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({filter: filterValue});

                    $(this).siblings('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');

                    return false;
                });
            });
        });
    }
}
/*End Product Filter*/

/*Begin Carousel*/
function slickCarousel() {
    if ($('.carousel-latest-posts-v1').length) {
        $('.carousel-latest-posts-v1').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev bacba-arrow bacba-arrow-prev" aria-label="Previous" tabindex="0" role="button"><span class="arrow-prev"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next bacba-arrow bacba-arrow-next" aria-label="Next" tabindex="0" role="button"><span class="arrow-next"></span></button>',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    if ($('.carousel-latest-posts-v2').length) {
        $('.carousel-latest-posts-v2').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    
    
    if ($('.carousel-filter-product-top-product-home2').length) {
        $('.carousel-filter-product-top-product-home2').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    
    
    
    if ($('.carousel-latest-posts-v6').length) {
        $('.carousel-latest-posts-v6').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev bacba-arrow-prev" aria-label="Previous" tabindex="0" role="button"><span class="arrow-prev"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next bacba-arrow-next" aria-label="Next" tabindex="0" role="button"><span class="arrow-next"></span></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.carousel-logo').length) {
        $('.logo-slide-v6').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: false,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
    
    if ($('.carousel-latest-product').length) {
        $('.carousel-latest-product').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span class="uk-icon-angle-left"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span class="uk-icon-angle-right"></span></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}
/*End Carousel*/

/*Begin Carousel Product Best Selling*/
function slickFilterProductBestSelling() {
    if ($('.carousel-filter-product-best-selling').length) {
        $('.carousel-filter-product-best-selling').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}
/*End Carousel Product Best Selling*/

/*Begin Carousel Product New Arrivals*/
function slickFilterProductNewArrivals() {
    if ($('.carousel-filter-product-new-arrivals').length) {
        $('.carousel-filter-product-new-arrivals').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}
/*End Carousel Product New Arrivals*/

/*Begin Carousel Product Special Products*/
function slickFilterProductSpecialProducts() {
    if ($('.carousel-filter-product-special-products').length) {
        $('.carousel-filter-product-special-products').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}
/*End Carousel Product Special Products*/

/*Begin Carousel Product Top Brands*/
function slickFilterProductTopBrands() {
    if ($('.carousel-filter-product-top-brands').length) {
        $('.carousel-filter-product-top-brands').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}
/*End Carousel Product Top Brands*/

/*Begin Carousel Product Top Sellers*/
function slickFilterProductTopSellers() {
    if ($('.carousel-filter-product-top-sellers').length) {
        $('.carousel-filter-product-top-sellers').slick({
            dots: false,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span class="uk-icon-angle-left"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span class="uk-icon-angle-right"></span></button>',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}
/*End Carousel Product Top Sellers*/

/*Begin View Search Model*/
function searchViewModel() {
    if ($('.bacba-search-modal').length) {
        $('.bacba-search-modal').on('click', function () {
            $('#search-modal').fadeIn("slow").addClass('open');

            return false;
        });
    }
}
/*End View Search Model*/

/*Begin Hidden Search Model*/
function searchHiddenModel() {
    if ($('#search-modal').length) {
        $('#search-modal .close-modal').on('click', function () {
            $('#search-modal').removeClass('open').fadeOut("slow");

            return false;
        });
    }
}
/*End Hidden Search Model*/

/*Begin Menu Mobile*/
function menuMobile() {
    if ($('#bacba_menu_mobile').length) {
        $('#bacba_toggle_menu').on('click', function () {
            $('#bacba_menu_mobile').fadeIn().addClass('open');
            $('html').addClass('bacba-side-menu-opened');

            return false;
        });

        $('.bacba-close-menu .lines').on('click', function () {
            $('#bacba_menu_mobile').fadeOut().removeClass('open');
            $('html').removeClass('bacba-side-menu-opened');

            return false;
        });

        $('#bacba_menu_mobile .bacba-mobile-menu li.has_sub').each(function () {
            $(this).children('.mobile-arrow').on('click', function () {
                $(this).parent('li.has_sub').siblings('li.has_sub').removeClass('uk-active');
                $(this).parent('li.has_sub').siblings('li.has_sub').children('.sub_menu').slideUp();
                $(this).parent('li.has_sub').toggleClass('uk-active');
                $(this).siblings('.sub_menu').slideToggle();

                return false;
            });
        });
    }
}
/*End Menu Mobile*/

/*Begin Show Select Filter*/
function showSelectFilter() {
    if ($('.select-filter').length) {
        $('.select-filter').each(function () {
            var el_select = $(this);
            el_select.children('a').on('click', function () {
                el_select.siblings('.bacba-menu-filter').slideToggle();

                return false;
            });
        });
    }
}
/*End Show Select Filter*/

/*Begin Ajax Load Item*/
function ajaxLoadItem() {
    if ($('.bacba-ajax-load-item').length) {
        $('.bacba-ajax-load-item').each(function () {
            var iThis = $(this);
            iThis.find('.btn-filter').each(function () {
                $(this).on('click', function () {
                    $.ajax({
                        url: 'plugins/productAjaxFile/' + $(this).attr('data-folder') + '/' + $(this).attr('data-filter') + '.txt',
                        dataType: 'text',
                        beforeSend: function () {
                            iThis.find('.bacba-ajax-loading').show();
                        },
                        success: function (data) {
                            iThis.find('.carousel-filter-product').slick('destroy');
                            iThis.find('.bacba-product-filter').html(data);
                            if (iThis.find('.carousel-filter-product').hasClass('carousel-filter-product-best-selling')) {
                                slickFilterProductBestSelling();
                            }
                            if (iThis.find('.carousel-filter-product').hasClass('carousel-filter-product-new-arrivals')) {
                                slickFilterProductNewArrivals();
                            }
                            if (iThis.find('.carousel-filter-product').hasClass('carousel-filter-product-special-products')) {
                                slickFilterProductSpecialProducts();
                            }
                            if (iThis.find('.carousel-filter-product').hasClass('carousel-filter-product-top-brands')) {
                                slickFilterProductTopBrands();
                            }
                            if (iThis.find('.carousel-filter-product').hasClass('carousel-filter-product-top-sellers')) {
                                slickFilterProductTopSellers();
                            }
                        },
                        complete: function () {
                            iThis.find('.bacba-ajax-loading').hide();
                        }
                    });

                    $(this).siblings('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');

                    return false;
                });
            });
        });
    }
}
/*End Ajax Load Item*/

/*Begin Count Down*/
function countdown() {
    if ($('.countdown-event').length) {
        $('.countdown-event').each(function () {
            var holder = $(this),
                    now = new Date(),
                    day = now.getDate(),
                    month = now.getMonth() + 1,
                    year = now.getFullYear(),
                    next_date = day + 2,
                    nextyear = month + '/' + next_date + '/' + year + ' 07:07:07';

            holder.countdown({
                date: nextyear,
                offset: +7,
                day: 'Day',
                days: 'Days'
            }, function () {
                console.log('Done!');
            });

            return false;
        });
    }
}
/*End Count Down*/

/*Begin Shop Slider*/
function shopSlider() {
    if ($('#owl-carousel').length) {
        $('#owl-carousel').each(function () {
            var holder = $(this);
            holder.slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }
}
/*End Shop Slider*/

/*Begin Filter By Price*/
function filterByPrice() {
    if ($('.range-slider').length) {
        var $range = $(".js-range-slider"),
                min = 0,
                max = 350;
        $range.ionRangeSlider({
            type: "double",
            min: min,
            max: max,
            from: 60,
            to: 250,
            prefix: "$",
            prettify_enabled: false,
            grid: false
        });
    }
}
/*End Filter By Price*/

/*Begin Custom Style Select Option*/
function customSelectOption() {
    if ($('.custom-select').length) {
        $('.custom-select').each(function () {
            var classes = $(this).attr('class');
            var template = '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger">' + $(this).find(":selected").text() + '</span>';
            template += '<div class="custom-options">';
            $(this).find('option').each(function () {
                if ($(this).is(':selected')) {
                    template += '<span class="custom-option selection" data-value="' + $(this).attr('value') + '">' + $(this).html() + '</span>';
                } else {
                    template += '<span class="custom-option" data-value="' + $(this).attr('value') + '">' + $(this).html() + '</span>';
                }
            });
            template += '</div></div>';
            $(this).wrap('<div class="custom-select-wrapper"></div>');
            $(this).hide();
            $(this).after(template);
        });

        $('.custom-option:first-of-type').hover(function () {
            $(this).parents('.custom-options').addClass('option-hover');
        }, function () {
            $(this).parents('.custom-options').removeClass('option-hover');
        });

        $('.custom-select-trigger').each(function () {
            $(this).on('click', function (ev) {
                $('html').one('click', function () {
                    $('.custom-select').removeClass('opened');
                });
                $(this).parents('.custom-select').toggleClass('opened');
                ev.stopPropagation();
            });
        });

        $('.custom-option').each(function () {
            $(this).on('click', function () {
                $(this).parents('.custom-select-wrapper').find('select').val($(this).data('value'));
                $(this).parents('.custom-options').find('.custom-option').removeClass('selection');
                $(this).addClass('selection');
                $(this).parents('.custom-select').removeClass('opened');
                $(this).parents('.custom-select').find('.custom-select-trigger').text($(this).text());
            });
        });
    }
}
/*End Custom Style Select Option*/

/*Begin Product Layout*/
function customProductLayout() {
    if ($('.js-modes-mode').length) {
        $('.js-modes-mode .modes-mode').on('click', function () {
            if ($(this).hasClass('uk-active')) {
                return false;
            }

            $.ajax({
                url: 'plugins/productAjaxFile/productLayout/' + $(this).attr('data-layout') + '.txt',
                dataType: 'text',
                beforeSend: function () {
                    $('.bacba-ajax-loading').show();
                },
                success: function (data) {
                    $('.js-product-layout').html(data);
                },
                complete: function () {
                    $('.bacba-ajax-loading').hide();
                }
            });

            $('.js-modes-mode .modes-mode').removeClass('uk-active');
            $(this).addClass('uk-active');

            return false;
        });
    }
}
/*End Product Layout*/

/*Begin Box Quantity*/
function boxQuantity() {
    if ($('.js-box-quantity').length) {
        $('.js-box-quantity button.plus').on('click', function () {
            var $button = $(this);
            var intValue = $button.siblings('.quatity').val();
            if (intValue === $button.siblings('.quatity').attr('max')) {
                return false;
            }
            $button.siblings('.quatity').val(parseInt(intValue) + 1);

            return false;
        });

        $('.js-box-quantity button.minus').on('click', function () {
            var $button = $(this);
            var intValue = $button.siblings('.quatity').val();
            if (intValue === $button.siblings('.quatity').attr('min')) {
                return false;
            }
            $button.siblings('.quatity').val(parseInt(intValue) - 1);

            return false;
        });
    }
}
/*End Box Quantity*/

/*Begin accordion shop-order*/
function accordionShopOrder() {
    if($('.accordion-shop-order').length){
        $('.accordion-shop-order').on('click', function(ev) {
            ev.preventDefault();
            if ($(this).next().hasClass('show')) {
                $(this).next().removeClass('show');
                $(this).next().slideUp(350);
            } else {
                $(this).parent().parent().find('form .panel-shop-order').removeClass('show');
                $(this).parent().parent().find('form .panel-shop-order').slideUp(350);
                $(this).next().toggleClass('show');
                $(this).next().slideToggle(350);
            }
            return false;        
        });
    }
}
/*End accordion shop-order*/

/*Begin Google Map*/
function initMap() {
    if ($('.google-map').length) {
        var locations = [
            ['QTC Media <br> Bacba Shop - Multi-purpose eCommerce HTML Template', 30.231734, -97.756551, 1]
        ];
        var map = new google.maps.Map(document.getElementById('gmap_contact'), {
            zoom: 14,
            center: new google.maps.LatLng(33.960060, -80.989727),
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    };
}
/*End Google Map*/

/*Begin Quatity Button*/
function quantityButton() {
    if ($('.quantity').length) { 
        $('.quantity').each(function() {
          var $this = $(this),
            input = $this.find('input[type="number"]'),
            btnUp = $this.find('.quantity-up'),
            btnDown = $this.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

            btnUp.click(function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                  var newVal = oldValue;
                } else {
                  var newVal = oldValue + 1;
                }
                $this.find("input").val(newVal);
                $this.find("input").trigger("change");

                return false;
            });

            btnDown.click(function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                  var newVal = oldValue;
                } else {
                  var newVal = oldValue - 1;
                }
                $this.find("input").val(newVal);
                $this.find("input").trigger("change");

                return false;
            });
        });
    }
    
}
/*End Quatity Button*/

/*Begin Slider*/
function slider_no_dot( selector ){
  selector = $(selector);
  if ( selector.length) {
    selector.slick({
      rows: 2,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            infinite: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            infinite: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: false
          }
        }
      ]
    });
  }
}
/*End Slider*/

/*Begin Ajax load product*/
function ajax_load_product_brand(){
  if ($('.bacba-filter.product').length) {
      $('.bacba-filter.product').each(function () {
        var iThis = $(this),
        product = iThis.find('.filter-product-box'),
        column_right = iThis.find('.column-right'),
        button_filter_next = iThis.find('.button-filter .next button'),
        button_filter_prev = iThis.find('.button-filter .prev button'),
        length = product.length,
        data_array = ['1', '2', '3', '4', '5', '6', '7'],
        array = [], number, data_node;
        iThis.find('.bacba-filter ul').each(function () {
          var holder = $(this),
          li = holder.find('li');

            li.on('click', function () {
              var index = $(this).index(),
              val = data_array[index],
              src = 'images/filter/logo-filter-'+val+'.png';
              
              iThis.find('.box-info img').attr('src', src);
              li.removeClass('active');
              li.eq(index).addClass('active');
                
              ajax_filter_barnd(index);

              return false;
            });

            button_filter_next.bind('click', function () {
              var index = holder.find('li.active').index(),
              val, src;

              li.removeClass('active');
              if( index == li.length - 1 ){
                li.eq( 0 ).addClass('active');
                val = data_array[ 0 ];
              }
              else{
                li.eq( index+1 ).addClass('active');
                val = data_array[index + 1 ];
              }

              src = 'images/filter/logo-filter-'+val+'.png';
              iThis.find('.box-info img').attr('src', src);
              ajax_filter_barnd(index);

            });

            button_filter_prev.bind('click', function () {
              var index = holder.find('li.active').index(),
              val, src;

              li.removeClass('active');
              if( index == 0 ){
                li.eq( li.length - 1 ).addClass('active');
                val = data_array[li.length - 1];
              }
              else{
                li.eq( index - 1 ).addClass('active');
                val = data_array[index - 1 ];
              }

              src = 'images/filter/logo-filter-'+val+'.png';
              iThis.find('.box-info img').attr('src', src);
              ajax_filter_barnd(index);

            });
            

            function ajax_filter_barnd(index){
              number = Math.floor( Math.random() * length );
              if( number == index ){
                number = Math.floor( Math.random() * length );
              }

              data_node = product.eq(number).clone();

              for( var i = 0; i < length; i++){
                array[i] = product.eq(i).clone();
              }

              $.ajax({
                url: 'index-3.html',
                beforeSend: function () {
                  iThis.find('.bacba-ajax-loading').show(); 
                  product.eq( length + 1 ).remove();
                },
                success: function (data) {
                  column_right.append( array[number] );
                  iThis.find('.filter-product-box').eq(0).remove();
                },
                complete: function () {
                  iThis.find('.bacba-ajax-loading').hide();
                }
              });
            }
        });
    });
  }
}
/*End Ajax load product*/

/*Begin Ajax load fashion category*/
function ajax_load_fashion_category(){
    if ($('.ajax-load-fashion').length) {
        $('.ajax-load-fashion').each(function () {
            var iThis = $(this),
            holder = iThis.find('.bacba-title-ss ul'),
            result_1 = iThis.find('#slider-filter1'),
            next = iThis.find('.top-button .next button'),
            menu_category = iThis.find('#slick_menu li'),
            menu_filter = iThis.find('#menu-slick li'),
            menu_mobile = iThis.find('#menu-slick-mobile li'),
            prev = iThis.find('.top-button .prev button'),
            array_data_val = [ 'fashion', 'sport', 'digital', 'furnture', 'jewelry', 'garden' ],
            filter_li = holder.find('li');

            menu_category.on('click', function () {
                var index = $(this).index(),
                val =  array_data_val[ index ];

                menu_category.removeClass('active');
                menu_category.eq(index).addClass('active');

                url = 'plugins/productAjaxFile/fashionCategory/'+val+'.txt';
                ajax_reload_product(val, index);
            });

            menu_filter.on('click', function () {
                var index = $(this).index(),
                val;
                if ( index < 6 )
                  val =  array_data_val[ index ];
                else
                  val = array_data_val[ Math.floor( Math.random() * 6 ) ];

                menu_filter.removeClass('active');
                menu_filter.eq(index).addClass('active');

                url = 'plugins/productAjaxFile/fashionCategory/'+val+'.txt';
                ajax_reload_product(val, index);
            });

            menu_mobile.on('click', function () {
                var index = $(this).index(),
                val;
                if ( index < 6 )
                  val =  array_data_val[ index ];
                else
                  val = array_data_val[ Math.floor( Math.random() * 6 ) ];

                menu_mobile.removeClass('active');
                menu_mobile.eq(index).addClass('active');

                url = 'plugins/productAjaxFile/fashionCategory/'+val+'.txt';
                ajax_reload_product(val, index);
            });

            filter_li.on('click', function () {
                var index = $(this).index(),
                val;
                if ( index < 6 )
                  val =  array_data_val[ index ];
                else
                  val = array_data_val[ Math.floor( Math.random() * 6 ) ];

                filter_li.removeClass('active');
                filter_li.eq(index).addClass('active');

                url = 'plugins/productAjaxFile/fashionCategory/'+val+'.txt';
                ajax_reload_product(val, index);
            });

            function ajax_reload_product( val, index ){
              url = 'plugins/productAjaxFile/fashionCategory/'+val+'.txt';
              $.ajax({
                url: url,
                dataType: 'text',
                beforeSend: function () {
                  iThis.find('.bacba-ajax-loading').show(); 
                },
                success: function (data) {
                    result_1.slick('destroy');
                    result_1.html(data);
                    slider_no_dot('#slider-filter1');
                },
                complete: function () {
                  iThis.find('.bacba-ajax-loading').hide();
                }
              });
          }
        });
    }
}
/*Begin Ajax load fashion category*/

/*Begin smooth scrolling*/
function smooth_scrolling(){
  $('a').on('click', function (event) {
      var href = $(this).attr('href'), 
      link = "";
      if (typeof href !== 'undefined'){
        link = href.slice(0, 1);
      }
      if( link == '#' ){
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== '') {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                  scrollTop: $(hash).offset().top - 50
              }, 1000, function () {
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  //window.location.hash = hash;
              });
          } // End if
      }
      if( link != '#' ){
          $(location).attr('href', href);
      }
  });
}
/*End smooth scrolling*/

/*Begin slick menu*/
function slick_menu( selector, direction, autoplay){
  selector = $( selector );
  direction = ( direction == 0 ) ? false : true;
  autoplay = ( autoplay == 0 ) ? false : true;
  if ( selector.length ) {
    selector.slick({
      dots: false,
      infinite: false,
      vertical: direction,
      autoplay: autoplay,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 999,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
          }
        }
      ]
    });
  }
}
/*End slick menu*/

/*Begin revolutionSlider*/
function bacba_revolutionSlider(){
  if ($('#slider_v3').length) {
      jQuery("#slider_v3").revolution({
          sliderType: "standard",
          sliderLayout: 'auto',
          minHeight: '400',
          delay: 6000,
          navigation: {
              onHoverStop: "on"
          },
          responsiveLevels: [1920, 1203, 975, 751, 463],
          gridwidth: [1200, 980],
          gridheight: [715, 715, 715, 715, 715]
      });
  }
}
/*End revolutionSlider*/

/*Begin event menu filter home 2*/
function show_menu_filter_home2(){
    if ( $('.section-filter .home2-menu-filter .filter-title' ).length ){
        var iThis = $('.section-filter .home2-menu-filter .filter-title' );
        iThis.bind('click', function(event) {
            var holder = $(this),
            menu = holder.find('+ .bacba-menu-filter');
            if( !menu.hasClass('menu-open') ){
                menu.addClass('menu-open');
                menu.slideDown();
            }else{
                menu.removeClass('menu-open');
                menu.slideUp();
            }
        });
    }
    
    function ajax_reload_product(selector, loading) {
        var url = window.location.origin + '/html/plugins/productAjaxFile/ProductHome2/data.txt';
        $.ajax({
            url: url,
            dataType: 'text',
            success: function (data) {
                selector.slick('destroy');
                var str_data = '',
                        rand_old = '';
                for (var i = 0; i < 4; i++) {
                    var rand = Math.floor((Math.random() * 20) + 1),
                            text = '';
                    if (rand_old.indexOf(rand) != -1)
                        rand = Math.floor((Math.random() * 20) + 1);
                    text = 'images/home-2/sports-product-' + rand + '.jpg';
                    rand_old += '-' + rand;
                    str_data += data.replace("images/home-2/sports-product-17.jpg", text);
                    loading.hide();
                }
                selector.html(str_data);
                _slick_ajax_product(selector);
            }
        });
    }
    function _slick_ajax_product(selector) {
        if (selector.length) {
            selector.slick({
                dots: false,
                variableWidth: false,
                autoplay: true,
                infinite: true,
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }
    }
    
    if ( $('.section-filter .home2-menu-filter .btn-filter' ).length ){
        var iThis = $('.section-filter .home2-menu-filter .btn-filter' );
        iThis.bind('click', function(event) {
            var holder = $(this),
            // parent = holder.parent('.bacba-menu-filter').parent('.home2-menu-filter').parent('.title-menu-home2'),
            parent = holder.parent('.bacba-menu-filter').parent('.home2-menu-filter').parent('.title-menu-home2'),
            loading = parent.find('+ div + div .home2-product-slider .bacba-ajax-loading'),
            result = parent.find('+ .banner-item + .uk-grid .home2-product-slider .carousel-filter-product-top-product-home2');
            iThis.removeClass('active');
            holder.addClass('active');
            loading.show();
            ajax_reload_product( result , loading );
            return false;
        });

    }
}
/*End event menu filter home 2*/

//Instance of fuction while Document ready event
jQuery(document).on('ready', function () {
    (function ($) {
        revolutionSlider();
        backToTop();
        galleryLightbox();
        isotopeMasonry();
        slickCarousel();
        slickFilterProductBestSelling();
        slickFilterProductNewArrivals();
        slickFilterProductSpecialProducts();
        slickFilterProductTopBrands();
        slickFilterProductTopSellers();
        searchViewModel();
        searchHiddenModel();
        menuMobile();
        showSelectFilter();
        ajaxLoadItem();
        countdown();
        shopSlider();
        filterByPrice();
        customSelectOption();
        customProductLayout();
        boxQuantity();
        accordionShopOrder();
        initMap();
        quantityButton();
        bacba_revolutionSlider();
        slider_no_dot('#slider-filter1');
        ajax_load_product_brand();
        ajax_load_fashion_category();
        smooth_scrolling();
        slick_menu('#slick_menu', 0, 0);
        slick_menu('#menu-slick-mobile', 0, 0);
        slick_menu('#menu-slick', 1, 0);
        show_menu_filter_home2();
    })(jQuery);
});
//Instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {
    (function ($) {

    })(jQuery);
});
//Instance of fuction while Window Load event
jQuery(window).on('load', function () {
    (function ($) {

    })(jQuery);
});



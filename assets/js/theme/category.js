import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
 import compareProducts from './global/compare-products';
 import FacetedSearch from './common/faceted-search';
import utils from '@bigcommerce/stencil-utils';
import modalFactory, { showAlertModal } from './global/modal';

export default class Category extends CatalogPage {

    onReady() {
         compareProducts(this.context.urls);

        //  if ($('#facetedSearch').length > 0) {
        //      this.initFacetedSearch();
        //  } else {
        //      this.onSortBySubmit = this.onSortBySubmit.bind(this);
        //      hooks.on('sortBy-submitted', this.onSortBySubmit);
        //  }

         $('.CategoryTopContent .SwitchSize').on('click', function(){
             $(this).toggleClass('is-open');
             $('.SwitchSizePop').toggle();
         });
        
        $('.Tire-Specifications .Specifications-Link').on('click', function(){
            $(this).toggleClass('is-open');
            if($(this).hasClass('is-open')){
                $(this).text('Show Tire Specifications');
            }else{
                $(this).text('Show Tire Specifications');
            }
            $(this).next().toggle();
        });

        /*QTY update*/
        $(document).on('click', '[data-quantity-change] button', function(){
            const $currentStock = parseInt($(this).parent('.form-increment').attr('data-current-stock'));
            if($currentStock >= 5 || $currentStock == 3){
                const $target = $(this);
                const $input = $(this).parent().children('.form-input');
                const quantityMin = parseInt($input.data('quantityMin'), 10);
                const quantityMax = parseInt($input.data('quantityMax'), 10);

                let qty = parseInt($input.val(), 10);
                
                if ($target.data('action') === 'inc') {
                    if(qty == $currentStock){}else{
                        if (quantityMax > 0) {
                            if ((qty + 1) <= quantityMax) {
                                qty++;
                            }
                        } else {
                            qty++;
                        }
                    }
                } else if (qty > 1) {
                    if (quantityMin > 0) {
                        if ((qty - 1) >= quantityMin) {
                            qty--;
                        }
                    } else {
                        qty--;
                    }
                }

                $input.val(qty);
                $(this).closest('.product').find('#customAddcart').children('[name="qty[]"]').val(qty);

                var price = $(this).parent().parent().parent().find(".price.price--withoutTax").text();
                price = price.replace("$","");
                price = price.replace(",","");
                price= eval(price);
                price = (price).toFixed(0);
                price = price * eval(qty);
                price = price.toFixed(0);
                $(this).parent().parent().parent().find('.four_p_price').html("<span>Total for: "+qty+" =</span>  $"+price);

            }else if($currentStock == 4){
                const $target = $(this);
                const $input = $(this).parent().children('.form-input');
                const quantityMin = parseInt($input.data('quantityMin'), 10);
                const quantityMax = parseInt($input.data('quantityMax'), 10);

                let qty = parseInt($input.val(), 10);
                
                if ($target.data('action') === 'inc') {
                    if(qty == $currentStock){}else{
                        if (quantityMax > 0) {
                            if ((qty + 2) <= quantityMax) {
                                qty++;
                                qty++;
                            }
                        } else {
                            qty++;
                            qty++;
                        }
                    }
                } else if (qty > 2) {
                    if (quantityMin > 0) {
                        if ((qty - 2) >= quantityMin) {
                            qty--;
                            qty--;
                        }
                    } else {
                        qty--;
                        qty--;
                    }
                }

                $input.val(qty);
                $(this).closest('.product').find('#customAddcart').children('[name="qty[]"]').val(qty);

                var price = $(this).parent().parent().parent().find(".price.price--withoutTax").text();
                price = price.replace("$","");
                price = price.replace(",","");
                price= eval(price);
                price = (price).toFixed(0);
                price = price * eval(qty);
                price = price.toFixed(0);
                $(this).parent().parent().parent().find('.four_p_price').html("<span>Total for: "+qty+" =</span>  $"+price);
            }
        });
        /*QTY update*/

        /*Add to cart */
        const previewModalCat = modalFactory('#previewModalCat')[0];

        $(document).on('click', '.Add-To-Cart-Btn > a', function(){
            var form = $(this).next()[0];
            
            utils.api.cart.itemAdd(filterEmptyFilesFromForm_X(new FormData(form)), (err, response) => {
                const errorMessage = err || response.data.error;

                if (errorMessage) {
                    const tmp = document.createElement('DIV');
                    tmp.innerHTML = errorMessage;
                    return showAlertModal(tmp.textContent || tmp.innerText);
                }
                
                if (previewModalCat) {
                    window.location.href = '/cart.php';
                } 
            });
        });

        function filterEmptyFilesFromForm_X(formData) {
            try {
                for (const [key, val] of formData) {
                    if (val instanceof File && !val.name && !val.size) {
                        formData.delete(key);
                    }
                }
            } catch (e) {
                console.error(e);
            }
            return formData;
        }
        /* End Add to cart */ 
        
         if($(window).width() < 768){
            setTimeout(function(){
                $('.AllProductListing ul li .Bottom-Card').each(function(){
                    $(this).children('.Outer').children('.Tire-Specifications').insertBefore($(this).siblings('.Top-Card').children('.card-body').children('.card-body-right').children('.Bottom-Card-Inner'));
                }); 
                $('.AllProductListing ul li .card-body-left').each(function(){
                    $(this).children('.card-body-left-inner').children('.card-figure').insertBefore($(this).children('.card-text'));
                    $(this).siblings('.Warning-Message').insertBefore($(this).siblings('.card-body-right').children('.Bottom-Card-Inner'));
                });
            },5000);    
        }
    }

     initFacetedSearch() {
         const $productListingContainer = $('#product-listing-container');
         const $facetedSearchContainer = $('#faceted-search-container');
         const productsPerPage = this.context.categoryProductsPerPage;
         const requestOptions = {
             config: {
                 category: {
                     shop_by_price: true,
                     products: {
                         limit: productsPerPage,
                     },
                 },
             },
             template: {
                 productListing: 'category/product-listing',
                 sidebar: 'category/sidebar',
             },
             showMore: 'category/show-more',
         };

         this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
             $productListingContainer.html(content.productListing);
             $facetedSearchContainer.html(content.sidebar);

             $('html, body').animate({
                 scrollTop: 0,
             }, 100);
  
             if($(window).width() < 768){
                setTimeout(function(){
                    $('.AllProductListing ul li .Bottom-Card').each(function(){
                        $(this).children('.Outer').children('.Tire-Specifications').insertBefore($(this).siblings('.Top-Card').children('.card-body').children('.card-body-right').children('.Bottom-Card-Inner'));
                    }); 

                    $('.AllProductListing ul li .card-body-left').each(function(){
                        $(this).children('.card-body-left-inner').children('.card-figure').insertBefore($(this).children('.card-text'));
                        $(this).siblings('.Warning-Message').insertBefore($(this).siblings('.card-body-right').children('.Bottom-Card-Inner'));
                    });
                    
                },5000); 
            }
			$('.Tire-Specifications .Specifications-Link').on('click', function(){
				$(this).toggleClass('is-open');
				if($(this).hasClass('is-open')){
					$(this).text('Show Tire Specifications');
				}else{
					$(this).text('Show Tire Specifications');
				}
				$(this).next().toggle();
			});
         });
     }
}

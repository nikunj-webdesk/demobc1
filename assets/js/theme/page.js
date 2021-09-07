import PageManager from './page-manager';
import utils from '@bigcommerce/stencil-utils';
import compareProducts from './global/compare-products';
import modalFactory, {
  showAlertModal
} from './global/modal';

export default class Page extends PageManager {
  onReady() {
    compareProducts(this.context.urls);
    /*QTY update*/
    $(document).on('click', '.form-increment button', function () {
      const $currentStock = parseInt($(this).parent('.form-increment').attr('data-current-stock'));
      if ($currentStock > 8 || $currentStock == 7 || $currentStock == 5 || $currentStock == 3) {
        const $target = $(this);
        const $input = $(this).parent().children('.form-input');
        const quantityMin = parseInt($input.data('quantityMin'), 10);
        const quantityMax = parseInt($input.data('quantityMax'), 10);

        let qty = parseInt($input.val(), 10);

        if ($target.data('action') === 'inc') {
          if (qty == $currentStock) {} else {
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
        // single or set
        var $qtyElement = $(this).closest('.Bottom-Card.Tire-Set').find('#customAddcart');
        if (!$qtyElement.length) {
          $qtyElement = $(this).closest('.product').find('#customAddcart');
        }
        if ($qtyElement.length) {
          $qtyElement.children('[name="qty[]"]').val(qty);
        }

        var price = $(this).parent().parent().parent().find(".price.price--withoutTax").text();
        price = price.replace("$", "");
        price = price.replace(",", "");
        price = eval(price);
        price = (price).toFixed(0);
        price = price * eval(qty);
        price = price.toFixed(0);
        $(this).parent().parent().parent().find('.four_p_price').html("<span>Total for: " + qty + " =</span>  $" + price).data('subtotal', price);;

      } else if ($currentStock == 4 || $currentStock == 6 || $currentStock == 8) {
        const $target = $(this);
        const $input = $(this).parent().children('.form-input');
        const quantityMin = parseInt($input.data('quantityMin'), 10);
        const quantityMax = parseInt($input.data('quantityMax'), 10);

        let qty = parseInt($input.val(), 10);

        if ($target.data('action') === 'inc') {
          if (qty == $currentStock) {} else {
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
        // single or set
        var $qtyElement = $(this).closest('.Bottom-Card.Tire-Set').find('#customAddcart');
        if (!$qtyElement.length) {
          $qtyElement = $(this).closest('.product').find('#customAddcart');
        }
        if ($qtyElement.length) {
          $qtyElement.children('[name="qty[]"]').val(qty);
        }

        var price = $(this).parent().parent().parent().find(".price.price--withoutTax").text();
        price = price.replace("$", "");
        price = price.replace(",", "");
        price = eval(price);
        price = (price).toFixed(0);
        price = price * eval(qty);
        price = price.toFixed(0);
        $(this).parent().parent().parent().find('.four_p_price').html("<span>Total for: " + qty + " =</span>  $" + price).data('subtotal', price);;

      }
    });
    /*QTY update*/

    /*Add to cart */
    const previewModalCat = modalFactory('#previewModalCat')[0];

    $(document).on('click', '.Add-To-Cart-Btn > a', function () {
      var form = $(this).next()[0];

      utils.api.cart.itemAdd(filterEmptyFilesFromForm_X(new FormData(form)), (err, response) => {
        const errorMessage = err || response.data.error;

        if (errorMessage) {
          const tmp = document.createElement('DIV');
          tmp.innerHTML = errorMessage;
          return showAlertModal(tmp.textContent || tmp.innerText);
        } else {
          window.location.href = '/cart.php';
        }
      });
    });

    /* Front Rear start QTY */
    $(document).on('click', '.Front-Pro-Data [data-quantity-change] button, .Rear-Pro-Data [data-quantity-change] button', function () {
      // update subtotal
      let subTotal = 0;
      const $productElement = $(this).closest('.product');
      const $cardPrices = $productElement.find('.four_p_price');
      const $subTotalElement = $productElement.find('.Total-Value');
      $cardPrices.each(function() {
        const price = $(this).data('subtotal');
        subTotal += price * 1;
      });

      $subTotalElement.html("$" + subTotal);
    });
    /* Front Rear End QTY */

    /* Front Rear start Add to cart */
    $(document).on('click', '.Custom-Add-To-Cart-Btn > a', function () {
      var count = 0;
      var parents = $(this).parents('.product');
      $(parents).find('.Bottom-Card.Front-Pro-Data').each(function () {
        var form = $(this).find('form#customAddcart')[0];

        utils.api.cart.itemAdd(filterEmptyFilesFromForm_X(new FormData(form)), (err, response) => {
          const errorMessage = err || response.data.error;

          if (errorMessage) {
            const tmp = document.createElement('DIV');
            tmp.innerHTML = errorMessage;
            return showAlertModal(tmp.textContent || tmp.innerText);
          }
          count++;
          if ((count) > 1) {
            window.location.href = '/cart.php';
          }
          setTimeout(function () {
            $(parents).find('.Bottom-Card.Rear-Pro-Data').each(function () {
              var form = $(this).find('form#customAddcart')[0];

              utils.api.cart.itemAdd(filterEmptyFilesFromForm_X(new FormData(form)), (err, response) => {
                const errorMessage = err || response.data.error;

                if (errorMessage) {
                  const tmp = document.createElement('DIV');
                  tmp.innerHTML = errorMessage;
                  return showAlertModal(tmp.textContent || tmp.innerText);
                }
                count++;
                if ((count) > 1) {
                  window.location.href = '/cart.php';
                }
              });
            }, 800);
          });
        });
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

    /*Add to cart*/
  }
}

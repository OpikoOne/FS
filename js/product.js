let numCount = document.getElementById('num_count');
let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let choiceSize = document.getElementById('size');
let choiceColor = document.getElementById('color')




$(function() {
	$('body').on('click', '.minus, .plus', function(){
		var $row = $(this).closest('.point');
		var $input = $row.find('.count_numb');
		var step = $row.data('step');
		var val = parseFloat($input.val());
		if ($(this).hasClass('minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});
 
	$('body').on('change', '.count_numb', function(){
		var $input = $(this);
		var $row = $input.closest('.point');
		var step = $row.data('step');
		var min = parseInt($row.data('min'));
		var max = parseInt($row.data('max'));
		var val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;	
		} else if (max && val > max) {
			val = max;	
		}
		$input.val(val);
	});
});







choiceSize.addEventListener('click', function(e) {
  
  let target = e.target;
  if(target.tagName == 'SPAN') {
   let item = target


   let previousAct = choiceSize.querySelector('.product-card__info_size_item.active-size');
   item.classList.add('active-size');
   previousAct.classList.remove('active-size');
  }
  
})

choiceColor.addEventListener('click', function(e) {
  let target = e.target;
  if(target.tagName == 'SPAN') {
   let item = target


   let previousAct = choiceColor.querySelector('.product-card__info_color_item.active-color');
   item.classList.add('active-color');
   previousAct.classList.remove('active-color');
  }
})


 



const productBtn = document.querySelectorAll('.product-card__info_amount button');
const cartPorductList = document.querySelector('.basket-list');
const basket = document.querySelector('.basket');
const fullPrice = document.querySelector('.decor__total_full-price')
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};


const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} грн`;
};


const printQuantity = () => {
	let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
	cartQuantity.textContent = productsListLength;
	productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};




const generateCartProduct = (id, img, title, price, size, color,amount) => {
 return `
    <div class="basket__warp" data-id="${id}">
    <div class="basket__warp_block-1">
      <img src="${img}" alt="">
      <div class="basket__warp_block-1_img">
        <img src="img/photo_2021-03-02_21-.jpg" alt="">
      </div>
      <p>${title} - ${size}, ${color}</p>
    </div>
    <div class="basket__warp_block-2">
      <h3>${price}</h3>
      <div class="point" data-step="1" data-min="1" data-max="10">
        <span class="plus" >+</span>
        <input class="count_numb" type="text" name="count" value="${amount}">
        <span class="minus">-</span>
      </div>
    </div>
    </div>
  `;
}

productBtn.forEach(el => {
  el.closest('.product-card').setAttribute('data-id', randomId());
  el.addEventListener('click', (e) =>{
    let self = e.currentTarget;
    let parent = self.closest('.product-card')
    let id = parent.dataset.id;
    let img = parent.querySelector('.product-card__img img').getAttribute('src');
    let title = parent.querySelector('.product-card__info h4').textContent;
    let priceString = parent.querySelector('.product-card__info h3').textContent;
    let priceNumber = parent.querySelector('.product-card__info h3 span').textContent;
    let size = parent.querySelector('.active-size').textContent;
    let color = parent.querySelector('.active-color').textContent;
    let amountProduct = parent.querySelector('.count_numb').value;

   
    // plusFullPrice(priceNumber);
    // printFullPrice();
    

    const container = document.querySelector('basket-list_container');
    console.log(container)

    // document.querySelector('.basket-list_container').insertAdjacentHTML('afterbegin', generateCartProduct(id, img, title, priceString, size, color, amountProduct));




    self.disable = true;
  });
})



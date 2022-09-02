
let catalogSection = document.querySelector('.catalog');
let catalog = catalogSection.querySelector('.catalog__product')
let catalogMenu = catalogSection.querySelector('.catalog__menu')
let catalogProducts = catalogSection.querySelectorAll('.catalog__product_card')
let select = document.querySelector('.orderby');





;(function() {
 

  if(catalogSection === null) {
    return
  }

  
  let removeChildren = function(item) {
    while(item.firstChild) {
      item.removeChild(item.firstChild);
    }
  }


  let updateChildren = function(item, children) {
    removeChildren(item);
    for(let i = 0; i < children.length; i+= 1) {
      item.appendChild(children[i]);
      console.log(children)
    }
  };


  

  catalogMenu.addEventListener('click', function(e) {
    let target = e.target;
    if(e.target.tagName == 'LI') {
      let item = target;
      console.log(item);

      if(item.classList.contains('active-catalog')) {
        return
      }
      
      let fillterValue = item.getAttribute('data-fillter');
      console.log(fillterValue);
      let previousAct = catalogMenu.querySelector('.catalog__menu_item.active-catalog')
      
      previousAct.classList.remove('active-catalog');
      item.classList.add('active-catalog');

      if(fillterValue == "all") {
        updateChildren(catalog, catalogProducts);
        return
      }

      let fillteredItems = [];
      for( let i = 0; i < catalogProducts.length; i += 1) {
        let current = catalogProducts[i];
        if(current.getAttribute('data-category') === fillterValue) {
          fillteredItems.push(current);
        }
      }

      updateChildren(catalog,fillteredItems);
    } 
  })
})();






if (select) {
  select.addEventListener("change", function(e) {
    const typeSort = e.target.value;

    if (!catalogProducts) return;

    catalog.innerHTML = '';
    const newElementSortByPrice = [...catalogProducts];
    console.log(newElementSortByPrice)

    if (typeSort === 'menu-order' || typeSort === 'popularity') {
      newElementSortByPrice.sort(() => Math.random() - 0.5);
    }

    if (typeSort === 'price-asc') {
      newElementSortByPrice.sort((a, b) => (Number(a.dataset.price) > Number(b.dataset.price) ? 1 : -1));
    }

    if (typeSort === 'price-desc') {
      newElementSortByPrice.sort((a, b) => (Number(a.dataset.price) < Number(b.dataset.price) ? 1 : -1));
    }



    newElementSortByPrice.forEach((product) => {
      catalog.insertAdjacentElement('beforeend', product);
    })
  })
}
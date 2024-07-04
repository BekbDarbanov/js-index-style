document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');
    const totalPriceElem = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [];

    document.querySelectorAll('.product-item button').forEach(button => {
        button.addEventListener('click', function() {
            const productItem = button.parentElement;
            const productName = productItem.querySelector('p').innerText;
            const productPrice = parseInt(productItem.querySelector('p:nth-of-type(2)').innerText.replace(/\D/g, ''));

            const cartItem = document.createElement('li');
            cartItem.innerHTML = `<span>${productName}</span><span>${productPrice}</span>`;
            
            cartItems.appendChild(cartItem);
            cart.push({name: productName, price: productPrice});
            cartCount.innerText = cart.length;

            updateTotalPrice();
        });
    });

    document.getElementById('cart-svg').addEventListener('click', function() {
        cartModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });

    function updateTotalPrice() {
        let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        totalPriceElem.innerText = totalPrice;
    }

    checkoutButton.addEventListener('click', function() {
        alert('Общая сумма к оплате: ' + totalPriceElem.innerText);
    });

    document.querySelector('.category-nav button:nth-child(1)').addEventListener('click', function() {
        window.location.href = 'notebooks.html';
    });

    document.querySelector('.category-nav button:nth-child(2)').addEventListener('click', function() {
        window.location.href = 'tablets.html';
    });

    document.querySelector('.category-nav button:nth-child(5)').addEventListener('click', function() {
        window.location.href = 'all.html';
    });

    document.querySelector('.category-nav button:nth-child(3)').addEventListener('click', function() {
        window.location.href = 'phones.html';
    });

    document.querySelector('.category-nav button:nth-child(4)').addEventListener('click', function() {
        window.location.href = 'sisors.html';
    });

    document.querySelector('.search-bar input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            let query = event.target.value.toLowerCase();
            if (query.includes('ноутбуки')) {
                window.location.href = 'notebooks.html';
            } else if (query.includes('планшеты')) {
                window.location.href = 'tablets.html';
            } else if (query.includes('телефон')) {
                window.location.href = 'phones.html';
            } else if (query.includes('наушники')) {
                window.location.href = 'sisors.html';
            } else {
                alert('Каталог не найден');
            }
        }
    });

    // Обработчик для кнопки "Гарантия и возврат"
    document.querySelector('nav ul li:nth-child(3) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'returns.html';
    });

    // Обработчик для кнопки "Оптовикам"
    document.querySelector('nav ul li:nth-child(4) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'wholesale.html';
    });

    // Обработчик для кнопки "Блог"
    document.querySelector('nav ul li:nth-child(5) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'blog.html';
    });

    // Обработчик для кнопки "Контакты"
    document.querySelector('nav ul li:nth-child(6) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'contacts.html';
    });
});


document.addEventListener("DOMContentLoaded", () => {
    let regBtn = document.getElementById("register");
    let regModal = document.getElementById("regMod");
    let close = document.getElementById("close");
  
    regBtn.addEventListener("click", () => {
      regModal.style.display = "block";
    });
  
    close.addEventListener("click", () => {
      regModal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target == regModal) {
        regModal.style.display = "none";
      }
    });
  
    let regForm = document.getElementById("regForm");
    regForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;
  
      console.log("Username:", username);
      console.log("Email:", email);
  
      registerModal.style.display = "none";
    });
  });
  // !
  document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
      document.body.style.opacity = 1;
    }, 50);
  });

document.addEventListener('DOMContentLoaded', () => {
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add('slide-in-left');
            item.style.animation = 'slideInLeft 0.5s forwards';
        } else {
            item.classList.add('slide-in-right');
            item.style.animation = 'slideInRight 0.5s forwards';
        }
        item.style.opacity = '1';  // Ensure the items are visible
    });
});

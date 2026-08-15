/* ================= CART ================= */

let cart = [];

let cartCount = 0;


/* ================= ADD TO CART ================= */

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(name + " added to cart!");
}


/* ================= OPEN CART ================= */

function openCart() {

    const modal = document.getElementById("cartModal");

    const items = document.getElementById("cartItems");

    const total = document.getElementById("cartTotal");

    items.innerHTML = "";

    let cartTotal = 0;


    if (cart.length === 0) {

        items.innerHTML =
            "<p>Your cart is empty.</p>";

    } else {

        cart.forEach(function(item, index) {

            cartTotal += item.price;

            const div =
                document.createElement("div");

            div.className = "cart-item";

            div.innerHTML = `
                <span>${item.name}</span>

                <strong>
                    ₹${item.price.toLocaleString("en-IN")}
                </strong>
            `;

            items.appendChild(div);

        });

    }


    total.textContent =
        "₹" + cartTotal.toLocaleString("en-IN");

    modal.style.display = "block";
}


/* ================= CLOSE CART ================= */

function closeCart() {

    document.getElementById("cartModal")
        .style.display = "none";
}


/* ================= CHECKOUT ================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    alert(
        "Thank you for shopping with ShopZone!"
    );

    cart = [];

    cartCount = 0;

    document.getElementById("cartCount")
        .textContent = "0";

    closeCart();
}


/* ================= SEARCH ================= */

function searchProducts() {

    const search =
        document.getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const name =
            product.querySelector("h3")
                .textContent
                .toLowerCase();

        if (
            search === "" ||
            name.includes(search)
        ) {

            product.style.display = "flex";

        } else {

            product.style.display = "none";

        }

    });

}


/* ================= SEARCH ENTER KEY ================= */

document
    .getElementById("searchInput")
    .addEventListener("keyup", function(event) {

        if (event.key === "Enter") {

            searchProducts();

        }

    });


/* ================= CATEGORY FILTER ================= */

function filterCategory(category) {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");


        if (productCategory === category) {

            product.style.display = "flex";

        } else {

            product.style.display = "none";

        }

    });


    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ================= SHOW ALL ================= */

function showAllProducts() {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        product.style.display = "flex";

    });

}


/* ================= SCROLL TO PRODUCTS ================= */

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= MENU ================= */

function toggleMenu() {

    alert(
        "Categories: Electronics, Fashion, Home and Books"
    );

}


/* ================= CLOSE MODAL ================= */

window.onclick = function(event) {

    const modal =
        document.getElementById("cartModal");

    if (event.target === modal) {

        closeCart();

    }

};

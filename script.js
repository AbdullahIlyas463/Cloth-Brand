let bagCount = 0;


/* ==================================================
                    MOBILE MENU
================================================== */

function toggleMenu()
{
    const navLinks =
        document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function(item)
{
    item.addEventListener("click", function()
    {
        document
            .getElementById("navLinks")
            .classList
            .remove("active");
    });
});



/* ==================================================
                    SEARCH
================================================== */

function openSearch()
{
    document
        .getElementById("searchOverlay")
        .classList
        .add("active");

    document
        .getElementById("searchInput")
        .focus();
}


function closeSearch()
{
    document
        .getElementById("searchOverlay")
        .classList
        .remove("active");
}



/* ==================================================
                    ADD TO BAG
================================================== */

function addToBag()
{
    bagCount++;

    document
        .getElementById("bagCount")
        .textContent = bagCount;

    alert(
        "Product added to your bag!"
    );
}


function showBag()
{
    if (bagCount === 0)
    {
        alert(
            "Your shopping bag is empty."
        );
    }
    else
    {
        alert(
            "You have " +
            bagCount +
            " item(s) in your bag."
        );
    }
}



/* ==================================================
                    SEARCH PRODUCTS
================================================== */

function searchProducts()
{
    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product)
    {
        const name =
            product
            .querySelector("h3")
            .textContent
            .toLowerCase();


        if (name.includes(input))
        {
            product.style.display = "";
        }
        else
        {
            product.style.display = "none";
        }
    });
}



/* ==================================================
                    NEWSLETTER
================================================== */

function subscribe(event)
{
    event.preventDefault();

    alert(
        "Thank you for joining our list!"
    );

    event.target.reset();
}
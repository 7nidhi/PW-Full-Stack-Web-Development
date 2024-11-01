const menuItems = document.querySelectorAll("li");

menuItems.forEach(item => {
    
    item.addEventListener("mouseover", function () {
        const submenu = this.querySelector("ul");
        if (submenu) submenu.style.display = "block";
    });

    
    item.addEventListener("mouseout", function () {
        const submenu = this.querySelector("ul");
        if (submenu) submenu.style.display = "none";
    });
});
// document.addEventListener("DOMContentLoaded", function () {
//     const dropdownButtons = document.querySelectorAll("[data-dropdown]");

//     dropdownButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             const menu = this.nextElementSibling;
//             const icon = this.querySelector("i.bi-chevron-down");
//             const text = this.querySelector("span");

//             menu.classList.toggle("hidden");
//             icon.classList.toggle("-rotate-90");

//             if (!menu.classList.contains("hidden")) {
//                 text.classList.add("text-black", "font-semibold");
//             } else {
//                 text.classList.remove("text-black", "font-semibold");
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const currentPath = window.location.pathname.split("/").pop();
//     const menuItems = document.querySelectorAll(".menu-item");

//     menuItems.forEach(item => {
//         if (item.getAttribute("href") === currentPath) {
//             item.classList.remove("text-gray-500");
//             item.classList.add(
//                 "bg-skyBlue", 
//                 "bg-opacity-10", 
//                 "pointer-events-none", 
//                 "border-l-4",
//                 "border-blue-800",
//                 // "rounded-none"
//             );

//             const icon = item.querySelector("i"); 
//             if (icon) {
//                 icon.classList.remove("text-goldenYellow"); 
//                 icon.classList.add("text-blue-600");
//             }

//             const span = item.querySelector("span");
//             if (span) {
//                 span.classList.remove("text-gray-500");
//                 span.classList.add("text-blue-600", "font-semibold");
//             }
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("sidebar.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("sidebar").innerHTML = data;
//             setTimeout(initSidebar, 100);
//         })
//         .catch(error => console.error("Error:", error));
// });

function initSidebar() {
    console.log("Sidebar initialized!");

    const dropdownButtons = document.querySelectorAll("[data-dropdown]");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const menu = this.nextElementSibling;
            const icon = this.querySelector("i.bi-chevron-down");

            if (menu.classList.contains("hidden")) {
                menu.classList.remove("hidden"); 
                icon.classList.add("rotate-180"); 
            } else {
                menu.classList.add("hidden");
                icon.classList.remove("rotate-180"); 
            }

            console.log("Dropdown clicked!"); 
        });
    });
}

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("sidebar.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("sidebar-container").innerHTML = data;
//             setupMenuLinks();
//         })
//         .catch(error => console.error("Error loading sidebar:", error));


//     function setupMenuLinks() {
//         const menuItems = document.querySelectorAll(".menu-item");

//         menuItems.forEach(item => {
//             item.addEventListener("click", function (event) {
//                 event.preventDefault();
//                 const page = this.getAttribute("data-page");

//                 fetch(page)
//                     .then(response => response.text())
//                     .then(data => {
//                         document.getElementById("main-content").innerHTML = data;
//                         updateActiveMenu(this); 
//                     })
//                     .catch(error => console.error("Error loading page:", error));
//             });
//         });
//     }

//     function updateActiveMenu(activeItem) {
//         document.querySelectorAll(".menu-item").forEach(item => {
//             item.classList.remove("active");
//         });

//         activeItem.classList.add("active");
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    fetchSidebar();
});

function fetchSidebar() {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            let sidebarContainer = document.getElementById("sidebar-container");
            if (!sidebarContainer) {
                console.error("Error: #sidebar-container not found!");
                return;
            }
            sidebarContainer.innerHTML = data;
            setupMenuLinks();
        })
        .catch(error => console.error("Error loading sidebar:", error));
}

function setupMenuLinks() {
    setTimeout(() => {
        const menuItems = document.querySelectorAll(".menu-item");
        if (menuItems.length === 0) {
            console.warn("Warning: No menu items found.");
            return;
        }

        menuItems.forEach(item => {
            item.addEventListener("click", function (event) {
                event.preventDefault();
                const page = this.getAttribute("data-page");

                fetch(page)
                    .then(response => response.text())
                    .then(data => {
                        let mainContent = document.getElementById("main-content");
                        if (!mainContent) {
                            console.error("Error: #main-content not found!");
                            return;
                        }
                        mainContent.innerHTML = data;
                        updateActiveMenu(this);
                    })
                    .catch(error => console.error("Error loading page:", error));
            });
        });
    }, 100);
}

function updateActiveMenu(activeItem) {
    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
    });
    activeItem.classList.add("active");
}

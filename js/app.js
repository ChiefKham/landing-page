// variable used to generate navigation
const navUl = document.getElementById("navbar__list");

//Variable for accessing sections inorder to modify
const sections = document.querySelectorAll("section");

// variable for targeting navigation links for scrolling
const links = document.querySelectorAll(".navbar__menu a");


// function for generating navigation 
const genrateNaviagtion = () => {
    let navList = "";
    // looping through the sections to generate the navbar with their unique dataset
    sections.forEach((section) => {
        const sectionId = section.id;
        const sectionDataNav = section.dataset.nav;

        navList += `<li><a class="menu__link" href="#${sectionId}"> ${sectionDataNav}</a></li>`;
    });

    //append elements to variable
    navUl.innerHTML = navList;
};

genrateNaviagtion();

// checking to see wether the section is in viewport
function sectionViewPort(section) {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= window.innerHeight;
}

//activating the active state on section in viewport
function toggleActiveState() {
    sections.forEach((section) => {
        const navLink = document.querySelector(`.menu__link[href="#${section.id}"]`);
        if (sectionViewPort(section)) {
            //if section is in view but has no active class, then add it, and if it does, do nothing
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
                navLink.classList.add("active");
            } else {
                section.classList.add("active");
            }
        } else {
            //removing active class if section is not in view
            section.classList.remove("your-active-class");
            navLink.classList.remove("active");
        }
    });
}

//event listener to toggle active class to section is view when you scroll
window.addEventListener("scroll", function () {
    toggleActiveState()
});

// fucntion for smooth scrolling when to proper section when you click the nav link
const scrolling = () => {
    navUl.forEach(navUl => {
        navUl.addEventListener("click", (event) => {
            event.preventDefault();

            const targetId = navUl.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
};


//calling the fucntion
scrolling();
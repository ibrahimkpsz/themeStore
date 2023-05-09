const darkBtn = document.getElementById("darkBtn");
const navbar = document.getElementById("header");
const navLink = document.querySelectorAll(".nav-link");
const navBrand = document.getElementById("brand");
const contactTextBox = document.getElementById("contactTextBox");
const label = document.getElementsByTagName("label");
const mainTextBox = document.getElementById("mainTextBox");
const mainImg = document.getElementById("mainImg");
const mainBtn = document.getElementById("mainBtn");
const filterBtn = document.querySelectorAll(".filterBtn");
const heroSection = document.getElementById("heroSection");
const heroTextBox = document.getElementById("heroTextBox");
const heroImg = document.getElementById("heroImg");
const themesTextBox = document.getElementById("themesTextBox");
const moreBtn = document.getElementById("moreBtn");
const getStartedTextBox = document.getElementById("getStartedTextBox");
const getStartedBtn = document.getElementById("getStartedBtn");
const footer = document.getElementById("footer");


const darkMode = () => {
    document.body.classList.toggle("bg-dark");
    footer.classList.toggle("dark");
    navbar.classList.toggle("bg-black");
    navbar.classList.toggle("text-white");
    navBrand.classList.toggle("text-white");
    navLink.forEach((item) => {
        item.classList.toggle("text-white");
    });
    filterBtn.forEach((item) => {
        item.classList.toggle("text-black");
        item.classList.toggle("bg-white");
    });
    themesTextBox.classList.toggle("text-white");
    if (navbar.classList.contains("bg-black")) {
        darkBtn.classList.add("bg-white");
        darkBtn.classList.add("text-dark");
        darkBtn.innerHTML = "Light Mode";
        mainImg.src = "img/mainDark.svg";
        heroImg.src = "img/heroDark.svg";
    } else {
        darkBtn.classList.remove("bg-white");
        darkBtn.classList.remove("text-dark");
        darkBtn.innerHTML = "Dark Mode";
        mainImg.src = "img/Main.png";
        heroImg.src = "img/Hero.png";
    }
    mainBtn.classList.toggle("bg-white");
    mainBtn.classList.toggle("text-dark");
    mainTextBox.classList.toggle("text-white");
    heroSection.classList.toggle("dark");
    heroTextBox.classList.toggle("text-white");
    moreBtn.classList.toggle("bg-white");
    moreBtn.classList.toggle("text-dark");
    getStartedTextBox.classList.toggle("text-white");
    getStartedBtn.classList.toggle("bg-white");
    getStartedBtn.classList.toggle("text-dark");
}

const darkModeContact = () => {
    document.body.classList.toggle("bg-dark");
    footer.classList.toggle("dark");
    navbar.classList.toggle("bg-black");
    navbar.classList.toggle("text-white");
    navBrand.classList.toggle("text-white");
    contactTextBox.classList.toggle("text-white");
    moreBtn.classList.toggle("bg-white");
    moreBtn.classList.toggle("text-dark"); "z"
    for (let i = 0; i < 3; i++) {
        label[i].classList.toggle("text-white");
    }
    navLink.forEach((item) => {
        item.classList.toggle("text-white");
    });
    if (navbar.classList.contains("bg-black")) {
        darkBtn.classList.add("bg-white");
        darkBtn.classList.add("text-dark");
        darkBtn.innerHTML = "Light Mode";
        mainImg.src = "img/mainDark.svg";
        heroImg.src = "img/heroDark.svg";
    } else {
        darkBtn.classList.remove("bg-white");
        darkBtn.classList.remove("text-dark");
        darkBtn.innerHTML = "Dark Mode";
        mainImg.src = "img/Main.png";
        heroImg.src = "img/Hero.png";
    }
}


fetch('/js/data.json')
    .then(response => response.json())
    .then((datas) => {
        const cardContainer = document.getElementById("cardContainer");
        for (let i = 0; i < 4; i++) {
            const card = `
                <div class="col-lg-3 g-4">
                    <div class="card border-0 rounded-0 mb-3">
                        <img src="${datas[i].img}" alt="Themes Image">
                        <div class="card-body py-4">
                            <h4 class="card-title mb-4">${datas[i].title}</h4>
                            <a href="${datas[i].livePreview}" class="btn btn-outline-dark rounded-0">Preview</a>
                            <a href="${datas[i].downloadURL}" class="btn btn-outline-dark rounded-0">Download</a>
                        </div>
                    </div>
                </div>
            `;
            cardContainer.insertAdjacentHTML("beforeend", card);
        }
    });

fetch('/js/data.json')
    .then(response => response.json())
    .then((items) => {
        const themes = document.getElementById("themes");
        const filterBtns = document.getElementById("filterBtns");

        // Tüm kartları görüntüle
        function showAllCards() {
            themes.innerHTML = "";
            items.forEach((item) => {
                const card = `
                    <div class="col-lg-3 g-4" data-category="${item.category}">
                        <div class="card border-0 rounded-0 mb-3">
                            <img src="${item.img}" alt="Themes Image">
                            <div class="card-body py-4">
                                <h4 class="card-title mb-4">${item.title}</h4>
                                <a href="${item.livePreview}" class="btn btn-outline-dark rounded-0">Preview</a>
                                <a href="${item.downloadURL}" class="btn btn-outline-dark rounded-0">Download</a>
                            </div>
                        </div>
                    </div>
                `;
                themes.insertAdjacentHTML("beforeend", card);
            });


            filterBtns.addEventListener("click", (event) => {
                if (event.target.classList.contains("filterBtn")) {
                    const filter = event.target.dataset.filter;
                    const cards = themes.querySelectorAll(".col-lg-3");

                    cards.forEach((card) => {
                        const category = card.dataset.category;
                        if (filter === "All" || category === filter) {
                            card.style.display = "flex";
                        } else {
                            card.style.display = "none";
                        }
                    });
                }
            });
        }

        showAllCards();
    });
// Preloader

window.onload = () => {
  const loader = document.getElementById("preloader");
  loader.style.display = "none";
};

const loadPhone = async (searchText, loadMore = false) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, loadMore);
};

const displayPhones = (phones, loadMore) => {
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";
  const loadmoreContainer = document.getElementById("load-more-container");
  if (phones.length > 12 && !loadMore) {
    loadmoreContainer.classList.remove("hidden");
  } else {
    loadmoreContainer.classList.add("hidden");
  }
  if (!loadMore) {
    phones = phones.slice(0, 12);
  }
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card max-w-[240px] max-h-[424px] bg-gray-200 dark:bg-gray-700 shadow-xl rounded-2xl`;
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
      <img src="${phone.image}" alt="Phones" class="rounded-2xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title dark:text-slate-200">${phone.phone_name}</h2>
      <p class="dark:text-slate-200">${phone.brand}</p>
      <div class="card-actions">
        <button class="btn min-h-0 h-10 border-none capitalize text-slate-200 bg-blue-700
         hover:bg-blue-800 outline-none font-medium rounded-2xl dark:bg-blue-600 dark:hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>`;
    phonesContainer.appendChild(phoneCard);
  });
  toggleLoadingSpinner(false);
};

//Search

const searchButton = () => {
  const searchInputText = searchField.value;
  // searchField.value = "";
  toggleLoadingSpinner(true);
  loadPhone(searchInputText);
};
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
  searchButton();
});

const searchField = document.getElementById("search-field");
searchField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchButton();
  }
});

const searchLink = (searchlinkvalue) => {
  const searchValue = searchlinkvalue;
  const searchField = document.getElementById("search-field");
  searchField.value = searchValue;
  loadPhone(searchValue);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

const colorCheckbox = document.getElementById("colorCheckbox");
const html = document.getElementsByTagName("html")[0];
colorCheckbox.addEventListener("change", function () {
  html.classList.toggle("dark");
});

const loadMoreBtn = document.getElementById("loadmore-btn");
loadMoreBtn.addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const returnValue = searchField.value;
  loadPhone(returnValue, true);
  searchField.value = "";
});

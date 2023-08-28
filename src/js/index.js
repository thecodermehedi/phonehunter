const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";
  const loadmoreContainer = document.getElementById("load-more-container");
  if (phones.length > 12) {
    loadmoreContainer.classList.remove("hidden");
  } else {
    loadmoreContainer.classList.add("hidden");
  }
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card max-w-[240px] max-h-[424px] bg-gray-200 shadow-xl`;
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
      <img src="${phone.image}" alt="Phones" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>${phone.brand}</p>
      <div class="card-actions">
        <button class="btn min-h-0 h-10 bg-gray-200 border border-solid border-blue-500 hover:bg-blue-600 capitalize text-blue-500 hover:text-white transition duration-100 ease-in hover:border hover:border-solid hover:border-blue-500">
          Add to Cart
        </button>
      </div>
    </div>`;
    phonesContainer.appendChild(phoneCard);
  });
  toggleLoadingSpinner(false);
};

//Search

function searchButton() {
  const searchInputText = searchField.value;
  searchField.value = "";
  toggleLoadingSpinner(true);
  loadPhone(searchInputText);
}

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

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if(isLoading){
  loadingSpinner.classList.remove("hidden");
  }
  else{
    loadingSpinner.classList.add("hidden");
  }
};

const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  // console.log(phones);
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card max-w-[240px] max-h-[424px] bg-gray-200 shadow-xl`;
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
      <img src="${phone.image}" alt="Phones" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title font-black">${phone.phone_name}</h2>
      <p class="font-normal">${phone.brand}</p>
      <div class="card-actions">
        <button class="btn btn-neutral min-h-0 h-10 capitalize" font-bold>
          Buy Now
        </button>
      </div>
    </div>`;
    phonesContainer.appendChild(phoneCard);
  });
};

//Search

document
  .getElementById("search-field-1")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      processSearch1();
    }
  });
document
  .getElementById("search-field-2")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      processSearch2();
    }
  });

const processSearch1 = () => {
  const searchField = document.getElementById("search-field-1");
  const searchText = searchField.value;
  loadPhone(searchText);
};
const processSearch2 = () => {
  const searchField = document.getElementById("search-field-2");
  const searchText = searchField.value;
  loadPhone(searchText);
};

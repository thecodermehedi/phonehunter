const fetchPhones = async (phoneName) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${phoneName}`
  );
  const data = await res.json();
  const phones = data.data;
  defaultPhones(phones);
};

const defaultPhones = (phones) => {
  const phonesContainer = document.getElementById("phones-container");
  phones = phones.slice(0, 4);
  phones.forEach((phones) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card max-w-[240px] max-h-[424px] bg-gray-200 dark:bg-gray-700 shadow-xl rounded-2xl`;
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
      <img src="${phones.image}" alt="Phones" class="rounded-2xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title dark:text-slate-200">${phones.phone_name}</h2>
      <p class="dark:text-slate-200">${phones.brand}</p>
      <div class="card-actions">
        <button onclick="showDetails('${phones.slug}')" class="btn min-h-0 h-10 border-none capitalize text-slate-200 bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-2xl dark:bg-blue-600 dark:hover:bg-blue-700">
          Show Details
        </button>
      </div>
    </div>`;
    phonesContainer.appendChild(phoneCard);
  });
};

fetchPhones("iphone");
fetchPhones("samsung");
fetchPhones("huawei");
fetchPhones("oppo");

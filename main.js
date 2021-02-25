// const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const ClearBtn = document.getElementById("clear");
const msgSpan = document.getElementById("message");
const phyno = document.getElementById("phyno");
const don_jazzy = document.getElementById("don_jazzy");
const chike = document.getElementById("chike");
const flavour = document.getElementById("flavour");

const submitChoice = (e) => {
  e.preventDefault();

  fArt1 = phyno.checked ? phyno.value : null;
  fArt2 = don_jazzy.checked ? don_jazzy.value : null;
  fArt3 = chike.checked ? chike.value : null;
  fArt4 = flavour.checked ? flavour.value : null;
  let artists = new Array(fArt1, fArt2, fArt3, fArt4);
  filteredArtists = artists.filter((artist) => {
    return artist != null;
  });
  localStorage.setItem("yourFavs", JSON.stringify(filteredArtists));
  loadFavs();
  location.reload();
};

const loadFavs = () => {
  if (localStorage.yourFavs) {
    const favourites = JSON.parse(localStorage.getItem("yourFavs"));
    console.log(favourites);
    favourites.map((artist) => {
      var li = document.createElement("li");
      li.textContent = artist;
      ul.appendChild(li);
    });
  } else {
    h5 = document.createElement("h5");
    msgSpan.appendChild(h5).innerText =
      "you have not selected any favourites, please choose one";
  }
};

const clearStore = () => {
  localStorage.clear();
};

window.onload = () => {
  loadFavs();
};

button.addEventListener("click", submitChoice);
ClearBtn.addEventListener("click", clearStore);

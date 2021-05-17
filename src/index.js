console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const imgContainer = document.getElementById("dog-image-container");

const dogList = document.getElementById("dog-breeds");

const breedUrl = "https://dog.ceo/api/breeds/list/all";

const breedFilter = document.getElementById("breed-dropdown");
console.log(breedFilter);

fetch(imgUrl)
  .then((res) => res.json())
  .then((data) => {
    const photos = data.message;
    photos.forEach((img) => {
      imgContainer.innerHTML += `<img src="${img}"/>`;
    });
  });

fetch(breedUrl)
  .then((res) => res.json())
  .then((data) => {
    const breedName = Object.keys(data.message);
    breedName.forEach((breed) => {
      dogList.innerHTML += `<li>${breed}</li>`;
    });
  });

dogList.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.style.color = "blue";
  }
});

breedFilter.addEventListener("change", (e) => {
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      const breedLetter = Object.keys(data.message);
      const filtrdDog = breedLetter.filter((breed) => {
        return breed.startsWith(e.target.value);
      });
      dogList.innerHTML = "";
      filtrdDog.forEach((letter) => {
        dogList.innerHTML += `<li>${letter}</li>`;
      });
    });
});

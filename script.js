const dogImage = document.querySelector('.dog__image');
const reloadBtn = document.querySelector('.dog__reload-btn');
const dropdown = document.querySelector('.dog__form__dropdown');
const dogBreedBtn = document.querySelector('.dog__breed-btn');

const state = {
  breeds: '',
}

const getDogBreedList = async function() {
  try {
    const request = fetch('https://dog.ceo/api/breeds/list/all');
    const res = await request;
    const data = await res.json();

    state.breeds = Object.keys(data.message)

    renderBreedOptions(state.breeds)
    
  } catch (error) {
    console.error(error)
    alert('Sorry, please try again.')
  }
}

const getDogBreedPhoto = async function(breed) {
  try {
    const request = fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const res = await request;
    const data = await res.json();

    // Get random image based on the number of photos per breed.  Data.message.length
    dogImage.src = data.message[Math.floor(Math.random() * data.message.length)]

  } catch (error) {
    console.error(error)
    alert('Sorry, please try again.')
  }
};

// Loop over each breed and insert to dropdown menu
const renderBreedOptions = function(data) {
  data.forEach(dog => {
    dropdown.insertAdjacentHTML('beforeend', `<option value ="${dog}">${dog}</option>`)
  })
};

// Helper function
const helpGetDogBreedPhoto = function(e) {
  e.preventDefault()
  const breed = dropdown.value;
  if (!breed) return;
  
  getDogBreedPhoto(breed)
}

dogBreedBtn.addEventListener('click', helpGetDogBreedPhoto) // Get dog breed photo
reloadBtn.addEventListener('click', helpGetDogBreedPhoto) // Added for styling only

const init = function() {
  getDogBreedList();
};

init();

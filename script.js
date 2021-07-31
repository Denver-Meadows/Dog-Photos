const dogImage = document.querySelector('.dog__image');
const reloadBtn = document.querySelector('.dog__reload-btn');
const dropdown = document.querySelector('.dog__form__dropdown');

const state = {
  breeds: '',
}

const getDogBreedList = async function() {
  try {
    const request = fetch('https://dog.ceo/api/breeds/list/all');
    const res = await request;
    const data = await res.json();

    console.log(data)
    state.breeds = Object.keys(data.message)
    console.log(state.breeds)

    // ** I need a function that will dynamically add the breeds to drop down
    // *** First i will just try to add anything into the drop down
    renderBreedOptions(state.breeds)
    
  } catch (error) {
    console.error(error)
  }
}

const getDogBreedPhoto = async function(breed) {
  try {

    const request = fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const res = await request;
    const data = await res.json();

    console.log(data)
    console.log(data.message)
    console.log(data.message.length)

    // Get random image based on the number of photos per breed
    dogImage.src = data.message[Math.floor(Math.random() * data.message.length)]

  } catch (error) {
    console.error(error)
  }
};





const renderBreedOptions = function(data) {

  data.forEach(dog => {
    dropdown.insertAdjacentHTML('beforeend', `<option value ="">${dog}</option>`)
  })
  
}

// Reload to pick a random photo of the current breed.
reloadBtn.addEventListener('click', () => location.reload())

const init = function() {
  getDogBreedList();
};

init();

// getDogBreedPhoto('corgi');
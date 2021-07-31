const dogImage = document.querySelector('.dog__image');
const reloadBtn = document.querySelector('.dog__reload-btn');

const state = {
  breeds: '',
}

const getDogBreedList = async function() {
  try {
    const request = fetch('https://dog.ceo/api/breeds/list/all');
    const res = await request;
    const data = await res.json();

    console.log(data)
    state.breeds = data.message
    console.log(state.breeds)
    console.log(Object.keys(state.breeds))
    
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



// Reload to pick a random photo of the current breed.
reloadBtn.addEventListener('click', () => location.reload())

const init = function() {
  getDogBreedList();
};

init();

// getDogBreedPhoto('corgi');
const dogImage = document.querySelector('.dog__image');
const reloadBtn = document.querySelector('.dog__reload-btn');

const getDogBreedList = async function() {
  try {

    const request = fetch('https://dog.ceo/api/breeds/list/all');
    const res = await request;
    const data = await res.json();

    console.log(data)
    console.log(data.message)
    
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

    dogImage.src = data.message[Math.floor(Math.random() * data.message.length)]

  } catch (error) {
    console.error(error)
  }
}

reloadBtn.addEventListener('click', () => location.reload())

getDogBreedList();
getDogBreedPhoto('corgi');
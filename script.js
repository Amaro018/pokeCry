async function fetchData(){
try {
  const pokeName = document.getElementById("pokemonName").value.toLocaleLowerCase();

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

  if (!response.ok){
    console.log("cant fetch data");
  }
  else{
    const data = await response.json();
    const pokeSprite = data.sprites.front_shiny;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokeSprite;
    imgElement.style.display = "block";

    const pokeCry = data.cries.latest;
    const audioElement = document.getElementById("pokeCry");
    audioElement.src = pokeCry;
    
    console.log(pokeCry)

    console.log(data);
  }


  
} catch (error) {
  console.error(error);
}
}

fetchData();
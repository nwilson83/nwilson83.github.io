let charcters_list = document.getElementById('charcters')
let img;

fetch('https://rickandmortyapi.com/api/character/')
    .then(result => {
           //console.log(result.json());
           return result.json();
       })
       .then(json => {
           //console.log(json)
           let chars = json.results;
           chars.forEach(val => cardify(val))
        })
        
function cardify(data) {
   //Data sholds data scaffold below
   //{
   //    name: string
   //    status: string
   //    species: string
   //    type: string
   //    gender: string     ////api holds more data such as location and images, but lets get this done first!
   //}
   let div = document.createElement("div");
   let name = document.createElement('h1');
   let status = document.createElement('h2');
   let species = document.createElement('h3');
   let type = document.createElement('h3');
   let gender = document.createElement('h3');
   let img = document.createElement('img');
   //TODO: add data to each element and add classes for styling
   name.innerHTML = data['name'];
   status.innerHTML = data['status'];
   species.innerHTML = data['species'];
   type.innerHTML = data['type'];
   gender.innerHTML = data['gender'];
  

   div.classList.add("char");

   div.appendChild(name);
   div.appendChild(status);
   div.appendChild(species);
   div.appendChild(type);
   div.appendChild(gender);
   console.log(div);

   document.getElementById('characters').appendChild(div);
}

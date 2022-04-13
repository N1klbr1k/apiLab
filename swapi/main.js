//const axios = require('axios');

const getResBtn = document.querySelector('button');

const swapiCall = (evt) => {

    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((res) =>{
        //console.log(res.data.results[0].residents)
        for(let i = 0; i < res.data.results[0].residents.length; i++){
               // console.log(res.data.results[0].residents[i]);
               axios.get(`${res.data.results[0].residents[i]}`)
               .then((res) => {
                  const newRes = document.createElement('h2');
                  newRes.textContent =res.data.name;
                  document.body.appendChild(newRes);
               })
        }
    } )
}

getResBtn.addEventListener('click', swapiCall)

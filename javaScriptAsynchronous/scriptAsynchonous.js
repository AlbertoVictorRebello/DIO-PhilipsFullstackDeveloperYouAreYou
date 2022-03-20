const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const getCatBtn = document.getElementById('get-cat');
const imgCat = document.getElementById('img-cat');


//imgCat.src = "https://thatcopy.github.io/catAPI/imgs/webp/8636ed3.webp";


const loading = async () => {
    const data = await fetch(BASE_URL);    
    const json = await data.json();

    
    imgCat.src = json.webpurl;     
    //imgCat.src = await (await fetch(BASE_URL)).json().webpurl;
};

imgCat.addEventListener('click', loading);
this.addEventListener('load', loading);

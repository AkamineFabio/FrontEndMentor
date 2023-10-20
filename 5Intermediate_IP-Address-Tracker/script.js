
const form = document.querySelector('#form');
const input = document.querySelector('#form__input');

const infoIP = document.querySelector('#IP__info-ip');
const infoLocal = document.querySelector('#IP__info-local');
const infoTimezone = document.querySelector('#IP__info-timezone');
const infoProvider = document.querySelector('#IP__info-provider');

let requestInfo = '';
/* meu IP 201.81.8.209 */

let map = L.map('map').setView([51.505, -0.09], 13);
let marker = L.marker([51.5, -0.09]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    try {
        if (!input.value === '') {
            if (input.value.match(/[a-zA-Z]/g)) {
                console.log('The string contains letter(s).');
                return;
            }
        }
        const config = { params: { q: input.value } };
        const res = await axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_Ucox1g5s2EBf6UgQdqBdUxfjMDbam&ipAddress=', config);
        console.log(res.data);
        requestInfo = res.data;
        showInfo(requestInfo);
        generateMap(requestInfo.location.lat, requestInfo.location.lng);
    }
    catch (e) {

    }
});


const showInfo = (param) => {
    infoIP.innerText = `${param.ip}`;
    infoLocal.innerText = `${param.location.country} , ${param.location.region}`;
    infoTimezone.innerText = `UTC ${param.location.timezone}`;
    infoProvider.innerText = `${param.isp}`;
}

const generateMap = (lat, long) => {
    let map = L.map('map').setView([lat, long], 13);
    let marker = L.marker([lat, long]).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
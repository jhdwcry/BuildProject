const buildItem = document.querySelectorAll('.build');
const buildValue = document.querySelector('#build-number');
const stageValue = document.querySelector('#stage-value');
const flatValue = document.querySelector('#flat-value');
const buildLink = document.querySelectorAll('.build-link')
const buildDescription = document.querySelector('.build-info_description')


buildItem.forEach(item => {
    item.addEventListener('mouseover', function() {
        const dataBuildNumber = item.getAttribute('data-build-number');
        buildValue.innerHTML = dataBuildNumber

        const dataStageNumber = item.getAttribute('data-stage-number');
        stageValue.innerHTML = dataStageNumber

        const dataFlatNumber = item.getAttribute('data-flat-number');
        flatValue.innerHTML = dataFlatNumber

        const dataBuildDescription = item.getAttribute('data-description');
        buildDescription.innerHTML = dataBuildDescription
    })
})


buildLink.forEach(link => {
    link.addEventListener('click', function(event) {

        if (link.classList.contains('sold')) {
            event.preventDefault();
            alert('Будинок продано')
        } else {
            null
        }

    })

})


const stageItem = document.querySelectorAll('.stage');
const floorsValue = document.querySelector('#floors-value');
const allFlats = document.querySelector('#all-value');
const freeFlats = document.querySelector('#free-value');
const boockingFlats = document.querySelector('#booking-value');
const flatsAction = document.querySelector('#action-value');
const flatsSold = document.querySelector('#sold-value');

stageItem.forEach(item => {
    item.addEventListener('mouseover', function() {
        const dataFloorsNumber = item.getAttribute('data-floors-number')
        const dataAllFlatsNumber = item.getAttribute('data-all-flats-number')
        const dataFreeFlatsNumber = item.getAttribute('data-free-flats-number')
        const dataBoockingFlatsNumber = item.getAttribute('data-boocking-flats-number')
        const dataActionFlatsNumber = item.getAttribute('data-action-flats-number')
        const dataSoldFlatsNumber = item.getAttribute('data-sold-flats-number')

        floorsValue.innerHTML = dataFloorsNumber
        allFlats.innerHTML = dataAllFlatsNumber
        freeFlats.innerHTML = dataFreeFlatsNumber
        boockingFlats.innerHTML = dataBoockingFlatsNumber
        flatsAction.innerHTML = dataActionFlatsNumber
        flatsSold.innerHTML = dataSoldFlatsNumber
    })
})

const flat = document.querySelectorAll('.flat');

flat.forEach(item => {
    if (item.classList.contains('booking')) {
        item.querySelector('.status-text').innerHTML = "Бронь";
    } else if (item.classList.contains('sold')) {
        item.querySelector('.status-text').innerHTML = "Продано";
    } else if (item.classList.contains('action')) {
        item.querySelector('.status-text').innerHTML = "Акція";
    } else {
        item.querySelector('.status-text').innerHTML = "Вільна";
    }
})

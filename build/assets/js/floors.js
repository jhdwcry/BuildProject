const flatArray = [{
        id: "1",
        house: "1",
        floor: "5",
        rooms: "3",
        square: "82 м.кв",
        price: "900$",
        priceTotal: "70000$",
        flatNumber: 35,
        status: "booking",
        description: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
        }]
    },
    {
        id: "2",
        house: "1",
        floor: "5",
        rooms: "2",
        square: "60 м.кв",
        price: "900$",
        priceTotal: "5000$",
        flatNumber: 36,
        status: "sold",
        description: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
        }]
    },
    {
        id: "3",
        house: "1",
        floor: "5",
        rooms: "3",
        square: "82 м.кв",
        price: "900$",
        priceTotal: "70000$",
        flatNumber: 37,
        status: "action",
        description: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
        }]
    },
    {
        id: "4",
        house: "1",
        floor: "5",
        rooms: "2",
        square: "60 м.кв",
        price: "900$",
        priceTotal: "50000$",
        flatNumber: 38,
        status: "sold",
        description: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
        }]
    },
    {
        id: "5",
        house: "1",
        floor: "5",
        rooms: "3",
        square: "79 м.кв",
        price: "900$",
        priceTotal: "70000$",
        flatNumber: 39,
        status: "sold",
        description: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
        }]
    },
    {
        id: "6",
        house: "1",
        floor: "5",
        rooms: "1",
        square: "39 м.кв",
        price: "900$",
        priceTotal: "40000$",
        flatNumber: 40,
        status: "booking",
        description: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
        }]
    },
    {
        id: "7",
        house: "1",
        floor: "5",
        rooms: "1",
        square: "42 м.кв",
        price: "900$",
        priceTotal: "40000$",
        flatNumber: 41,
        status: "free",
        description: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
        }]
    },
    {
        id: "8",
        house: "1",
        floor: "5",
        rooms: "1",
        square: "39 м.кв",
        price: "900$",
        priceTotal: "30000$",
        flatNumber: 42,
        status: "free",
        description: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
        }]
    },
    {
        id: "9",
        house: "1",
        floor: "5",
        rooms: "3",
        square: "79 м.кв",
        price: "900$",
        priceTotal: "70500$",
        flatNumber: 43,
        status: "booking",
        description: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
        }]
    }
]

window.addEventListener('load', function() {
    document.querySelector('.floor-plan-page') ? installFloorPlan() : console.log('1')

    function installFloorPlan() {
        const flatInfo = document.querySelector('#flat-info')
        const flatGroup = document.querySelectorAll('.flat')

        function removeActive() {
            flatGroup.forEach(active => {
                active.classList.remove('active')
            })
        }

        flatGroup.forEach(flat => {
            flat.addEventListener('click', () => {
                removeActive()
                flat.classList.add('active')

                let thisFlat = flat.getAttribute('data-number');


                let flatNumber = flatArray.filter(obj => obj.id.toString() === thisFlat);
                renderInfo(flatNumber)
            })
        })

        const flatObj = [{
            id: "1",
            house: "1",
            floor: "5",
            rooms: "3",
            square: "82 м.кв",
            price: "900$",
            priceTotal: "70000$",
            flatNumber: 35,
            status: "booking",
            description: [{
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam",
            }]
        }]

        const renderInfo = (flatInfoTemplate) => {
            const flatInformation = flatInfoTemplate.map(item => {
                return (`
                <div class="flat-item flat-info__house">
                    Номер будинку : <b id="house-number">${item.house}</b>
                </div>
                <div class="flat-item flat-item--floor">
                   Поверх: <b id="floor-number">${item.floor}</b>  
                </div>
                <div class="flat-item flat-item--rooms">
                Кількість кімнат: <b id="rooms-quantity">${item.rooms}</b>
                </div>
                <div class="flat-item flat-item--square">
                Площа квартири: <b id="flat-square">${item.square}</b> 
                </div>
                <div class="flat-item flat-item--price">
                Ціна за м.кв: <b id="price-meter">${item.price}</b>
                </div>
                <div class="flat-item flat-item--price-total">
                Ціна за квартиру: <b id="price-total">${item.priceTotal}</b>
                </div>
                <div class="flat-item flat-item--number">
                Квартира <b id="flat-number">${item.flatNumber}</b>
                </div>
                <div class="flat-item flat-item--status">
                    Статус: <b id="flat-status">${item.status}</b>
                </div> 
            `)
            }).join('')

            flatInfo.innerHTML = flatInformation
        }

        renderInfo(flatObj)
    }
})
let sampleArray = [{
    "id": 1,
    "details": [
        {
            "productId": 17,
            "unitPrice": 10,
            "quantity": 10,
            "discount": 0
        },
        {
            "productId": 46,
            "unitPrice": 1,
            "quantity": 5,
            "discount": 0
        }
    ]
},
{
    "id": 2,
    "details": [
        {
            "productId": 17,
            "unitPrice": 1,
            "quantity": 2,
            "discount": 0
        },
        {
            "productId": 46,
            "unitPrice": 1,
            "quantity": 2,
            "discount": 0
        }
    ]
},
{
    "id": 3,
    "details": [
        {
            "productId": 17,
            "unitPrice": 1,
            "quantity": 2,
            "discount": 0
        },
        {
            "productId": 46,
            "unitPrice": 4,
            "quantity": 2,
            "discount": 0
        }
    ]
},

]
let toplamA = 0
let toplamB = 0
sampleArray.sort((a, b) => {
    toplamA = 0
    toplamB = 0
    a.details.forEach(x => {
        toplamA = toplamA + x.unitPrice * x.quantity
    })
    b.details.forEach(x => {
        toplamB = toplamB + x.unitPrice * x.quantity
    })
    if (toplamA > toplamB) {
        return 1
    }
    else {
        return -1
    }

})
console.log(deneme)
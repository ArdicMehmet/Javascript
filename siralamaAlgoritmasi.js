
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
let toplamA;
let toplamB;
let takas;
for(i=0;i<sampleArray.length;i++){
    toplamA = 0
    toplamB = 0
    sampleArray[i].details.forEach(x => {
    toplamA += x.quantity * x.unitPrice
    })
    for(j=i+1;j<sampleArray.length;j++){
        
        sampleArray[j].details.forEach(x => {
            toplamB += x.quantity * x.unitPrice
        })
        if(toplamA<toplamB){
            takas= sampleArray[i]
            sampleArray[i] = sampleArray[j]
            sampleArray[j]=takas
            toplamA=toplamB
        }
    }
}

sampleArray.forEach(x=>{
    console.log(x)
})
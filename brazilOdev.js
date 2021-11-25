samples =[{ 
    id:1,
    country : "Brazil",
    details:[{
        quantity:3,
        unitPrice:7
    },
    {
        quantity:4,
        unitPrice:8
    }]
    },
    { 
        id:2,
        country : "France",
        details:[{
            quantity:1,
            unitPrice:4
        },
        {
            quantity:41,
            unitPrice:18
        }]
    }

]
let returnArray = samples.filter(x => x.shipAddress?.country === 'Brazil')
console.log("Brezilya siparis sayisi : " + returnArray.length)
let toplamSiparistutari = 0
let enyuksekSiparistutari = 0
let enyuksekSiparis = []
returnArray.forEach( x => {
  x.details.forEach(y => {
    toplamSiparistutari = toplamSiparistutari + y.quantity * y.unitPrice
    if (y.quantity * y.unitPrice > enyuksekSiparistutari) {
        enyuksekSiparistutari = y.quantity * y.unitPrice
        enyuksekSiparis = x // direk = x denilebilirdi
    }
  })

})
console.log("Toplam Alışveriş Tutarı : " + toplamSiparistutari)
console.log(enyuksekSiparis)
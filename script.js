document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav').classList.add('active');
});


var data = [
    {
      img: "https://themangobasket.com/wp-content/uploads/2020/12/Rina-Shah.png",
      name: "Rina Shah",
      city: "Delhi",
      description: "I ordered mangoes from Mango Basket for my family and they loved it. It is very fresh, healthy and delicious.",
      comma: "https://themangobasket.com/wp-content/themes/storefront-child/assets/images/quate.png"
    },
    {
      img: "https://themangobasket.com/wp-content/uploads/2021/01/jaydeep-bagul.png",
      name: "Jaydeep Bagul",
      city: "Pune",
      description: "The quality and freshness were not compromised in any way. It is one of the best batches of mangoes I have had in a while. Thank you team Mango Basket",
      comma: "https://themangobasket.com/wp-content/themes/storefront-child/assets/images/quate.png"
    },
    {
      img: "https://themangobasket.com/wp-content/uploads/2021/01/meenakshi-kharat.png",
      name: "Meenakshi Kharat",
      city: "Ratnagiri",
      description: "I ordered a few dozens of alphonso mangoes. I am a health-conscious person so I always prefer eating residue-free fruits. I found their mangoes to be healthy as well as delicious. I would definitely order more from them.",
      comma: "https://themangobasket.com/wp-content/themes/storefront-child/assets/images/quate.png"
    }
  ];
 var clutter = "";
 data.forEach(function(elem){
clutter += ` <div class="card">
        <div class="description">
            <img src="${elem.img}" alt="">

           <div id="text">
            <h1>${elem.name}</h1>
            <h3>${elem.city}</h3>
           </div>

            </div>
            <div class="inner">
                
                <p>${elem.description}</p>
            
            </div>
          
        </div>`
     document.querySelector("#page4").innerHTML = clutter
 })

 




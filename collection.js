// collection page

const data=[
    {
        Id:1,
        name: "Shirt Party Red",
        img: "./Images/shirt img 10.jpg",
        amt:579,
        color: "Red",
        catagory:"party",
        arrival: "new",
    },
    {
        Id:2,
        name: "Floral Summer Shirt",
        img: "./Images/shirt img 9.jpg",
        amt:399,
        color: "White",
        catagory:"beach",
        arrival: "new",
    },
    {
        Id:3,
        name: "Party Floral Shirt",
        img: "./Images/shirt img 8.jpg",
        amt:399,
        color: "Red",
        catagory:"party",
        arrival: "old",
    },
    {
        Id:4,
        name: "Summer Green Shirt",
        img: "./Images/shirt img 7.jpg",
        amt:249,
        color: "Green",
        catagory:"beach",
        arrival: "new",
    },
    {
        Id:5,
        name: "Party Casual Shirt",
        img: "./Images/shirt img 6.jpg",
        amt:349,
        color: "White",
        catagory:"summer",
        arrival: "new",
    },
    {
        Id:6,
        name: "Floral Summer Shirt",
        img: "./Images/shirt img 5.jpg",
        amt:249,
        color: "Blue",
        catagory:"beach",
        arrival: "old",
    },
    {
        Id:7,
        name: "Double pocket Shirt",
        img: "./Images/shirt img 4.jpg",
        amt:1149,
        color: "White",
        catagory:"summer",
        arrival: "new",
    },
    {
        Id:8,
        name: "Plain Formal Shirt",
        img: "./Images/shirt img 3.jpg",
        amt:849,
        color: "Blue",
        catagory:"summer",
        arrival: "new",
    },
    {
        Id:9,
        name: "Plain Formal Shirt",
        img: "./Images/shirt img 2.jpg",
        amt:349,
        color: "Blue",
        catagory:"summer",
        arrival: "new",
    },
]

const productscontainer = document.querySelector(".products")
const categorylist = document.querySelector(".categorylist")
const categorylist2 = document.querySelector(".categorylist2")
const categorylist3 = document.querySelector(".categorylist3")

function displayproducts(products){
    const product_details = products
    .map(
        (product)=>`
    <div class="product">
                    <div class="img"><img src="${product.img}" alt="${product.name}"></div>
                    <div class="product-details">
                        <span class="name">${product.name}</span>
                        <span class="amt">₹${product.amt}</span>
                    </div>
                </div>`
).join("");

productscontainer.innerHTML = (product_details);
}

function setcategories(){
    const allcategories = data.map((product)=> product.catagory);
    // console.log(allcategories);
    const catagories = [
        "All",
        ...allcategories.filter((product, index) => {
            return allcategories.indexOf(product) === index;
        }),
    ];
    // console.log(catagories);

    categorylist.innerHTML=catagories.map((catagory)=> `<p>${catagory}</p>`).join("");

    categorylist.addEventListener("click", (e) => {
        const selectedcatagory = e.target.innerHTML

        selectedcatagory==="All"?displayproducts(data):displayproducts(data.filter((product)=>product.catagory==selectedcatagory));
    });
    
}

function setcolors(){
    const allcolors = data.map((product)=> product.color);
    const colors = [
        // "All",
        ...allcolors.filter((product, index) => {
            return allcolors.indexOf(product) === index;
        }),
    ];

    categorylist2.innerHTML=colors.map((color)=> `<p>${color}</p>`).join("");

    categorylist2.addEventListener("click", (e) => {
        const selectedcolor = e.target.innerHTML

        selectedcolor==="All"?displayproducts(data):displayproducts(data.filter((product)=>product.color==selectedcolor));
    });
    
}

function setarrivals(){
    const allarrivals = data.map((product)=> product.arrival);
    const arrivals = [
        // "All",
        ...allarrivals.filter((product, index) => {
            return allarrivals.indexOf(product) === index;
        }),
    ];

    categorylist3.innerHTML=arrivals.map((arrival)=> `<p>${arrival}</p>`).join("");

    categorylist3.addEventListener("click", (e) => {
        const selectedarrivals = e.target.innerHTML

        selectedarrivals==="All"?displayproducts(data):displayproducts(data.filter((product)=>product.arrival==selectedarrivals));
    });
    
}

displayproducts(data);
setcategories();
setcolors();
setarrivals();


// selecting side navbar
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=-0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})
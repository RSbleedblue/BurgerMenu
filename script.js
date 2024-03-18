const burgerContainer = document.querySelector(".burger-container");
const friesContainer = document.querySelector(".fries-container"); 
const drinksContainer = document.querySelector(".drinks-container"); 
const cartItem = document.getElementById("cart");
const orders = document.getElementById("orderSize");
const checkoutMenu = document.getElementById("checkoutMenu");
const toast = document.getElementById('toast-success');
const confirmOrder = document.getElementById('confirmOrder');
const toastMessage = document.getElementById('toastMessage');
const orderData = [];

function populateData(item, container) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "w-[20%] h-[80%] m-2 flex flex-col items-center bg-rose-50 rounded-xl gap-4";

    const imgWrapper = document.createElement("div"); 
    imgWrapper.className = "w-12 h-12 rounded-full bg-rose-900 flex items-center justify-center"; 

    const img = document.createElement("img");
    img.src = item.img;
    img.className = 'w-14 h-14 rounded-full object-cover'; 
    imgWrapper.appendChild(img); 
    itemDiv.appendChild(imgWrapper); 

    const name = document.createElement("h1");
    name.className = "text-xl font-semibold text-gray-600";
    name.textContent = item.name; 
    itemDiv.appendChild(name);

    const priceContainer = document.createElement("div");
    priceContainer.className = "flex gap-2 items-center w-[50%] justify-between";

    const price = document.createElement("h1");
    price.className = "text-xl font-semibold text-green-400";
    price.textContent = "$" + item.price; 
    priceContainer.appendChild(price);

    const type = document.createElement("h2");
    type.className = "text-l font-semibold text-gray-600";
    type.textContent = item.type; 
    priceContainer.appendChild(type);
    
    itemDiv.appendChild(priceContainer);

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'flex gap-2 items-center w-[70%] justify-between';

    const orderButton = document.createElement("button");
    orderButton.type = "button";
    orderButton.className = "w-24 text-black bg-rose-200  hover:bg-rose-300 hover:text-white rounded-lg hover:shadow-xl rounded-xl";
    orderButton.textContent = "Order";
    orderButton.addEventListener('click',function(){
        addtoCart(item);
    })
    buttonDiv.appendChild(orderButton);
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "w-24 text-black bg-gray-200 hover:bg-gray-100 hover:text-black rounded-lg hover:shadow-xl rounded-xl";
    cancelButton.textContent = "Cancel";
    buttonDiv.appendChild(cancelButton);

    itemDiv.appendChild(buttonDiv);

    container.appendChild(itemDiv);
}
function populateOrderData(){
    const table = document.getElementById("tableData");
    orderData.forEach(orderItem=>{
        const row =  document.createElement("tr");
        row.className = "bg-white dark:bg-rose-800";
        const name = document.createElement("th");
        name.className = "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";
        name.textContent = orderItem.name;
        row.appendChild(name);

        const type = document.createElement("th");
        type.className = "px-6 py-4 text-white ";
        type.textContent = orderItem.type;
        row.appendChild(type);

        const price = document.createElement("th");
        price.className = "px-6 py-4 text-white";
        price.textContent = "$"+orderItem.price;
        row.appendChild(price);
        
        table.appendChild(row);
    })
}
function addtoCart(item){
    orderData.push(item);
    populateOrderData();
    toggleSize();
    console.log(orderData);
}
burger.forEach(burgerItem => {
    populateData(burgerItem, burgerContainer);
});
fries.forEach(friesItem => {
    populateData(friesItem, friesContainer);
});
drinks.forEach(drinkItem => {
    populateData(drinkItem, drinksContainer);
});
function toggleSize() {
    const orderSize = orderData.length;
    orders.textContent = orderSize.toString();
    if (orderSize > 0) {
        orders.style.display = "block";
        showToast();  
    } else {
        orders.style.display = "none"; 
    }
}
function turnOffToast(){
    toast.style.display='none';
}
function showToast() {
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000); 
}
function hideAside(){
    checkoutMenu.style.display = 'none';
}
function openAside(){
    checkoutMenu.style.display = 'block';
}

cartItem.addEventListener('click', function() {
    openAside();
})
confirmOrder.addEventListener('click', function(){
    showToast();
    hideAside();
})

hideAside();
toggleSize();
turnOffToast();



// ======== SETTINGS ========

const WHATSAPP_NUMBER = "923001234567"; // اپنا نمبر ڈالیں

const DELIVERY_CHARGES = {
  pickup: 0,
  peshawar: 150,
  kpk: 250,
  other: 400
};

const PICKUP_ADDRESS = "Your Pickup Address Here";

// ======== PRODUCTS ========

const PRODUCTS = [
  {
    id:1,
    title:"Product 1",
    description:"High quality product",
    price:1500,
    image:"https://via.placeholder.com/300"
  },
  {
    id:2,
    title:"Product 2",
    description:"Best selling item",
    price:2200,
    image:"https://via.placeholder.com/300"
  }
];

// ======== LOGIC ========

let cart = {};

const container = document.getElementById("productContainer");

function displayProducts(list){
  container.innerHTML="";
  list.forEach(product=>{
    container.innerHTML += `
    <div class="card">
      <img src="${product.image}">
      <h4>${product.title}</h4>
      <p>${product.description}</p>
      <p><b>Rs ${product.price}</b></p>
      <div class="qty">
        <button onclick="decrease(${product.id})">-</button>
        <span id="qty-${product.id}">0</span>
        <button onclick="increase(${product.id})">+</button>
      </div>
    </div>
    `;
  });
}

displayProducts(PRODUCTS);

function increase(id){
  cart[id]=(cart[id]||0)+1;
  document.getElementById(`qty-${id}`).innerText=cart[id];
}

function decrease(id){
  if(cart[id]>0){
    cart[id]--;
    document.getElementById(`qty-${id}`).innerText=cart[id];
  }
}

document.getElementById("search").addEventListener("input",function(){
  const value=this.value.toLowerCase();
  const filtered=PRODUCTS.filter(p=>p.title.toLowerCase().includes(value));
  displayProducts(filtered);
});

function openCart(){
  document.getElementById("popup").style.display="flex";
  calculateTotal();
}

function closeCart(){
  document.getElementById("popup").style.display="none";
}

function calculateTotal(){
  let total=0;
  for(let id in cart){
    const product=PRODUCTS.find(p=>p.id==id);
    total+=product.price*cart[id];
  }
  const delivery=document.getElementById("delivery").value;
  total+=DELIVERY_CHARGES[delivery];
  document.getElementById("totalAmount").innerText="Total: Rs "+total;
}

document.getElementById("delivery").addEventListener("change",calculateTotal);

function sendOrder(){
  let message="New Order:%0A";
  for(let id in cart){
    if(cart[id]>0){
      const product=PRODUCTS.find(p=>p.id==id);
      message+=product.title+" x "+cart[id]+"%0A";
    }
  }

  const name=document.getElementById("name").value;
  const phone=document.getElementById("phone").value;
  const email=document.getElementById("email").value;
  const delivery=document.getElementById("delivery").value;

  message+="%0AName: "+name;
  message+="%0APhone: "+phone;
  message+="%0AEmail: "+email;
  message+="%0ADelivery: "+delivery;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,"_blank");
}
import myJson from "./Items.json" assert { type: "json" };
let body = document.body;
body.style.margin = "0";

class BCS{
  /**
   * @param {string} id
   * @param {string} name
   * @param {number} price
   * @param {number} quantity
   */

  constructor(id, name, price, stock){
      this.id = id;
      this.name = name;
      this.price = price;
      this.stock = stock;
  }
}
/**@type {BCS[]} */



function buildNavbar() {
  let container = document.createElement("div");
  container.className = "NavBar";

  let Leftcontainer = document.createElement("div");
  container.appendChild(Leftcontainer);
  let Rightcontainer = document.createElement("div");
  container.appendChild(Rightcontainer);

  let Logo = document.createElement("div");
  Logo.innerHTML="<img src='Logo.png'>";
  Leftcontainer.appendChild(Logo);

  let AddToCartButton = document.createElement("button");
  AddToCartButton.innerHTML = `<h1 style = "padding: 20px">SHOW CART</h1>`;
  AddToCartButton.className = "NavButton";
  AddToCartButton.addEventListener("click", () => {ShowCart();})
  Rightcontainer.appendChild(AddToCartButton);

  let CheckOutButton = document.createElement("button");
  CheckOutButton.innerHTML = `<h1 style = "padding: 20px">CHECK OUT</h1>`;
  CheckOutButton.className = "NavButton";
  CheckOutButton.addEventListener("click", () => {CheckOut();})
  Rightcontainer.appendChild(CheckOutButton);

  return container;
}

function buildHeader(){
  let container = document.createElement("div");
  
  let Background = document.createElement("div");
  Background.innerHTML = "<img src = 'Background.png' style = 'width: 99vw; box-sizing:border-box'>";
  container.appendChild(Background);
  
  return container;
}

function ShowCart(){
  if (cart!=0){
    for(let i=0; i<cart.length; i++)
    {
      alert("Name: " + cart[i].name +"\nQuantity: "+ cart[i].quantity)
    }
  }
  else{alert("Cart Empty");
  }
}

function CheckOut(){
  if(cart.length == 0){
      alert("Cart Empty");
  }
  let total = 0;
  
  cart.forEach((item) => {
      myJson.forEach((BCS) => {
          if(BCS.id == item.id){
              total += BCS.price * item.quantity;
          }
      })
  })
  alert("Tổng tiền là: " + total);
  cart = [];
}

let cart = [];

function addToCart(BCS){
  let index = cart.findIndex((item) => {
      return item.id == BCS.id;
  })

  if(index != -1){
      cart[index].quantity++;
      console.log(cart);
      return;
  }

  cart.push({
      id: BCS.id,
      name: BCS.name,
      quantity: 1
  })
  console.log(cart);
  return;
}

function buildBody() {
  let container = document.createElement("div");
  container.className = "subBody";
  return container;
}

function buildSidebar() {
  let container = document.createElement("div");
  container.className = "sideBar";

  let Header = document.createElement("div");
  Header.innerHTML = "<h1 style='color: #005baa;'>21 SẢN PHẨM</h1>";
  Header.style.textAlign = "center";
  container.appendChild(Header);

  let PackSize = document.createElement("div");
  PackSize.className = "PackSizeBar";
  container.appendChild(PackSize);

  let PackSizeHeader = document.createElement("div");
  PackSizeHeader.innerHTML=`<h2 style = "margin: 20px 80px;color:gray;">PACK SIZE</h2>`
  PackSize.appendChild(PackSizeHeader);

  let PackSizeButtonContainer = document.createElement("div");
  PackSizeButtonContainer.style.justifyContent="center";
  PackSizeButtonContainer.style.display="flex";
  PackSize.appendChild(PackSizeButtonContainer);

  let PackSizeArr = [3,10,12];

  for (let i = 0; i < PackSizeArr.length; i++) {
    let PackSizeButton = document.createElement("button");
    PackSizeButton.className="PackSizeButton";
    PackSizeButton.innerHTML = `<p>${PackSizeArr[i]}</p>`;
    PackSizeButtonContainer.appendChild(PackSizeButton);
  }
  container.appendChild(PackSize);

  let ListContainer = document.createElement("div");
  ListContainer.style.display="flex";
  ListContainer.style.justifyContent="center";
  ListContainer.style.margin="30px 0";
  ListContainer.innerHTML="<img src='List.png'>";
  container.appendChild(ListContainer);

  return container;
}

function buildItemsMenu() {
  let container = document.createElement("div");
  container.className = "cardMenu";

  for (let i = 0; i < myJson.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src= "${myJson[i].image}" style="margin: 30px 0; width: 370px;height: 370px;">
      <h1 style="margin: 0 0 4px 0; font-size: 30px; color: black;">${myJson[i].name}</h1>
      <h2 style="margin: 0 0 4px 0; font-size: 30px; color: black;">${myJson[i].price} đồng</h2>`;
    container.appendChild(card);
    
    let bcs= myJson[i];

    let AddToCartButton = document.createElement("button");
    AddToCartButton.className = "cardButton";
    AddToCartButton.innerHTML = `<h1 style = "padding: 20px;">ADD TO CART</h1>`;
    AddToCartButton.addEventListener("click", () => {
      addToCart(bcs);
    })
    card.appendChild(AddToCartButton);
  }
  return container;
}

function buildFooter(){
  let container = document.createElement("div");
  
  let Background = document.createElement("div");
  Background.innerHTML = "<img src = 'Footer.png' style = 'width: 99vw; box-sizing:border-box'>";
  container.appendChild(Background);
  
  return container;
}

let newNavBar = buildNavbar();
body.appendChild(newNavBar);
let newHeader = buildHeader();
body.appendChild(newHeader);
let newBody = buildBody();
body.appendChild(newBody);
let newSideBar = buildSidebar();
newBody.appendChild(newSideBar);
let newcontainer = buildItemsMenu();
newBody.appendChild(newcontainer);
let newFooter = buildFooter();
body.appendChild(newFooter);
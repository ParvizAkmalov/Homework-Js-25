import axios from "axios";

let products = []

const res = async () => {
  let arr = await axios.get("https://dummyjson.com/products")

  if (arr.status == 200 || arr.status == 201) {
    products = products.concat(arr.data.products)

  }
  createItemCard(products)
  console.log(products);
}
res()

function createItemCard(data) {
  for(let item of data){
    let conteiner = document.querySelector(".conteiner")
    let beauty = document.querySelector(".beauty")
    let beauty1 = document.querySelector(".beauty1")
    let fragrances = document.querySelector(".fragrances")
    let fragrances1 = document.querySelector(".fragrances1")
    let furniture = document.querySelector(".furniture")
    let furniture1 = document.querySelector(".furniture1")
    let groceries = document.querySelector(".groceries")
    let groceries1 = document.querySelector(".groceries1")

   let div = document.createElement("div")
   let img = document.createElement("img")
   let title = document.createElement("h1")
   let txt = document.createElement("p")
   let price = document.createElement("p")
   let cetegory = document.createElement("p")
   let brand = document.createElement("p")
   let heart = document.createElement("i")
   let btn = document.createElement("button")
   let btn11 = document.createElement("button")
   let btn2 = document.createElement("button")
   let div2 = document.createElement("div")

   heart.setAttribute("class", "bx bxs-heart")
   heart.classList.add("heartI")
   div.classList.add("item")
   txt.classList.add("txt")
   img.setAttribute("src", item.thumbnail)
   title.innerHTML = item.title
   txt.innerHTML = item.description
   txt.classList.add("description")
   cetegory.innerHTML = `Category: ${item.category}`
   cetegory.classList.add("category")
   brand.innerHTML = `Brand: ${item.brand}`
   brand.classList.add("brand")
   price.innerHTML = `${item.price} so'm`
   div.style.position = "relative"
   price.style.color = "#a6a6a6"
   price.style.marginTop = "15px"
   btn.innerHTML = "Savatga"
   btn11.innerHTML = "O'tish"
   btn.classList.add("Btn1")
   btn2.classList.add("Btn3")
   btn2.innerHTML = "+1"
   
   let skitka = `${item.rating / 100 * (item.price)} so'm`
   
   if (item.category == beauty1.innerHTML) {
     beauty.append(div)
    }else if (item.category == fragrances1.innerHTML) {
      fragrances.append(div)
    }else if (item.category == furniture1.innerHTML) {
      furniture.append(div)
    }else if(item.category == groceries1.innerHTML){
      groceries.append(div)
    }
    
    heart.onclick = () =>{
      heart.classList.toggle("color")
    }
    //  conteiner.append(div)
    div.append(img)
    div.append(title)
    div.append(txt)
    div.append(cetegory)
    div.append(brand)
    div.append(price)
    div.append(skitka)
    div.append(heart)
    div.append(btn)
    let bbttnn = document.querySelector(".PArviz")
    let bbttnn2 = document.querySelector(".PPPP")
    btn.onclick = () =>{
      btn11.classList.add("Btn2")
      div2.append(btn11)
      btn.style.display = "none"
      div2.append(btn2)
      div.append(div2)
      div2.style.display = "flex"
      div2.style.justifyContent = "space-between"
      div2.style.padding = "0 20px"

      bbttnn2.style.display = "block"
      bbttnn2.style.display = "flex"
      bbttnn2.innerHTML++
    }
    btn2.onclick = () =>{
      bbttnn2.innerHTML++
    }


  }
}
//store the products array in localstorage as "data"

let form=document.getElementById("product_form")

form.style.width="230px"
form.style.height="auto"
form.style.margin="auto"
form.style.border="3px solid pink"

let h2=document.getElementById("h2")

h2.style.color="pink"

h2.style.textAlign="center"


function data(b,n,p,i)
{
    this.Brand=b

    this.name=n
    this.price=p
    this.image=i
}

function sub(){
    let form=document.getElementById("product_form") 


    let Brand=form.product_brand.value;

    let name=form.product_name.value;

    let price=form.product_price.value;


let image=form.product_image.value;


let pro=new data(Brand,name,price,image)


var arr=JSON.parse(localStorage.getItem("data"))||[]


arr.push(pro)

localStorage.setItem("data",JSON.stringify(arr))

console.log(pro)


}


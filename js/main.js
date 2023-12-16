/* بسم الله الرحمن الرحيم
وان ليس للانسان الا ما سعي 
*/

//سيليكت الايلمنت 
var bookMarkName = document.getElementById("bookMarkName");
var SiteURL = document.getElementById("SiteURL");



//اراي فاضي عشان يشيل القيم بتاعت المنتجات 
var BookMarkArray = [];
if(localStorage.getItem("BookMarkArray") !=null){
    BookMarkArray=JSON.parse(localStorage.getItem("BookMarkArray"));
    displayProduct();
}
//فنكشن عشان لما ادوس علي زرار الادد
function addNewProduct() {
    if(validateSiteName()==true&&validateSiteUrl()==true){
        var bookMark = {
            name: bookMarkName.value,
            siteUrl: SiteURL.value,
        }
        BookMarkArray.push(bookMark);
        console.log(BookMarkArray);
        localStorage.setItem("BookMarkArray",JSON.stringify(BookMarkArray));
    
        clearValue();
        displayProduct();
    }
    else{
        alert("errorrr")
    }
   
   

}

//فنكشن لوحدها عشان تمسح الكلام من جوا الفورم 
function clearValue() {
    bookMarkName.value = "";
    SiteURL.value = "";

}

// فنكشن بتحط المنتجات اللي بتكتبها في جدول بتعرضها في الجدول كل لما تدوس ادد
function displayProduct() {

/*htmlدي كرتونة فاضية نشيل فيها القيم عشان الريبلاس بتاع ال*/ var kazna="";
//<td>${BookMarkArray[i].siteUrl}</td>
    for (var i = 0; i < BookMarkArray.length; i++) {
        kazna+=
        `<tr>
        <td>${i+1}</td>
        <td>${BookMarkArray[i].name}</td>
        <td><button onclick="link(${i})" type="button" class="btn btn-success">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
        Visit Site
        </button>
        </td>
        <td>
        <button onclick="deleteElement(${i})"type="button" class="btn btn-outline-danger"  >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
        </svg>
        Delete
        </button>
        </td>
        </tr>`
      

    }
    document.getElementById('tbody').innerHTML = kazna; 
    
}
//بتمسح العنصر 
function deleteElement(idx){
    BookMarkArray.splice(idx,1);
    displayProduct();
    localStorage.setItem("BookMarkArray",JSON.stringify(BookMarkArray));
}

function validateSiteName(){
    var regex=/^[A-Za-z]{3,15}$/;
    return regex.test(bookMarkName.value );
}

function validateSiteUrl(){
    var regex=/^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(SiteURL.value );
}
function link(i){

    window.open(BookMarkArray[i].siteUrl, '_blank');
}


















// function updateElement(i){
//     productName.value=productArray[i].name;
//     productPrice.value=productArray[i].price;
//     productCategory.value=productArray[i].category;
//     productArray.splice(i,1);
//     // deleteElement(i);
//     // if('updateButton'==1){
//     // }
//     alert("Update The Product Number "+(i+1));
//     // document.getElementById('addButton').innerHTML=cartona;

//     // var cartona=`<button onclick="updateElement()"
//     //  class=" btn btn-outline-info btn-btn me-3  ">Update</button>`


    
// }






///

/*function searchProduct(){
    var word=search.value;
    var newProduct=[];
    for (var i =0 ; i < productArray.length ; i++){
        if((productArray[i].name.toLowerCase().includes(word.toLowerCase())) || (productArray[i].category.toLowerCase().includes(word.toLowerCase()))){
            newProduct.push(productArray[i]);   
        }
    }
    if(newProduct.length>=1){
        displayProduct(newProduct);
    }
}

searchProduct();*/
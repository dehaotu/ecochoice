
// const newContent = document.createTextNode("Hi there and greetings!"); 
// document.querySelector("#main-image-container").append(newContent);
chrome.storage.local.set({
    "imagesrc":$("#landingImage").attr('src'),
    "itemtitle":$.trim($("#productTitle").html()),
    "itemurl":window.location.href,
    "price":$.trim($("#priceblock_ourprice").html())
});
// chrome.storage.local.get("image",value=>{
//     console.log(value);
// });

console.log("I set data!");

chrome.runtime.sendMessage({message:"ITEM IMAGE SENT"});
// console.log(document.querySelector("#main-image-container"));
// chrome.runtime.sendMessage({image:JSON.stringify(document.querySelector("#main-image-container"))});
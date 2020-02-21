
let checkNextImg_flag = true; //Boolean to function call itself
let foundAllImg_flag = false; //Breaks loop

let current_img; //Current image being loaded into the array
let current_gal = 0; //Current Gallery
let imgArray = new Array(); //Holds src of images
let altArray = new Array();
let ownerArray = new Array();
let galleryArray = new Array();
let totalArray = new Array();
let descArray = new Array();
let widthArray = new Array();
let heightArray = new Array();
let img_counts = 1; //Cycles through images
            
window.onload = loadArrays;
let loading_Interval;// = setInterval(loadRow, 1); //Calls loadImage

let editButton = document. createElement("button");
let deleteButton = document. createElement("button");

function loadArrays(){
    let gal_arraay = document.getElementById("galLists").innerHTML;
    let own_array = document.getElementById("ownLists").innerHTML;
    let total_array = document.getElementById("totalLists").innerHTML;
    let desc_array = document.getElementById("descLists").innerHTML;
    let alt_array = document.getElementById("altLists").innerHTML;
    let width_array = document.getElementById("descLists").innerHTML;
    let height_array = document.getElementById("altLists").innerHTML;

    galleryArray = gal_arraay.split(',');
    ownerArray = own_array.split(',');
    totalArray = total_array.split(',');
    descArray = desc_array.split(',');
    altArray = alt_array.split(',');
    widthArray = width_array.split(',');
    heightArray = height_array.split(',');

    // console.log(galleryArray);
    // console.log(ownerArray);
    // console.log(totalArra);
    // console.log(descArray);
    // console.log(altArray);

    editButton.value = "EDIT";
    deleteButton.value = "DELETE";

    loading_Interval = setInterval(loadRow, 10); //Calls loadImage
}

function loadRow(){
    if (foundAllImg_flag) {
        clearInterval(loading_Interval); //Stops loadImage from being called again
        let container = document.getElementById("iList"); //Get the location to load the images
        let makeTable = document.createElement('table');
        let row1 = document.createElement('tr'); 
        //let makeTable = "<table><tr><td>IMAGE</td><td>ALT</td><td>WIDTH</td><td>HEIGHT</td><td colspan='2'>OPTIONS</td></tr></table>";
        for (let x = 0, len = imgArray.length; x < len; x++) { //For all Images
            let getImg = new Image();
            getImg.src = imgArray[x]; //Get next image from array
            //Set alt for images
            getImg.alt = altArray[x];
            //makeTable += `<tr><td>${imgArray[x]}</td><td>${altArray[current_gal]}</td><td>${widthArray[current_gal]}</td><td>${heightArray[current_gal]}</td><td></td><td></td></tr>`;
            container.append(makeTable); //Place image into the selected object
        }
        current_gal++;
        if(current_gal < galleryArray.length){
            foundAllImg_flag = false; //Breaks loop
            img_counts = 1;
            checkNextImg_flag = true; //Reset flag to check next image
            loading_Interval = setInterval(loadRow, 10); //Calls loadImage
        }
        return;
    }
    //If more images to find
    if (checkNextImg_flag) {
        checkNextImg_flag = false; //Prevents same image from being loaded multiple times
        current_img = new Image();
        current_img.onload = imgFound; //if image loads, save this image
        current_img.onerror = imgNotFound; //if image doesnt load, end loop
        let pageID = galleryArray[current_gal]; //Grab object to set what folder images are in
        current_img.src = `Images/${pageID}/image` + img_counts + '.jpeg'; //set source of image
    }
}

function imgFound() {
    imgArray.push(current_img.src);//Add image to array
    img_counts++; //Set counter to next image
    checkNextImg_flag = true; //Reset flag to check next image
}

function imgNotFound() {
    foundAllImg_flag = true; //Loads Images
}

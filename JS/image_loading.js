
let checkNextImg_flag = true; //Boolean to function call itself
let foundAllImg_flag = false; //Breaks loop

let current_img; //Current image being loaded into the array
let imgArray = new Array(); //Holds src of images
let img_counts = 1; //Cycles through images

let loading_Interval = setInterval(loadImage, 1); //Calls loadImage

function loadImage() {
    if (foundAllImg_flag) {
        clearInterval(loading_Interval); //Stops loadImage from being called again
        let container = document.getElementById("photos"); //Get the location to load the iamges
        for (let x = 0, len = imgArray.length; x < len; x++) { //For all Images
            let getImg = new Image();
            getImg.src = imgArray[x]; //Get next image from array
            let theme = document.getElementById("theme").innerHTML;
            getImg.alt = theme+(x+1);
            //Set links to images
            let createLink = document.createElement('a');
            createLink.href = getImg.src;
            createLink.target = '_blank';
            createLink.appendChild(getImg);
            container.appendChild(createLink); //Place image into the selected object
        }
        return;
    }
    //If more images to find
    if (checkNextImg_flag) {
        checkNextImg_flag = false; //Prevents same image from being loaded multiple times
        current_img = new Image();
        current_img.onload = imgFound; //if image loads, save this image
        current_img.onerror = imgNotFound; //if image doesnt load, end loop
        let pageID = document.getElementById("pageid").innerHTML; //Grab object to set what folder images are in
        current_img.src = `Images/${pageID}/image` + img_counts + '.jpeg'; //set source of image
    }
}

function imgFound() {
    imgArray.push(current_img.src);//Add image to array
    img_counts++; //Set counter to next image
    checkNextImg_flag = true; //Reset flag to check next image
}

function imgNotFound() {
    foundAllImg_flag = true; //Breaks loop
}
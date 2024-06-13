let upload = document.getElementById("upload")


let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let hue_rotate = document.getElementById("hue-rotate")


let download = document.getElementById("download")
let reset = document.getElementById("reset")
let img = document.getElementById("img")
let imgBox = document.querySelector(".imgBox")
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")



window.onload = function(){
    download.style.display ='none';
    reset.style.display ='none';
    imgBox.style.display ='none';
}
function resetImg(){
    ctx.filter = 'none'
    saturate.value = '100'
    contrast.value = '100'
    brightness.value = '100'
    sepia.value = '0'
    grayscale.value = '0'
    blur.value = '0'
    hue_rotate.value = '0'
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

upload.onchange = function(){
    resetImg()
    download.style.display ='block';
    reset.style.display ='block';
    imgBox.style.display ='block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
    img.onload = function(){
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display = 'none'
    }
}

let filters = document.querySelectorAll(".filter ul li input")
filters.forEach(filter =>{
    filter.addEventListener('input',function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
    }
    )
})
reset.onclick = function() {
    resetImg();
}
download.onclick = function(){
    // let link = document.createElement('a');   // السطر المعدل
    // link.download = 'edited-image.png';       // السطر المعدل
    // link.href = canvas.toDataURL();           // السطر المعدل
    // link.click();  
    download.href = canvas.toDataURL("image/jpeg")
}



let data = {
    photo: "./photos/woman2.jfif",
    title: "My title",
    description: "What happened here, why is this a very nice image"
};

$("#woman2").attr("src", data.photo);

let data2 = {
    photo: "./photos/cake.jfif",
    title: "My title",
    description: "What happened here, why is this a very nice image"
};

$("#cake").attr("src", data2.photo);

let data3 = {
    photo: "./photos/car.jfif",
    title: "My title",
    description: "What happened here, why is this a very nice image"
};

$("#car").attr("src", data3.photo);

let data4 = {
    photo: "./photos/food.jfif",
    title: "My title",
    description: "What happened here, why is this a very nice image"
};

$("#food").attr("src", data4.photo);

let data5 = {
    photo: "./photos/chess.jfif",
    title: "My title",
    description: "What happened here, why is this a very nice image"
};

$("#chess").attr("src", data5.photo);

let data6 = {
    photo: "./photos/manga_book.jfif",
    title: "My title",
    description: "What happened here, why is this a very nice image"
};

$("#manga_book").attr("src", data6.photo);

let data7 = {
    photo: "./photos/nature.jfif",
    title: "My title",
    description: "What happened here, why is this a very nice image"
};

$("#nature").attr("src", data7.photo);

let data8 = {
    photo: "./photos/woman.jfif",
    title: "My title",
    description: "What happened here, why is this a very nice image"
};

$("#woman").attr("src", data8.photo);

let current = 0;


let loadCurrent = (number) => {
  $('#current').text(number);
}

$('#previous').click(() => {
  if(current > 1) {
    current--;  
  }
  loadCurrent(current);
});

$('#next').click(() => {
  if(current < 5) { 
    current++; 
  }
  loadCurrent(current);
});

loadCurrent(current);




/*let currentPhoto = 0;
let imagesData = ["cake"];

$("#cake").attr("src", imagesData[currentPhoto].photo);*/


//<img src="./photos/woman2.jfif" alt="" id="woman2"
//<img src="./photos/cake.jfif" alt="" id="cake"></img>
//<img src="./photos/car.jfif" alt="" id="car">
//<img src="./photos/food.jfif" alt="" id="food">
//<img src="./photos/chess.jfif" alt="" id="chess">
//<img src="./photos/manga_book.jfif" alt="" id="manga_book"></img>
//<img src="./photos/nature.jfif" alt="" id="nature">
//<img src="./photos/woman.jfif" alt="" id="woman">

//<img src="./photos/arrow.svg" alt="" id="arrow_left"></img>
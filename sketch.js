
var linkTo;

let objectDetector;

let img;
let objects = [];
let status;
let arrow;

function preload(){
  // img = loadImage(linkTo);
}


function setup() {
  createCanvas(640, 420);
  arrow = loadImage('58f8bcf70ed2bdaf7c128307.png')

  // objectDetector = ml5.objectDetector('cocossd', modelReady);
document.querySelector("button").addEventListener("click", function(){

// linkTo = document.querySelector("#link").value
linkTo = prompt("Enter in a link to an image (Not all image links work)")
// linkTo.crossOrigin = "Anonymous"


// console.log(document.querySelector("#link").value)

img = loadImage(linkTo)
objectDetector = ml5.objectDetector('cocossd', modelReady);
})

}

// Change the status when the model loads.
function modelReady() {

  console.log("model Ready!")
  status = true;
  console.log('Detecting')
  objectDetector.detect(img, gotResult);
}

// A function to run when we get any errors and the results
function gotResult(err, results) {

  // image(arrow, width/2-20, height, 30,30)
  if (err) {
    console.log(err);
    createNewH1("This picture does not seem to work... This could be because the image link is not supported or is because of the CORS Policy.")
    noCanvas()
  }

  var species = results[0].label
  console.log(results)
  objects = results;
    if(species == 'dog') {
      console.log("this is a dog")
      createNewH1("This seems to be a dog... Want some kibble?")
    }
    else if (species == 'cat') {
      console.log("this is a cat")
      createNewH1("This seems to be a cat... Want some cat food?");
    }
    else if (species == 'person'){
      console.log("Monkey")
      createNewH1("This seems to be a person... Want a burger?")
    }
    else if (species == 'sheep') {
      console.log("shep")
      createNewH1("This seems to be a sheep... Go outside. Touch some grass.")
    }
    else if(species == 'pig') {
      console.log("pig")
      createNewH1("This seems to be a pig... You want some corn?")
    }
    else if(species == 'kangaroo'){
      console.log("kangaroo")
      createNewH1("This seems to be a kangaroo... What do you guys even eat?")
    }
    else if(species == 'monkey') {
      console.log("monkey")
      createNewH1("This seems to be a monkey... Want some plant based fruits?")
    }
    else if(species == 'parrot') {
      console.log("parrot")
      createNewH1("This seems to be a parrot... You want some bird feed?")
    }
    else if(species == 'panda') {
      console.log("panda")
      createNewH1("Lol panda... Idk what you're doing near a fridge, but panda.")
    }
    else if(species == 'goat') {
      console.log("goat")
      createNewH1("This seems to be a goat. You know what else is goated? Kuriyo's newest EP oniyuri EP out now on all major platforms you can stream it now at https://kuriyo.fanlink.to/oniyuri")
    }
    else if(species == 'bird'){
      console.log("bird")
      createNewH1("This seems to be a bird. You want some bird feed?")
    }
    else {
      console.log("No idea");
      createNewH1("I don't have any record of you... Odd...")
    }
}


function draw() {
  // unless the model is loaded, do not draw anything to canvas
  if (status != undefined) {
    image(img, 0, 0)

    for (let i = 0; i < objects.length; i++) {
      noStroke();
      fill(0, 255, 0);
      text(objects[i].label + " " + nfc(objects[i].confidence * 100.0, 2) + "%", objects[i].x + 5, objects[i].y + 15);
      noFill();
      strokeWeight(4);
      stroke(0, 255, 0);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }

  }
}

function createNewH1(text) {
  var createEle = document.createElement("H1");
  var eleInput = document.createTextNode(text);
  createEle.appendChild(eleInput);
  document.body.appendChild(createEle)
}

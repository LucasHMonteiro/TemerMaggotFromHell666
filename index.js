const fire = document.querySelector('.fire');
const pixelSize = 10;
const pixelArray = [];
const fireWidth = Math.round(fire.offsetWidth/pixelSize);
const fireHeight = Math.round(fire.offsetHeight/pixelSize);
const fireColorsPalette = [
  {"r":7,"g":7,"b":7},
  {"r":31,"g":7,"b":7},
  {"r":47,"g":15,"b":7},
  {"r":71,"g":15,"b":7},
  {"r":87,"g":23,"b":7},
  {"r":103,"g":31,"b":7},
  {"r":119,"g":31,"b":7},
  {"r":143,"g":39,"b":7},
  {"r":159,"g":47,"b":7},
  {"r":175,"g":63,"b":7},
  {"r":191,"g":71,"b":7},
  {"r":199,"g":71,"b":7},
  {"r":223,"g":79,"b":7},
  {"r":223,"g":87,"b":7},
  {"r":223,"g":87,"b":7},
  {"r":215,"g":95,"b":7},
  {"r":215,"g":95,"b":7},
  {"r":215,"g":103,"b":15},
  {"r":207,"g":111,"b":15},
  {"r":207,"g":119,"b":15},
  {"r":207,"g":127,"b":15},
  {"r":207,"g":135,"b":23},
  {"r":199,"g":135,"b":23},
  {"r":199,"g":143,"b":23},
  {"r":199,"g":151,"b":31},
  {"r":191,"g":159,"b":31},
  {"r":191,"g":159,"b":31},
  {"r":191,"g":167,"b":39},
  {"r":191,"g":167,"b":39},
  {"r":191,"g":175,"b":47},
  {"r":183,"g":175,"b":47},
  {"r":183,"g":183,"b":47},
  {"r":183,"g":183,"b":55},
  {"r":207,"g":207,"b":111},
  {"r":223,"g":223,"b":159},
  {"r":239,"g":239,"b":199},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255},
  {"r":255,"g":255,"b":255}
]

function start(){
  createDataStructure();
  createFireSource();
  setInterval(calculateFirePropagation, 50);
}

start();

function createDataStructure(){
  const totalPixels = fireWidth * fireHeight;
  for (let index = 0; index < totalPixels; index++) {
    pixelArray[index] = 0;
  }
}

function renderTable(){
  html = '<table class="fire-table">'
  for (let row = 0; row < fireHeight; row++) {
    html += '<tr>';
    for (let column = 0; column < fireWidth; column++) {
      html += `<td style="background:${colorString(pixelArray[(fireWidth*row)+column])}"></td>`;
    }
    html += '</tr>';
  }
  html += '</table>'
  fire.innerHTML = html;
}

function createFireSource(){
  for (let column = 0; column < fireWidth; column++) {
    let index = (fireWidth*fireHeight)-fireWidth
    pixelArray[index+column] = 50;
  }
}

function calculateFirePropagation(){
  for (let index = 0; index < pixelArray.length-fireWidth; index++) {
    let decay = Math.floor(Math.random()*3);
    let decrement = pixelArray[index+fireWidth]-decay; 
    pixelArray[index-decay] = pixelArray[index+fireWidth] <= 0 ? 0 : decrement;
  }
  renderTable();
}

function colorString(index){
  if(index < 0) index = 0;
  let colorObj = fireColorsPalette[index];
  return `rgb(${colorObj.r},${colorObj.g},${colorObj.b})`;
}
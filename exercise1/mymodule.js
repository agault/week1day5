function addnumbers (x,y){
  var sum = x + y
  return sum
}
function multiplynumbers (x, y){
  var multiplication = x * y

  return multiplication
}
function area (x, y){
  var triangle = multiplynumbers (x, y)
  triangle = triangle / 2


  return triangle

}
function divide (x, y) {
  var div = x / y
  return div
}


module.exports = {
  addnumbers : addnumbers,
  //multiplynumbers : multiplynumbers,
  area : area
}
let hours = "";
let voltas = (24*2);
let intervalo = 0.5;
for(let time = 1; time<=voltas; hour++){
  hours += (hour/intervalo) + "h ";
}
log(hours);


function log(values) {
  console.log(typeof values === "string" ? values : JSON.stringify(values));
}
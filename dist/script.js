var i = 0;
var number = document.getElementById('number');
var count = document.getElementById('count');
var speed = document.getElementById('speed');

String.prototype.padZero= function(len, c){
    var s= this, c= c || '0';
    while(s.length< len) s= c+ s;
    return s;
}

var mode = 'binary';

function inc() {
  if (mode === 'binary') {
    incBinary();
  }
  else if (mode === 'hex') {
    incHex();
  }
  setTimeout(inc, Math.ceil(600 / speed.value));
}

function incBinary() {
  i++;
  var binary = i.toString(2);
  binary = binary.replace(/0/g, '·');
  binary = binary.replace(/1/g, '|');
  number.innerHTML = binary.padZero(32,'·');
  count.innerHTML = i;
}

function incHex() {
  i++;
  var hex = i.toString(16);
  number.innerHTML = hex.padZero(8,'0').toUpperCase();
  count.innerHTML = i;
}

inc();
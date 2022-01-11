var A = prompt("Please enter in a random number.");
var B = prompt("Please enter in a random number.");
var C = prompt("Please enter in an operator.")
var Z;
if (C == "+") { Z = A + B; }
/*
else if (A = !null) { Z = "Error!"; }
else if (B = !null) { Z = "Error!"; }
else if (C = !null) { Z = "Error!"; } */
else if (C == "-") { Z = A - B; }
else if (C == "/") { Z = A / B; }
else if (C == "*") { Z = A * B; }
alert(Z);
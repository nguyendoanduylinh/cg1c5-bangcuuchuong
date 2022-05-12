let bang = "<table border = 1>";
for (let a = 1; a <= 10; a++) {
  bang += "<tr>";
  for (let b = 1; b <= 10; b++) {
    tich = a * b;
    bang += "<td>" + a + " x " + b + " = " + tich + "</td>";
  }
  bang += "</tr>";
}
bang += "</table>";
document.write(bang);

const readLine = (require)('readline-sync');
let answer = readLine.question("do you want to quit?: ");
while (answer !== "y" && answer !== "n"){
    console.log("OK");
    answer = readLine.question("chose A,B,C: ");
}

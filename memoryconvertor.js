const convertToGB = () => {
  let given = document.getElementById("temp").value;
  given = parseFloat(given);

  if (isNaN(given)) {
    console.log("Not a valid input");
    return;
  }

  let result = +((given / (1024 * 1024 * 1024)).toFixed(2));

  let resultText = `The Memory in Gigabytes is ${result}`;
  document.getElementById("result").innerHTML = resultText;
};

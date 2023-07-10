const createCountDownDivs = () => {
  let periods = ["days", "hours", "minutes", "seconds"];
  let data = periods.map((item) => {
    return { id: item, text: item };
  });

  const arrayOfDivs = [];

  data.forEach((item) => {
    // Create div itself
    const newDiv = document.createElement("div");

    // Create header and p tag
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    // Give them their id values
    h2.id = item.id;
    h2.textContent = "00";
    p.textContent = item.text;

    // Append these child elements into the div
    newDiv.appendChild(h2);
    newDiv.appendChild(p);

    // Now push the div to the array
    arrayOfDivs.push(newDiv);
  });
  return arrayOfDivs;
};

const appendCountDownDivs = (divArray, parentDiv) => {
  divArray.forEach((item) => {
    parentDiv.appendChild(item);
  });
};

export { createCountDownDivs, appendCountDownDivs };

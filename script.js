const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");

    let total = 0;
	
    for (let i = 0; i < prices.length; i++) {
        total = total + parseFloat(prices[i].textContent); 
    }

	const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");

	totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: Rs ${total}`;

	totalRow.appendChild(totalCell);
    table.appendChild(totalRow);

	getSumBtn.disabled = true;
  
};

getSumBtn.addEventListener("click", getSum);


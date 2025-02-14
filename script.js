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

	const existingAnsRow = document.getElementById("ans");

	const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
	totalRow.id = "ans";

    totalRow.textContent = `Total Price: Rs ${total}`;

    table.appendChild(totalRow);

	
  
};

getSumBtn.addEventListener("click", getSum);


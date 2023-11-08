//CONSTANTS
const VEGETARIAN = "vegetarian";
const HAWAIIAN = "hawaiian";
const PEPPERONI = "pepperoni";
const PIZZA_PRICE = 80;

//DOM
const inputPizzaName = document.getElementById("pizzaName");
const inputPizzaQuantity = document.getElementById("pizzaQuantity");
const formResult = document.getElementById("result");

formResult.textContent = `Hey! Happy to serve your pizza. On our menu we have ${VEGETARIAN}, ${HAWAIIAN} and ${PEPPERONI}`;

//FUNCTIONS
function checkOrderName(orderName) {
  return (
    orderName === VEGETARIAN ||
    orderName === HAWAIIAN ||
    orderName === PEPPERONI
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * PIZZA_PRICE;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) return 10;
  else if (orderQuantity >= 3 && orderQuantity <= 5) return 15;
  else return 20;
}

formBtn.addEventListener("click", (e) => {
  let orderName = inputPizzaName.value;

  if (checkOrderName(orderName.toLowerCase())) {
    let orderQuantity = inputPizzaQuantity.value;
    const orderTotal = totalCost(orderQuantity);

    formResult.textContent = `Great, I'll get started on your ${orderName} Pizza right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime(
      orderQuantity
    )} minutes`;
  } else formResult.textContent = "Pizza Doesn't exist!";
});

const PizzaShop=require('./pizzaShop')
const DrinkMachine=require('./drinkmachine')

const pizzaShop=new PizzaShop()
const drinkmachine=new DrinkMachine()
pizzaShop.order('large','mushroooms');
pizzaShop.displayOrderNumber();

pizzaShop.on("order",(size,toppings)=>{
    console.log(`order received.baking a ${size} pizza with ${toppings} toppings`)
    drinkmachine.serveDrink(size);
})


pizzaShop.order('small','mushroooms');
pizzaShop.displayOrderNumber();




// emitter.emit('order pizza',"large","mushroom")


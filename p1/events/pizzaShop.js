
const eventEmitter=require('node:events')
class pizzaShop extends eventEmitter{
    constructor()
    {
        super();
        this.ordernumber=0;
    }

    order(size,topping){
        this.ordernumber++;
        this.emit("order",size,topping);

    }

    displayOrderNumber(){
        console.log(`current order number ${this.ordernumber}`);
    }
}

module.exports=pizzaShop;
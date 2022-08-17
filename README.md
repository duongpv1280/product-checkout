## Run web app
```bash
npm run start
```

## Test Checkout function
```bash
npm run test
```

## Description
1. Increase/descrease quantity of each item
2. Fill in customer name
3. Click [CHECKOUT] button for the final price


## Usage
### Adding pricing rule
Currently, it has 2 types of promotions:
- Deal x for y pizzas
- Fix price deal for one type of pizza

To assign a pricing to a customer, go to data-model/promostions.ts, update existing customer or add new customer, and add the list of priceRules to them

### Cheeck out service
To use Checkout module
```typesript
const co: Checkout = new Checkout(pricingRules);
co.add(item1);
co.add(item1);
co.add(item2);
//...

//Checkout
console.log(co.total());
```
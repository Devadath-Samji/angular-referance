import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn:'root'
// })
//Services provide logic and data that can shared across components.
export class CartService {
items = [];
// String items[];
  constructor() { }
//business functions
addToCartInService(product){
    // window.alert('Service Your product has been added to the cart!');
alert(product.name)
alert("Javascript product object : " + product)
//  arrayList.add(product);
this.items.push(product);
    alert("Array Object " + this.items);
}

getItems(){
  return this.items;
}

clearCart(){
  this.items = [];
  return this.items;
}

}
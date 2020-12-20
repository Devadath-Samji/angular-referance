import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//If not mentioned in Providers then use the following @Injectible 
@Injectable({
   providedIn:'root'
  })
//Services provide logic and data that can shared across components.
export class CartService {
items = [];
// String items[];
//Dependency Injection
  constructor(private http: HttpClient) { }
//business functions
addToCartInService(product){
    // window.alert('Service Your product has been added to the cart!');
// alert(product.name)
console.log("Product added to cart" + product.name)
// alert("Javascript product object : " + product)
//  arrayList.add(product);
this.items.push(product);
    // alert("Array Object " + this.items);
}

getItems(){
  return this.items;
}

clearCart(){
  this.items = [];
  return this.items;
}

getShippingPrices(){
  return this.http.get('assets/shipping.json');
}

}
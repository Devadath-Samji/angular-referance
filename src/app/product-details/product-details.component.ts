import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {productsArray} from '../productsFile';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit{
  // variable to store the product which was selected.
  product;
  // private route:ActivatedRoute;
  // ProductDetailsComponent(){
    // private ActivatedRoute route;
    // access type variable
    // access variable:type
  // }
  constructor( private route:ActivatedRoute, private cartService:CartService) {
    console.log("ProductDetailsComponent Constructed");
   }
  //  void ngOnInit() {}
ngOnInit() :void {

//  this.route.paramMap.subscribe( function (params){
//   this.product = productsArray[+params.get('productId')];
//  });

  this.route.paramMap.subscribe( params => {
    this.product = productsArray[+params.get('productId')];
  });

  // this.route.paramMap.subscribe( params => 
  //   productsArray[+params.get('productId')]
  // );

 console.log("ProductDetailsComponent post construction ngOnInit");
}
addToCartInComponent(product){
this.cartService.addToCartInService(product);
  window.alert('Component : Your product has been added to the cart!');
}
}
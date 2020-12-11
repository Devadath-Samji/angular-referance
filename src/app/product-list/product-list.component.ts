import { Component } from '@angular/core';

import { productsArray } from '../productsFile';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productsArrayVariable = productsArray;

  share(productName) {
    window.alert(productName + ' has been shared!');
    // console.log(productName + ' has been shared!');
  }

  onNotify(){
    // alert('Will get notified when product goes on sale!');
   console.log("'Will get notified when product goes on sale!");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
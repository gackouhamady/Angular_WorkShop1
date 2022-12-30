import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  prixMax:number =5;
  ProductList: Product[] = [];


 constructor() { 

  }


  ngOnInit(): void {
    this.ProductList=[ 
      {id:1, titre:"tshirtt-1", prix:10,quantite:10,like:12},
      {id:2,titre:"tshirt3",prix:10,quantite:23,like:10},
      {id:3,titre:"Hamady",prix:90,quantite:23,like:8}

    ];

  }

  byProduct(i:number){

  return   this.ProductList[i].quantite--;
  
  }

}

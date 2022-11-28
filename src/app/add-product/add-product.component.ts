import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName=""
  productImage=""
  ProductDetail=""
  sellarName=""
  quantity=""
  rate=""
  readValue=()=>{
    let data=[{
      "Product Name":this.productName,
      "Product Image":this.productImage,
      "Product Details":this.ProductDetail,
      "Sellar Name":this.sellarName,
      "Quantity":this.quantity,
      "Rate":this.rate
    }]
    console.log(data)
  }


}

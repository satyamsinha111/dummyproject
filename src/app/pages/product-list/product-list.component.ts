import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers:[ProductService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
   productList:any[] = [];
   tempProductList:any=[];
   searchTerm:string = '';

   constructor(private _product_service:ProductService,private _router:Router){

   }

   filterProducts(){
    // let tmparr=[...this.productList];
    // console.log(this.searchTerm,tmparr)
    if(this.searchTerm){
      this.productList = [];
      this.tempProductList.map((d:any)=>{
        console.log(this.searchTerm.includes(d.name),d)
       if(d.name?.toLowerCase().match(this.searchTerm?.toLowerCase())){
         this.productList.push(d)
       }
      })
    }else{
      this.productList = [...this.tempProductList];
    }
    
    
   }

   handleImgError(ev:any,img:any){
    ev.srcElement.src = `image_not_found_placeholder.jpg`;

   }

   gotoProductDetail(id:any){
    this._router.navigate(['product-detail',id])
   }
     
   ngOnInit(): void {
     this.productList = this._product_service.getProducts();
     this.tempProductList = [...this.productList];
   }
}

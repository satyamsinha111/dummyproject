import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  providers:[ProductService],
  styleUrl: './product-detail.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  product:any={
    name:"test",
    image:null,
    description:"Something"
  
  };

  constructor(private _productService:ProductService,private _activatedRoute:ActivatedRoute,private _meta:Meta){

  }

  handleImgError(ev:any,img:any){
    ev.srcElement.src = `image_not_found_placeholder.jpg`;
  }

  ngOnInit(): void {
   
    this._activatedRoute.params.subscribe((data:any)=>{
      console.log("Data ",data);
      this._productService.getProducts().map((d:any)=>{
        if(+d.id === +data.id){
          this.product = {...d};
          this._meta.addTag({name:'name',content:this.product.name});
          this._meta.addTag({name:"description",content:this.product.description})
        }
      })
    })
  }
}

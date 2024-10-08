import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  categories:any;
  isCategoriesVisible: boolean = false;
  isPriceFiltersVisible: boolean = false;
  isDiscountFiltersVisible: boolean = false;
  priceFilters:any = [50,150,250,350,450,550,700];
  discountFilters:any = [10,20,30,40];
  constructor(private booksService:BooksService) { }

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((res)=>{
      this.categories = this.booksService.getAllCategories();
    });
  }

  showCategories(){    
    this.isPriceFiltersVisible = false;
    this.isDiscountFiltersVisible = false;
    this.isCategoriesVisible = !this.isCategoriesVisible;
  }

  filterBooksByCategory(category:any){
    this.booksService.getFilterCategory(category);
    this.isCategoriesVisible = false;
  }

  showPriceFilters(){
    this.isCategoriesVisible = false;
    this.isDiscountFiltersVisible = false;
    this.isPriceFiltersVisible = !this.isPriceFiltersVisible;
  }

  filterBooksByPrice(priceFilter:any){
    this.booksService.getPriceFilter(priceFilter);
    this.isPriceFiltersVisible = false;
  }

  showDiscountFilters(){
    this.isPriceFiltersVisible = false;
    this.isCategoriesVisible = false;
    this.isDiscountFiltersVisible = !this.isDiscountFiltersVisible;
  }

  filterBooksByDiscount(discountFilter:any){
    this.booksService.getDiscountFilter(discountFilter);
    this.isDiscountFiltersVisible = false;
  }

}

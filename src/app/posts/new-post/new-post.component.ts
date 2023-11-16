import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  permalink: string = '';
  imgSrc: any = './assets/placeholder-image.png';
  selectedImg: any;

  categories: any;

  constructor(private cotegoryService: CategoriesService){}

  ngOnInit(): void {
    this.cotegoryService.loadData().subscribe(val =>{
        this.categories = val;
    })
  }

  OnTitleChanged($event){

    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, '-');

  }

  showPreview($event){
    const reader = new FileReader();

    reader.onload = (e) =>{
      this.imgSrc = e.target.result
    }

    reader.readAsDataURL($event.target.files[0])
    this.selectedImg = $event.target.files[0];

  }

}

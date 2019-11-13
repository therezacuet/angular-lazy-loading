import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {error} from '@angular/compiler/src/util';
import {Post} from '../../model/post-model';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [
    trigger('listStagger',[
      transition('* <=> *',[
        query(':enter',
          [
            style({opacity:0, transform: 'transletY(-35px)'}),
            stagger('50ms',
              animate('55ms ease-out',
                style({opacity:1, transform: 'transletY()0px'})))
          ],{optional: true}),
        query(':leave', animate('50ms',style({opacity:0})),{optional:true})
      ])
    ])
  ]
})
export class PostComponent implements OnInit {

  posts: Post[];

  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;

  constructor(private projectService: DataService) { }

  ngOnInit() {

    this.getAllPost();
  }

  public getAllPost(){

    this.projectService.getPosts().subscribe(
      (data: Post[]) => {
        this.posts = data
      },
      error => {

      }
    )
  }

}

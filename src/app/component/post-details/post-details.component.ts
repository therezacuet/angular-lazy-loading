import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post-model';
import {DataService} from '../../service/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  postId: any;

  constructor(private projectService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.postId = params.id)
  }

  ngOnInit() {

    this.projectService.getPost(this.postId).subscribe(
      (data: Post) =>{
        this.post= data
      }
    )
  }

}

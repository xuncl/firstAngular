import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsContentComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.params);
    
    // 获取动态路由的传值
    this.route.params.subscribe(function(data){
      console.log(data);
      console.log(data.aid);
    });

  }

}

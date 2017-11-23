import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// ActivatedRoute既可以接受动态传值，也可以接收get传值
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoplistComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // 获取动态传值
    // this.route.params;
    // 获取get传值
    // this.route.queryParams;
    // 二者都是observable对象

    this.route.queryParams.subscribe(function(data){
      console.log(data);
    });
  }

}

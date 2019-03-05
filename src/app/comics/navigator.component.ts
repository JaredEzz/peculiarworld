import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  comicUrls: string[] = ['./assets/images/comics/030519.jpg'];


  ngOnInit(): void {
    console.log('onInit');
  }
}

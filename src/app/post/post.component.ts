import { Component, Input, EventEmitter, Output, OnInit,
          OnChanges, DoCheck,
          AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy
{  
  @Input('imgFromPost') postImg='';
  @Output() imgSelected= new EventEmitter<string>()

  constructor() {
    console.log('constructor() called', this.postImg);   
  }

  ngOnInit() {
    console.log('ngoninit() called', this.postImg);
  }

  ngOnChanges() {
    console.log('ngOnChanges() called');
  }

  ngDoCheck() {
    console.log('ngDoCheck() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() called');
  }


}

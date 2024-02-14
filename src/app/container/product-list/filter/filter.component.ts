import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  all:number=0;

  @Input()
  InStock:number=0;

  @Input()
  OutOfStock:number=0;

  selectedFilterRadioButton:string='all';
  @Output()
  selectedFilterRadioButtonChanged:EventEmitter<string>=new EventEmitter<string>();

  onSelectedFilterRadioButtonChanged()
  {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

}

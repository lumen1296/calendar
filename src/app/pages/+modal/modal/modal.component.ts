import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public defaultColors = [

    {
      color: 'red',
      name: 'Red'
    },
    {
      color: 'green',
      name: 'Green'
    },
    {
      color: 'yellow',
      name: 'Yellow'
    },
    {
      color: 'rgb(47, 116, 181)',
      name: 'Default'
    },
  ];

  public defaultCity = [
    'Bogotá',
    'Medellín',
    'Cali',
    'Cartagena',
    'None'
  ];

  citySelected = 'None';


  colorSelected = {
    color: 'rgb(47, 116, 181)',
    name: 'Default'
  };


  constructor() { }

  ngOnInit(): void {
  }





}

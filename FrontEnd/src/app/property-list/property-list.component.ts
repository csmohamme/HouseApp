import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Mostafa",
      "Type": "House"
    },
    {
      "Id": 2,
      "Name": "Mostafa",
      "Type": "House"
    },
    {
      "Id": 3,
      "Name": "Mostafa",
      "Type": "House"
    },
    {
      "Id": 4,
      "Name": "Mostafa",
      "Type": "House"
    },
    {
      "Id": 5,
      "Name": "Mostafa",
      "Type": "House"
    },
    {
      "Id": 6,
      "Name": "Mostafa",
      "Type": "House"
    },
    {
      "Id": 7,
      "Name": "Mostafa",
      "Type": "House"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

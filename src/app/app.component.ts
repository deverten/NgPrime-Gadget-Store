import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenuItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cities!: City[];
  selectedCity!: any;
  cityGroup!: FormGroup;
  items: MenuItem[];

  constructor(private fb: FormBuilder) {
    this.items = [
      {
        label: 'Home',
        routerLink: '/home',
      },
      {
        label: 'About',
        routerLink: '/about',
      },
      {
        label: 'Contact',
        routerLink: '/contact',
      },
    ];
  }

  title = 'ngprimeApp';
  products!: any[];
  images: string[] = [
    'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip',
    'https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=',
    'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
    // Add more image paths as needed
  ];

  product = [
    {
      name: 'iPhone x',
      inventoryStatus: 'INSTOCK',
      price: 5000,
    },
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // responsiveOptions!: any[];
  ngOnInit() {}

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return;
  }

  visible!: boolean;

  showDialog() {
    this.visible = true;
    console.log('clicked');
  }
}

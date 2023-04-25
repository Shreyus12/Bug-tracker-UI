import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit 
{
  displayedColumns: string[] = ['position', 'name','title','weight','height','imageAndPersonName','upload'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  uploadImage(event: any, element: PeriodicElement) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      element.upload = reader.result as string;
    };
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  title:string;
  weight: string;
  height: string;
  image: string;
  personName: string;
  upload: string;

}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Login Screen', title:'Android application crashes while trying to login using an app', weight: 'Active', height: 'Critical', image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',upload: 'https://example.com/image1.jpg' },
  {position: 2, name: 'Login Screen', title:'Android application crashes while trying to login using an app',weight: 'Fixed', height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe', upload: 'https://example.com/image1.jpg' },
  {position: 3, name: 'Login Screen', title:'Android application crashes while trying to login using an app',weight: 'Fixed', height: 'Low', image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe', upload: 'https://example.com/image1.jpg' },
  {position: 4, name: 'Login Screen', title:'Android application crashes while trying to login using an app', weight: 'Fixed', height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' },
  {position: 5, name: 'Login Screen',title:'Android application crashes while trying to login using an app', weight:  'Active',height: 'Low',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',   upload: 'https://example.com/image1.jpg' },
  {position: 6, name: 'Login Screen', title:'Android application crashes while trying to login using an app',weight: 'Fixed',height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' },
  {position: 7, name: 'Login Screen', title:'Android application crashes while trying to login using an app',weight: 'Active', height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe', upload: 'https://example.com/image1.jpg' },
  {position: 8, name: 'Login Screen', title:'Android application crashes while trying to login using an app', weight: 'Fixed',height: 'Low', image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' , },
  {position: 9, name: 'Login Screen',title:'Android application crashes while trying to login using an app', weight:  'Active',height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' },
  {position: 10, name: 'Login Screen',title:'Android application crashes while trying to login using an app', weight: 'Fixed', height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' , },
  {position: 11, name: 'Login Screen',title:'Android application crashes while trying to login using an app', weight:  'Active', height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' }, 
  {position: 12, name: 'Login Screen',title:'Android application crashes while trying to login using an app', weight: 'Fixed', height: 'Low',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' },
  {position: 13, name: 'Login Screen', title:'Android application crashes while trying to login using an app',weight:  'Active', height: 'Critical', image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' },
  {position: 14, name: 'Silicon', title:'Android application crashes while trying to login using an app', weight: 'Fixed',height: 'Low', image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' },
  {position: 15, name: 'Login Screen',title:'Android application crashes while trying to login using an app', weight: 'Fixed', height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe', upload: 'https://example.com/image1.jpg' , },
  {position: 16, name: 'Login Screen', title:'Android application crashes while trying to login using an app', weight:  'Active', height: 'Low',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',upload: 'https://example.com/image1.jpg' , },
  {position: 17, name: 'Login Screen', title:'Android application crashes while trying to login using an app', weight:  'Active', height: 'Critical', image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe', upload: 'https://example.com/image1.jpg'},
  {position: 18, name: 'Login Screen', title:'Android application crashes while trying to login using an app', weight:  'Active',height: 'Low', image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe', upload: 'https://example.com/image1.jpg' },
  {position: 19, name: 'Login Screen', title:'Android application crashes while trying to login using an app', weight: 'Fixed', height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',  upload: 'https://example.com/image1.jpg' },
  {position: 20, name: 'Login Screen', title:'Android application crashes while trying to login using an app', weight:  'Active', height: 'Critical',image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', personName: 'John Doe',   upload: 'https://example.com/image1.jpg'},
];


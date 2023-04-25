import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {





  members = [
    {
      name: 'John Doe',
      title: 'CEO',
      photo: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg'
    },
    {
      name: 'Jane Smith',
      title: 'CTO',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELK0H8XRYgDdz1rFyUCqyL13XvOLhVagrPWFjWKJKzx8F6WqK14LPK_0zog1paaQ3b0Y&usqp=CAU'
    },
    {
      name: 'Bob Johnson',
      title: 'Developer',
      photo: 'https://www.schoolfablab.com/wp-content/uploads/2019/09/000016.jpg'
    },
    {
      name: 'Samantha Lee',
      title: 'Designer',
      photo: 'https://www.freepassphoto.com/static/images/selfie_final.jpg'
    },
    {
      name: 'Jane Smith',
      title: 'CTO',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrea3VTkYhx19FXUB0SSov0kVmgq78DbIExe7ZXtIxOF8RqymjJVA0H3WlGlCqSfCaMc&usqp=CAU'
    },
    {
      name: 'Bob Johnson',
      title: 'Developer',
      photo: 'https://i.pinimg.com/236x/1f/2c/9d/1f2c9dd6daf00cc4d59ec2df0c82a258--passport.jpg'
    },
    {
      name: 'Jane Smith',
      title: 'CTO',
      photo: 'https://via.placeholder.com/150x150'
    }
  ];



}

import { profile } from '@angular/core';

@profile({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
class profile{
  name: string = 'John Doe';
  age: number = 30;
}

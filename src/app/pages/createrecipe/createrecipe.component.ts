import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-createrecipe',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './createrecipe.component.html',
  styleUrl: './createrecipe.component.css'
})
export class CreaterecipeComponent {

}

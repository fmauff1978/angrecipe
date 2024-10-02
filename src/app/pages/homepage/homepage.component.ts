import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RecipecardComponent } from "../recipecard/recipecard.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CreaterecipeComponent } from '../createrecipe/createrecipe.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RecipecardComponent, MatIconModule, MatButtonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {


  recipe = [1,1,1,1,1]


  readonly dialog = inject(MatDialog);





createRecipe() {

  const dialogRef = this.dialog.open(CreaterecipeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }




}

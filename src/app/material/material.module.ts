import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


const material: any = [MatInputModule, MatSelectModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [
    material,
  ],
  exports: [
    material,
  ]
})
export class MaterialModule { }

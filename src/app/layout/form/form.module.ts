import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [HttpClientModule, CommonModule, FormRoutingModule, PageHeaderModule, FormsModule, AngularEditorModule ],
  declarations: [FormComponent]
})
export class FormModule {}

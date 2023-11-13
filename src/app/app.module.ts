import { NgModule } from "@angular/core";
import { AddUserComponent } from "./add-user/add-user.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [FormsModule],
  declarations: [AddUserComponent],
  exports: [AddUserComponent, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
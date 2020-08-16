import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClientModule } from '@angular/common/http';
import { NavigationService } from "./navigation.service";
import { Cart } from "./cart.model";

@NgModule({
  imports: [HttpClientModule],
  providers: [Repository, NavigationService, Cart]
})
export class ModelModule { }

import {Routes} from "@angular/router";
import {ListNftComponent} from "./marketplace/list-nft/list-nft.component";
import {DescriptionNftComponent} from "./marketplace/description-nft/description-nft.component";

export const ROUTES : Routes = [
  {path: '', component: ListNftComponent},
  {path: 'description', component: DescriptionNftComponent},
]

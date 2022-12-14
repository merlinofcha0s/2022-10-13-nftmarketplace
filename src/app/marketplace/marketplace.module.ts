import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleNFTComponent} from './single-nft/single-nft.component';
import {NftPriceComponent} from './single-nft/nft-price/nft-price.component';
import {FavoriteNftComponent} from "./single-nft/favorite-nft/favorite-nft.component";
import { ListNftComponent } from './list-nft/list-nft.component';
import { DescriptionNftComponent } from './description-nft/description-nft.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from "./register/register.component";


@NgModule({
  declarations: [
    SingleNFTComponent,
    NftPriceComponent,
    FavoriteNftComponent,
    ListNftComponent,
    DescriptionNftComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MarketplaceModule {
}

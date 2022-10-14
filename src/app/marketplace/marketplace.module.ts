import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleNFTComponent} from './single-nft/single-nft.component';
import {NftPriceComponent} from './single-nft/nft-price/nft-price.component';
import {FavoriteNftComponent} from "./single-nft/favorite-nft/favorite-nft.component";


@NgModule({
  declarations: [
    SingleNFTComponent,
    NftPriceComponent,
    FavoriteNftComponent
  ],
  exports: [
    SingleNFTComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarketplaceModule {
}

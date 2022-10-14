import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorite-nft',
  templateUrl: './favorite-nft.component.html',
  styleUrls: ['./favorite-nft.component.scss']
})
export class FavoriteNftComponent implements OnInit {

  @Input()
  public isFavorite: boolean | undefined = false;

  @Output()
  public isFavoriteChange = new EventEmitter<boolean>();
  public btnFavorisLabel: string = "Ajouter en favoris";

  constructor() {
  }

  ngOnInit(): void {
  }

  onFavoriteBtnClick(): void {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.btnFavorisLabel = "Retirer en favoris "
    } else {
      this.btnFavorisLabel = "Ajouter en favoris"
    }
    this.isFavoriteChange.emit(this.isFavorite);
  }
}

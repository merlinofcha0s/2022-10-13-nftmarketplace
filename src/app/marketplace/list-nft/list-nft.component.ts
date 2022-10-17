import {Component, OnInit} from '@angular/core';
import {Nft} from "../model/nfts.model";
import {NftService} from "../nft.service";
import {filter, map, switchMap} from "rxjs";

@Component({
  selector: 'app-list-nft',
  templateUrl: './list-nft.component.html',
  styleUrls: ['./list-nft.component.scss']
})
export class ListNftComponent implements OnInit {

  public nfts: Array<Nft> = [];

  public isLoading : boolean = false;

  constructor(private nftService: NftService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    // Sans bonus
    // this.nftService.getAll().pipe(
    //   map(res => res.body),
    // ).subscribe(
    //   nfts => {
    //     this.nfts = nfts!.nfts;
    //   });

    // Bonus 1 et 2
    this.isLoading = true;
    this.nftService.getAll().pipe(
      map(res => res.body),
      switchMap(body => body!.nfts),
      filter(nft => nft.metadata!.hasOwnProperty('edition'))
    ).subscribe(
      nft => {
        this.isLoading = false;
        this.nfts.push(nft);
      });
  }
}

import {Component, OnInit} from '@angular/core';
import {Nft} from "../model/nfts.model";
import {NftService} from "../nft.service";
import {ActivatedRoute} from "@angular/router";
import {filter, mergeMap} from "rxjs";

@Component({
  selector: 'app-description-nft',
  templateUrl: './description-nft.component.html',
  styleUrls: ['./description-nft.component.scss']
})
export class DescriptionNftComponent implements OnInit {

  public nft: Nft = {};

  constructor(private nftService: NftService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      filter(params => params['contractid']),
      mergeMap(params =>
        this.nftService.getOne(params['blockchain'], params['contractid'], params['token']))
    ).subscribe(res => {
      if (res!.body !== null) {
        this.nft = res.body!.nft;
      }
    });
  }
}

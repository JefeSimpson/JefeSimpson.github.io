import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  title: string;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService,
              private pos: Location) {
    this.album = {} as Album;
    this.loaded = true;
    this.title = '';
  }


  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  putAlbum() {
    this.loaded = false;
    this.albumService.putAlbum(this.album).subscribe((album) => {
      this.album.title = this.title;
      this.loaded = true;
    });
  }

  toBack() {
    window.history.back();
  }

}

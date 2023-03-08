import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {Photo} from "../models";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[];
  loaded: boolean;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {
    this.photos = [];
    this.loaded = true;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getPhoto(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }

  toBack() {
    window.history.back();
  }

}

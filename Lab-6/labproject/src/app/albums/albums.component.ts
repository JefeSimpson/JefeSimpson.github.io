import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  idIterator: number;
  albums: Album[];
  newAlbum: Album;
  loaded: boolean;

  constructor(private albumService: AlbumsService) {
    this.idIterator = 100;
    this.albums = [];
    this.newAlbum = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe( (albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    this.loaded = false;
    this.albumService.postAlbum(this.newAlbum).subscribe((album) => {
      album.id = ++this.idIterator
      this.albums.push(album);
      this.loaded = true;
      this.newAlbum = {} as Album
    });
  }

  deleteAlbum(id: number) {
    this.loaded = false;
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
      this.loaded = true;
    });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html'
})
export class AlbumComponent {
  @Input({ required: true}) images: string[] = [];
  @Input({ required: false}) titles: string[] = [];
  @Input({ required: false}) paragraphs: string[] = [];
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {
  private readonly _title = 'About';
  private readonly seoTitle = inject(Title);
  private readonly metaData = inject(Meta);

  ngOnInit(): void {
    this.seoTitle.setTitle(this._title);
    this.metaData.updateTag({ name: 'description', content: `${this._title} page` });
    this.metaData.updateTag({ name: 'og:title', content: `This is ${this._title} page pokemon` });
    this.metaData.updateTag({ name: 'keyboards', content: `Pokemon, About, pokemon-ssr` });
  }
}

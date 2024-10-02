import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {
  private readonly _title = 'Contact';
  private readonly seoTitle = inject(Title);
  private readonly metaData = inject(Meta);

  ngOnInit(): void {
    this.seoTitle.setTitle(this._title);
    this.metaData.updateTag({ name: 'description', content: `${this._title} page` });
    this.metaData.updateTag({ name: 'og:title', content: `This is ${this._title} page pokemon` });
    this.metaData.updateTag({ name: 'keyboards', content: `Pokemon, Contact, pokemon-ssr` });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-item/feed-item.component';

import { FeedProviderService } from './services/feed.provider.service';

const components = [FeedListComponent, FeedItemComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components,
  providers: [FeedProviderService]
})
export class FeedModule {}

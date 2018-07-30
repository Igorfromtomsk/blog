import {NgModule} from '@angular/core';
import {Post} from './post.model';
import {PostsRepository} from './posts.repository';
import {StaticDataSource} from './static.dataSource';

@NgModule({
    providers: [PostsRepository, StaticDataSource]
})
export class ModelModule {}

import {Post} from './post.model';
import {StaticDataSource} from './static.dataSource';
import {Injectable} from '@angular/core';

@Injectable()
export class PostsRepository {
  public posts: Post[] = [];

  constructor(private source: StaticDataSource) {
    this.source.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  getPosts(): Post[] {
    return this.posts;
  }
}

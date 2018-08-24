import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PostsRepository} from '../../model/posts.repository';
import {Post} from '../../model/post.model';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;

  public post: Post = this.repository.getLastPost();
  @ViewChild('article', {read: ElementRef}) article: ElementRef;

  constructor(private repository: PostsRepository) {
  }

  edit() {
    const content = this.article.nativeElement;

    const textarea = document.createElement('textarea');
    const container = document.createElement('div');
    const iframe = '<iframe style="width: 100%; height: 100%;" src="javascript: document.open(); ' +
      'document.domain=\'' + document.domain + '\'; document.close();" frameborder="0"></iframe>';
    const parent = content.parentNode;

    textarea.value = content.innerHTML;

    parent.insertBefore(container, content);
    container.appendChild(content);
    container.appendChild(textarea);

    content.style.display = 'none';
    textarea.style.display = 'none';

    container.innerHTML = iframe + container.innerHTML;

    const Frame = container.childNodes[0];
    const FrameDoc = Frame.contentDocument;

    FrameDoc.open();
    FrameDoc.write('<html><head></head><body>' + textarea.value + '&nbsp;</body></html>');
    FrameDoc.close();
    FrameDoc.designMode = 'on';
  }

  ngOnInit() {
  }
}

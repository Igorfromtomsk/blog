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
    const content = this.article.nativeElement.innerHTML;
    const textarea = document.createElement('textarea');
    const iframe = '<iframe style="width: 100%; height: 100%;" src="javascript: document.open(); ' +
      'document.domain=\'' + document.domain + '\'; document.close();" frameborder="0"></iframe>';
    const parent = this.article.nativeElement;

    textarea.value = content;
    textarea.style.display = 'none';

    parent.innerHTML = iframe;
    parent.appendChild(textarea);

    const Frame: Node = parent.childNodes[0];
    const FrameDoc = (<HTMLIFrameElement> Frame).contentDocument;

    function getStyles() {
      const tags = document.getElementsByTagName('style');
      let styles = '';

      for (let i = 0; i < tags.length; ++i) {
        styles += tags[i].innerText;
      }

      return styles;
    }

    FrameDoc.open();
    FrameDoc.write(`<html>
        <head><style>${getStyles()}</style></head>
        <body class="iframe">${textarea.value}&nbsp;</body>
      </html>`);
    FrameDoc.close();
    FrameDoc.designMode = 'on';
  }

  ngOnInit() {
  }
}

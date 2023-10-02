import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml,} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xss';
  username: string = '';
  dangerousScript: string | undefined;
  trustedScript: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) {
  }
  onChange() {
    this.dangerousScript = this.username;
    this.trustedScript = this.sanitizer.bypassSecurityTrustHtml(this.dangerousScript);
  }
}

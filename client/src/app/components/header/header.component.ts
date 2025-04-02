import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyTranslateService } from '../../core/services/my-translate.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterLink,TranslateModule],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readonly _MyTranslateService:MyTranslateService = inject(MyTranslateService);
  readonly _TranslateService:TranslateService = inject(TranslateService);

  ngOnInit() {
  }
  change(event:Event):void{
    /* console.log((event.target as HTMLSelectElement).value); */
    let lang = (event.target as HTMLSelectElement).value;
    this._MyTranslateService.changeLang(lang);
  }
}

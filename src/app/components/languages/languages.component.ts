import { Component, OnInit } from '@angular/core';

export const LANGUAGES = [
    {
        name: 'linux',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/869px-Tux.svg.png'
    },
    {
        name: 'bash',
        url: 'https://freesvg.org/img/1296126657.png'
    },
    {
        name: 'git',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png' },
    {
        name: 'gitlab',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/1200px-GitLab_Logo.svg.png'
    },
    {
        name: 'Github',
        url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
        name: 'javascript',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        name: 'typescript',
        url: 'https://cdn.worldvectorlogo.com/logos/typescript.svg'
    },
    {
        name: 'angular',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png'
    },
    {
        name: 'Vue',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'
    },
    {
        name: 'firebase',
        url: 'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png'},
    {
        name: 'java',
        url: 'https://cpng.pikpng.com/pngl/s/204-2047555_datei-java-logo-svg-java-logo-svg-clipart.png'
    },
    {
        name: 'haskell',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/800px-Haskell-Logo.svg.png'
    },
    {
        name: 'ruby',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png'
    },
    {
        name: 'c',
        url: 'https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png'
    },
    {
        name: 'c++',
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Images_200px-ISO_C%2B%2B_Logo_svg.png'
    },
    {
        name: 'psql',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
    },
    {
        name: 'mapserver',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/MapServer_logo.svg/1200px-MapServer_logo.svg.png'
    },
    {
        name: 'plantuml',
        url: 'https://lh3.googleusercontent.com/agXY3BUcC-ngVh9Vg6gG46ezZ4y_rbM0vzzcx4YiOOOckUVwD9S31m5XsmS6RvJJYdymd1t4=w128-h128-e365'
    },
    {
        name: 'unreal',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/UE_Logo_Black_Centered.svg/940px-UE_Logo_Black_Centered.svg.png'
    },
    {
        name: 'latex',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1280px-LaTeX_logo.svg.png'
    },
    {
        name: 'markdown',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Markdown-mark-solid.svg/1280px-Markdown-mark-solid.svg.png'
    },
    ]

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  private _languages = LANGUAGES;

  constructor() { }

  ngOnInit() {
  }

  public get languages(){
    return this._languages;
  }

}

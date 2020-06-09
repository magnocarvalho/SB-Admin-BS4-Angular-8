import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FbApiService } from '../../api/fb-api.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [routerTransition()]
})
export class FormComponent implements OnInit {
  constructor(public api: FbApiService) {}
  site = {
    id: '',
    infos: { titulo: '', sobre: '', email: '', candidato: '', telefone: '', endereco: '', logo_site: '' },
    redes_social: {
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: '',
      youtube: '',
      capa_facebook: '',
      capa_twitter: '',
      capa_instagram: '',
      capa_youtube: ''
    },
    layout: {
      principal: '',
      secundaria: '',
      cor_texto: '',
      cor_versu: ''
    },
    biografia: { biografia: '', imagem_biografia: '', texto_pagina: '' },
    atuacao: { emendas: '', projetos: '', comissoes: '', noticias: '' },
    podcasts: {
      spotify: '',
      itunes: '',
      soundclound: '',
      deezer: ''
    }
  };
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote'
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1'
      }
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      [
        'insertImage',
        'insertVideo',
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'toggleEditorMode'
      ]
    ]
  };

  ngOnInit() {
    this.api.getAlexPager().subscribe((data) => {
      this.site = data.payload.data() as any;
    });
  }

  onSubmit($event, formulario) {
    // console.log({ $event, formulario, site: this.site });
    this.api.updateSiteAlex(this.site);
  }
  onFileChange(event, option) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        switch (option) {
          case 1:
            this.site.biografia.imagem_biografia = reader.result as string;
            break;
          case 2:
            this.site.redes_social.capa_facebook = reader.result as string;
            break;
          case 3:
            this.site.redes_social.capa_instagram = reader.result as string;
            break;
          case 4:
            this.site.redes_social.capa_twitter = reader.result as string;
            break;
          case 5:
            this.site.redes_social.capa_youtube = reader.result as string;
            break;
          case 6:
            this.site.infos.logo_site = reader.result as string;
            break;
          default:
            break;
        }
      };
    }
  }
}

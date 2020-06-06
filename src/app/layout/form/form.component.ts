import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [routerTransition()]
})
export class FormComponent implements OnInit {
  constructor() {}
  site = {
    infos: { titulo: '', sobre: '', email: '', candidato: '', telefone: '', endereco: '' },
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
    biografia: { biografia: '', imagem_biografia: '' },
    atuacao: { emendas: '', projetos: '', comissoes: '', noticias: '' },
    podcasts: {
      spotify: '',
      itunes: '',
      soundclound: '',
      deezer: ''
    }
  };
  imagens = {
    capa_facebook: '',
    capa_twitter: '',
    capa_instagram: '',
    capa_youtube: '',
    imagem_biografia: ''
  };

  ngOnInit() {}

  onSubmit($event, formulario) {
    console.log({ $event, formulario, site: this.site });
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
            this.imagens.imagem_biografia = reader.result as string;
            break;
        
          default:
            break;
        }
      };
    }
  }
}

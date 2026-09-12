import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

interface Testimonials {
  name: string;
  localization: string;
  device: string;
  text: string;
  grade: number;
  photo: string
}

@Component({
  imports: [],
  selector: 'app-section',
  styleUrl: './section.css',
  templateUrl: './section.html',
})
export class Section {
  authService = inject(AuthService);

  testimonials: Testimonials[] = [
    {
      name: 'Eduardo Pugliese Benvenut',
      localization: 'Vancouver - BC',
      device: 'Nokia 3310',
      text: 'Cara, olha essa geometria... olha a carcaça original desse Nokia 3310, tá simplesmente impecável! Não tem uma quina gasta, não tem um pixel morto. A bateria dura dias, rapaz! E quando eu liguei e tocou a musiquinha clássica? Viajei no tempo na hora. Isso aqui não é só um telefone não, olha que coisa absurda, olha essa estética!',
      grade: 5,
      photo: '/images/clients/Eduardo-Pugliese-Benvenut.png'
    },
    {
      name: 'Gustavo Sanches Matsufugi',
      localization: 'São Paulo - SP',
      device: 'Motorola Razr V3',
      text: 'Caraca, não é possível... É O WESKER?! NÃO, É O RAZR V3! Olha o estalo metálico dessa tampa flip, rapaziada, que bagulho satisfatório! Era o meu sonho de adolescência todinho! E o negócio veio impecável, super higienizado, 100% funcionando e com carregador na caixa! Que atendimento sinistro, nota 10, que momento épico!',
      grade: 5,
      photo: '/images/clients/Gustavo-Sanches-Matsufugi.png'
    },
    {
      name: 'Ariel Guareschi',
      localization: 'Ampére - PR',
      device: 'Sony Ericsson W800i Walkman',
      text: 'Então crianças, o som da linha Walkman continua imbatível. A qualidade dos graves no fone original me fez redescobrir minhas músicas antigas. Uma relíquia que agora tem lugar de destaque na minha estante.',
      grade: 5,
      photo: '/images/clients/Ariel-Guareschi.png'
    }
  ];

  saveSuccess = false;

  salvarDepoimento(cidadeInput: HTMLInputElement, textareaInput: HTMLTextAreaElement) {
    if (!this.authService.isLoggedIn()) return;
    this.saveSuccess = true;

    if (cidadeInput) cidadeInput.value = '';
    if (textareaInput) textareaInput.value = '';

    setTimeout(() => {
      this.saveSuccess = false;
    }, 5000);
  }

  limparFormulario() {
    this.saveSuccess = false;
  }
}


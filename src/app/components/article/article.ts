import { Component } from '@angular/core';

export interface DeviceSpecs {
  year: string;
  dimensions: string;
  weight: string;
  screen: string;
  battery: string;
  camera: string;
  storage: string;
  highlights: string;
  price: string;
  availability: string;
  descont: string;
}

export interface Devices {
  title: string;
  description: string;
  photo: string;
  specs: DeviceSpecs;
}

@Component({
  imports: [],
  selector: 'app-article',
  styleUrl: './article.css',
  templateUrl: './article.html',
})
export class Article {
  selectedDevice: Devices | null = null;

  openSpecs(device: Devices) {
    this.selectedDevice = device;
  }

  closeSpecs() {
    this.selectedDevice = null;
  }

  devices: Devices[] = [
    {
      title: 'NOKIA 3310',
      description: 'Lançado na virada do milênio, o Nokia 3310 tornou-se um fenômeno cultural instantâneo e o maior ícone da era "pré-smartphone", vendendo mais de 126 milhões de unidades em todo o mundo. Conhecido popularmente por sua lendária robustez e construção "indestrutível", ele definiu a experiência móvel para uma geração inteira. Suas características eram simples, mas executadas com perfeição: uma battery que durava dias (ou semanas em standby), uma carcaça Xpress-on personalizável que permitia aos usuários trocar as capas para combinar com seu estilo e uma interface de usuário intuitiva. Mais do que um aparelho para chamadas e mensagens SMS (que permitiam 459 caracteres, três vezes mais que o padrão), ele era uma central de entretenimento pessoal da época. O 3310 trazia o icônico Compositor de Toques, permitindo aos usuários criar suas próprias melodias monofônicas, e vinha pré-carregado com quatro jogos, incluindo o lendário e viciante Snake II (o jogo da cobrinha), que solidificou o aparelho como o primeiro "gaming phone" popular da história...',
      photo: '/images/cell-phones/Nokia-3310.jpg',
      specs: {
        year: '2000',
        dimensions: '113 x 48 x 22 mm',
        weight: '133 g',
        screen: 'Monocromática (84 x 48 pixels)',
        battery: '900 mAh (até 260h em standby)',
        camera: 'Não possui',
        storage: '2 KB',
        highlights: 'Jogo da Cobrinha (Snake II), capas trocáveis e construção ultra resistente.',
        price: 'R$350,00',
        availability: '102',
        descont: 'N/A'
      }
    },
    {
      title: 'MOTOROLA RAZR V3',
      description: 'O Motorola Razr V3 não foi apenas um celular; foi um acessório de moda de alta tecnologia que definiu o ápice do design e do estilo nos years 2000. Lançado como um item de luxo premium, ele rapidamente se tornou um símbolo de status, usado por celebridades e em produções de Hollywood, alcançando a marca de 130 milhões de unidades vendidas. O que o tornava tão desejável era sua espessura impossivelmente fina para a época (apenas 13.9 mm) e seu corpo construído em alumínio aeronáutico, que lhe conferia uma sensação fria, metálica e sofisticada ao toque. O design flip era complementado por um teclado interno gravado a laser a partir de uma única folha de metal, com uma iluminação eletroluminescente azulada que brilhava no escuro. O mecanismo flip do V3 oferecia uma das experiências de usuário mais satisfatórias da história da telefonia: um estalo metálico e tátil, perfeitamente equilibrado, ao abrir para atender e fechar para encerrar uma ligação. Ele trazia inovação com seu display interno de alta resolução (para 2004), câmera VGA e conectividade Bluetooth, mas foi sua estética futurista e elegante que o imortalizou como um clássico do design industrial.',
      photo: '/images/cell-phones/Motorola-Razr-V3.jpg',
      specs: {
        year: '2004',
        dimensions: '98 x 53 x 13.9 mm',
        weight: '95 g',
        screen: 'TFT 2.2" (176 x 220) + Externa CSTN',
        battery: '680 mAh',
        camera: 'VGA (640 x 480 pixels)',
        storage: '5,5 MB',
        highlights: 'Corpo em alumínio aeronáutico, teclado gravado a laser e mecanismo flip icônico.',
        price: 'R$800,00',
        availability: '298',
        descont: '28% de Desconto'
      }
    },
    {
      title: 'SONY ERICSSON W800I WALKMAN',
      description: 'O Sony Ericsson W800i Walkman foi um divisor de águas que revolucionou o mercado de telefonia ao ser o primeiro aparelho a integrar, com sucesso e qualidade, a lendária assinatura "Walkman" da Sony em um celular. Ele transformou a ideia de música portátil, competindo diretamente com os MP3 players dedicados da época. O W800i não apenas reproduzia arquivos de música; ele oferecia uma experiência sonora de alta fidelidade com fones intra-auriculares premium incluídos na caixa, e uma porta dedicada "Fast Port" para uma saída de áudio superior. Seu acabamento em laranja e branco vibrante com o icônico logo "W" era instantaneamente reconhecível e jovem. O software trazia um player MP3 Walkman dedicado e intuitivo, acessível por um botão físico, e vinha com um cartão Memory Stick Duo de 512MB (expansível), capaz de armazenar cerca de 150 músicas. Além do foco musical, o W800i era um aparelho de especificações altas, com uma excelente câmera de 2 megapixels com foco automático, modo macro e uma tampa deslizante de proteção de lente, consolidando-se como uma central de mídia portátil e um precursor dos smartphones focados em entretenimento.',
      photo: '/images/cell-phones/Sony-Ericsson-W800i-Walkman.jpg',
      specs: {
        year: '2005',
        dimensions: '100 x 46 x 20.5 mm',
        weight: '99 g',
        screen: 'TFT 1.8" (176 x 220 pixels, 256k cores)',
        battery: '900 mAh (até 30 horas de áudio)',
        camera: '2.0 Megapixels com autofoco e flash LED',
        storage: '34 MB',
        highlights: 'Selo oficial Walkman, fones intra-auriculares premium e cartão Memory Stick 512MB.',
        price: 'R$750,00',
        availability: '32',
        descont: 'N/A'
      }
    }
  ];
}

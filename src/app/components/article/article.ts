import { Component } from '@angular/core';

interface Devices {
  title: string;
  description: string;
  photo: string
}

@Component({
  imports: [],
  selector: 'app-article',
  styleUrl: './article.css',
  templateUrl: './article.html',
})
export class Article {
  devices: Devices[] = [
    {
      title: 'Nokia 3310',
      description: 'Lançado na virada do milênio, o Nokia 3310 tornou-se um fenômeno cultural instantâneo e o maior ícone da era "pré-smartphone", vendendo mais de 126 milhões de unidades em todo o mundo. Conhecido popularmente por sua lendária robustez e construção "indestrutível", ele definiu a experiência móvel para uma geração inteira. Suas características eram simples, mas executadas com perfeição: uma bateria que durava dias (ou semanas em standby), uma carcaça Xpress-on personalizável que permitia aos usuários trocar as capas para combinar com seu estilo e uma interface de usuário intuitiva. Mais do que um aparelho para chamadas e mensagens SMS (que permitiam 459 caracteres, três vezes mais que o padrão), ele era uma central de entretenimento pessoal da época. O 3310 trazia o icônico Compositor de Toques, permitindo aos usuários criar suas próprias melodias monofônicas, e vinha pré-carregado com quatro jogos, incluindo o lendário e viciante Snake II (o jogo da cobrinha), que solidificou o aparelho como o primeiro "gaming phone" popular da história...',
      photo: '/images/cell-phones/Nokia-3310.jpg'
    },
    {
      title: 'Motorola Razr V3',
      description: 'O Motorola Razr V3 não foi apenas um celular; foi um acessório de moda de alta tecnologia que definiu o ápice do design e do estilo nos anos 2000. Lançado como um item de luxo premium, ele rapidamente se tornou um símbolo de status, usado por celebridades e em produções de Hollywood, alcançando a marca de 130 milhões de unidades vendidas. O que o tornava tão desejável era sua espessura impossivelmente fina para a época (apenas 13.9 mm) e seu corpo construído em alumínio aeronáutico, que lhe conferia uma sensação fria, metálica e sofisticada ao toque. O design flip era complementado por um teclado interno gravado a laser a partir de uma única folha de metal, com uma iluminação eletroluminescente azulada que brilhava no escuro. O mecanismo flip do V3 oferecia uma das experiências de usuário mais satisfatórias da história da telefonia: um estalo metálico e tátil, perfeitamente equilibrado, ao abrir para atender e fechar para encerrar uma ligação. Ele trazia inovação com seu display interno de alta resolução (para 2004), câmera VGA e conectividade Bluetooth, mas foi sua estética futurista e elegante que o imortalizou como um clássico do design industrial.',
      photo: '/images/cell-phones/Motorola-Razr-V3.jpg'
    },
    {
      title: 'Sony Ericsson W800i Walkman',
      description: 'O Sony Ericsson W800i Walkman foi um divisor de águas que revolucionou o mercado de telefonia ao ser o primeiro aparelho a integrar, com sucesso e qualidade, a lendária assinatura "Walkman" da Sony em um celular. Ele transformou a ideia de música portátil, competindo diretamente com os MP3 players dedicados da época. O W800i não apenas reproduzia arquivos de música; ele oferecia uma experiência sonora de alta fidelidade com fones intra-auriculares premium incluídos na caixa, e uma porta dedicada "Fast Port" para uma saída de áudio superior. Seu acabamento em laranja e branco vibrante com o icônico logo "W" era instantaneamente reconhecível e jovem. O software trazia um player MP3 Walkman dedicado e intuitivo, acessível por um botão físico, e vinha com um cartão Memory Stick Duo de 512MB (expansível), capaz de armazenar cerca de 150 músicas. Além do foco musical, o W800i era um aparelho de especificações altas, com uma excelente câmera de 2 megapixels com foco automático, modo macro e uma tampa deslizante de proteção de lente, consolidando-se como uma central de mídia portátil e um precursor dos smartphones focados em entretenimento.',
      photo: '/images/cell-phones/Sony-Ericsson-W800i-Walkman.jpg'
    }
  ]
}

// Componentes
import Sobre from '../../components/portfolio_example1/sobre';
import Experiencia from '../../components/portfolio_example1/experiencia';
import Educacao from '../../components/portfolio_example1/educacao';
import Habilidade from '../../components/portfolio_example1/habilidade';
import Interesse from '../../components/portfolio_example1/interesse';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

// Ícones
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

// .jpg, .png, or .webp files:
import profilePic from '../../../public/foto.png'

// Cores
import { blue, red, blueGrey, lightBlue, green } from '@mui/material/colors';

export default function ivan() {
    const eu = {
        nomeCompleto: 'Ivan Schulz Junior',
        endereco: 'Rua Eufrasio Cortes 183 · LAPA, PR',
        telefone: '(41) 9 9654-6766',
        email: 'ivanschulz70@gmail.com',
        minhaCarreira: 'Desde sempre me interreso pela area de TI, ainda iniciante procuro estudar e me aprimorar de forma produtiva para futuramente estar me destacando na area',
        redesSociais: [
            {
                rede: "GitHub",
                url: "https://github.com/IvanSchulz70",
                icone: <GitHubIcon/>,
                cor: blueGrey[500],
            },
            {
                rede: "Twitter",
                url: "https://twitter.com/IvanSchulz70",
                icone: <TwitterIcon/>,
                cor: blue[500],
            },
            {
                rede: "Instagram",
                url: "https://www.instagram.com/ivanschulzjr/",
                icone: <InstagramIcon/>,
                cor: red[500],
            },
        ],
        experiencias: [
            {
                titulo: 'Admisntrativo - Gastaí Comércio de Gás',
                subTitulo: 'Assistente',
                texto: 'Fazer o atendimento ao balcão, controle de caixa e estoque e atendimento ao telefone',
                periodo: '2021 - Presente',
            },
        ],
        educacoes: [
            {
                titulo: 'UNIVERSIDADE POSITIVO',
                subTitulo: 'BACHARELADO EM ENGENHARIA DE SOFTWARE',
                texto: 'Estudo atualmente na faculdade da UP',
                periodo: '2021 - 2024 (Em andamento)',
            },
            {
                titulo: 'Colégio Técnico Industrial - CTI',
                subTitulo: 'Ensino Médio Completo',
                texto: 'Ensino Médio',
                periodo: '2017 - 2020',
            },
        ],
        habilidades: {
            linguagens: [
                {
                    linguagem: "HTML",
                    icone: <HtmlIcon/>,
                },
                {
                    linguagem: "CSS",
                    icone: <CssIcon/>,
                },
            ],            
            interesses: [
                {
                    descricao: "Gostaria de fazer parte da equipe de funcionários da empresa, tendo o objetivo de crescer profissionalmente e de maneira produtiva, contribuindo para o desenvolvimento da organização como um todo.",
                    icone: <BubbleChartIcon sx={{ color: BubbleChartIcon[500] }}/>,
                },
                {
                    descricao: "Aprender linguagens novas",
                    icone: <BubbleChartIcon sx={{ color: BubbleChartIcon[500] }}/>,
                },
            ],
        },
    }

    return (
        <>
        {/* <!-- Navegação --> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#about">
                <span class="d-block d-lg-none">{eu.nomeCompleto}</span>
                <div style={{borderRadius: 250, overflow: 'hidden'}}>
                    <Avatar alt={eu.nomeCompleto} sx={{ width: 120, height: 120 }}>
                        <Image src={profilePic} />
                    </Avatar>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Sobre</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experiência</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Educação</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Habilidades</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interesses</a></li>
                </ul>
            </div>
        </nav>
        {/* <!-- Conteúdo --> */}
        <div class="container-fluid p-0">
            {/* <!-- Sobre--> */}
            <Sobre props={eu}/>
            <hr class="m-0" />
            {/* <!-- Experiência --> */}
            <Experiencia props={eu}/>
            <hr class="m-0" />
            {/* <!-- Educação--> */}
            <Educacao props={eu}/>
            <hr class="m-0" />
            {/* <!-- Habilidades--> */}
            <Habilidade props={eu}/>
            <hr class="m-0" />
            {/* <!-- Interesses --> */}
            <Interesse props={eu}/>
        </div>
    </>
    )
}
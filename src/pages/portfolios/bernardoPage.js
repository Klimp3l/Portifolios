// Componentes
import Sobre from '../../components/portfolio_example1/sobre';
import Experiencia from '../../components/portfolio_example1/experiencia';
import Educacao from '../../components/portfolio_example1/educacao';
import Habilidade from '../../components/portfolio_example1/habilidade';
import Interesse from '../../components/portfolio_example1/interesse';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

// Ícones
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CheckIcon from '@mui/icons-material/Check';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AppsIcon from '@mui/icons-material/Apps';

// .jpg, .png, or .webp files:
import profilePic from '../../../public/bernardo.jpg'

// Cores
import { blue, red, blueGrey, lightBlue, green } from '@mui/material/colors';

export default function Bernardo() {
    const eu = {
        nomeCompleto: 'Bernardo Kozan Klimpel',
        endereco: 'Rua Tomazina 239 · CURITIBA, PR',
        telefone: '(41) 9 8728-4354',
        email: 'bernardokozan@gmail.com',
        minhaCarreira: 'Desde sempre gostei de jogar jogos de lógica e descobrir resoluções dos problemas. tentando ajudar minah mãe com alguma coisa que controlava o caixa da sua empresa, desenvolvi meyu primeiro app o MyCashier no excel e desde então venho ajudando as pessoas ao meu redor com meus códigos.',
        redesSociais: [
            {
                rede: "GitHub",
                url: "https://github.com/Klimp3l",
                icone: <GitHubIcon/>,
                cor: blueGrey[500],
            },
            {
                rede: "Twitter",
                url: "https://twitter.com/klimp3l",
                icone: <TwitterIcon/>,
                cor: blue[500],
            },
            {
                rede: "Instagram",
                url: "https://www.instagram.com/bernardokozan/",
                icone: <InstagramIcon/>,
                cor: red[500],
            },
        ],
        experiencias: [
            {
                titulo: 'Programador - IanDev Sistemas',
                subTitulo: 'Júnior',
                texto: 'Sou programador júnior na empresa IanDev',
                periodo: '2022 - Presente',
            },
            {
                titulo: 'Auditor - IanDev Sistemas',
                subTitulo: 'Auditoria de servidores',
                texto: 'Realizava manutenção e pequenas correções de erros em servidores',
                periodo: 'Dezembro 2020 - 2021',
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
                titulo: 'Dom Bosco - Muller',
                subTitulo: '3º do ENSINO MÉDIO',
                texto: 'Curso preparatório pro vestibular',
                periodo: '2020 - 2020',
            },
            {
                titulo: 'SESI - Fesp',
                subTitulo: '1º e 2º do ENSINO MÉDIO',
                texto: 'Ensino médio no sesi onde entrei para o time de robótica da escola',
                periodo: '2018 - 2019',
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
                {
                    linguagem: "JS",
                    icone: <JavascriptIcon/>,
                },
                {
                    linguagem: "SQL (Banco de Dados)",
                    icone: <AppsIcon/>,
                },
            ],
            workflows: [
                {
                    descricao: "Construção de Aplicações Web",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
                {
                    descricao: "Construção de Banco de Dados",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
                {
                    descricao: "React",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
                {
                    descricao: "Framework - Next JS",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
                {
                    descricao: "Framework - Material UI",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
            ],
            interesses: [
                {
                    descricao: "Conseguir abstrair o máximo que consegui das informações passadas à mim em relação a minha carreira.",
                    icone: <BubbleChartIcon sx={{ color: BubbleChartIcon[500] }}/>,
                },
                {
                    descricao: "Desenvolver um site completo para a empresa TENTACLE",
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
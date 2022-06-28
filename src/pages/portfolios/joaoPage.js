// Componentes
import Sobre from '../../components/portfolio_example1/sobre';
import Experiencia from '../../components/portfolio_example1/experiencia';
import Educacao from '../../components/portfolio_example1/educacao';
import Habilidade from '../../components/portfolio_example1/habilidade';
import Interesse from '../../components/portfolio_example1/interesse';
import Certificado from '../../components/portfolio_example1/certificado';
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
import PhpIcon from '@mui/icons-material/Php';
import CheckIcon from '@mui/icons-material/Check';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import profilePic from '../../../public/foto-joao.jpg'

// Cores
import { blue, red, blueGrey, lightBlue, green } from '@mui/material/colors';

export default function Joao() {
    const eu = {
        nomeCompleto: 'JOÃO PEDRO MEIRA MESSIAS',
        endereco: 'SÃO MIGUEL DO IGUAÇU 133 · CURITIBA, PR',
        telefone: '(41) 9 9508-5830',
        email: 'dev.joaopedromessias@gmail.com',
        minhaCarreira: 'Trabalhando e estudando Full-Stack, sou um estudante que ama escrever código e um amante da tecnologia.\nMuito contente em conseguir tirar o máximo proveito do que aprendo.\nAtualmente estou com um projeto em andamento voltado para a área de desenvolvimento de aplicações e serviços para streamers. (stocked.gg)',
        redesSociais: [
            {
                rede: "LinkedIn",
                url: "https://www.linkedin.com/in/jo%C3%A3o-pedro-meira-messias/",
                icone: <LinkedInIcon/>,
                cor: lightBlue[500],
            },
            {
                rede: "GitHub",
                url: "https://github.com/Joao-Messias",
                icone: <GitHubIcon/>,
                cor: blueGrey[500],
            },
            {
                rede: "Twitter",
                url: "https://twitter.com/_dino33",
                icone: <TwitterIcon/>,
                cor: blue[500],
            },
            {
                rede: "Instagram",
                url: "https://www.instagram.com/_dino33/",
                icone: <InstagramIcon/>,
                cor: red[500],
            },
        ],
        experiencias: [
            {
                titulo: 'CO-FOUNDER STOCKED.GG',
                subTitulo: 'CO-FUNDADOR DA STOCKED.GG',
                texto: 'A Stocked.gg é uma plataforma criada para ajudar pequenos e médios criadores de conteúdo no universo de livestreaming, explorando suas melhores qualidades e fazendo descobertas incríveis através de nossas ferramentas.',
                periodo: 'Abril 2022 - Presente',
            },
            {
                titulo: 'FREELANCER',
                subTitulo: 'FREELANCER WORDPRESS , 2021',
                texto: 'Realizei manutenção e construção de sites em wordpress.\nFoi um grande desafio e consegui evoluir muito com esses projetos e serviços que realizei.',
                periodo: '2021 - Janeiro 2022',
            },
        ],
        educacoes: [
            {
                titulo: 'UNIVERSIDADE POSITIVO',
                subTitulo: 'BACHARELADO EM ENGENHARIA DE SOFTWARE',
                texto: 'Onde participei da Maratona de Programação em 2021.',
                periodo: '2021 - 2024 (Em andamento)',
            },
            {
                titulo: 'COLÉGIO MARISTA SANTA MARIA',
                subTitulo: 'ENSINO MÉDIO',
                texto: 'Participação de Maratonas matemáticas Canguru representando o colégio.',
                periodo: '2018 - 2020',
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
                    linguagem: "PHP",
                    icone: <PhpIcon/>,
                },
            ],
            workflows: [
                {
                    descricao: "Construção de Aplicações Web",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
                {
                    descricao: "Construção de Aplicações Responsivas",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
                {
                    descricao: "Construção de E-commerce em Wordpress",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
                {
                    descricao: "Framework - Laravel",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
                {
                    descricao: "Framework - Bootstrap",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
                {
                    descricao: "Framework - Tailwindcss",
                    icone: <CheckIcon sx={{ color: green[500] }}/>,
                },
            ],
            interesses: [
                {
                    descricao: "Conseguir evoluir como profissional atuando nessa área da tecnologia que tanto amo.",
                    icone: <BubbleChartIcon sx={{ color: BubbleChartIcon[500] }}/>,
                },
                {
                    descricao: "Fazer com que a stocked.gg seja uma das maiores empresas para gerenciamento de streamers do Brasil.",
                    icone: <BubbleChartIcon sx={{ color: BubbleChartIcon[500] }}/>,
                },
            ],
        },
        certificados: [
            {
                titulo: 'Wordpress 2021 - Udemy',
                href: 'https://www.udemy.com/certificate/UC-26d1ffb9-75fa-48a3-bdfe-9ee3185b80ad/',
                icone: <WorkspacePremiumIcon/>,
            },
            {
                titulo: 'Front-end e Lógica de programação - Alura',
                href: 'https://cursos.alura.com.br/user/joaomm/fullCertificate/5ccd582d0411b9583a9e51c2a5e12f45',
                icone: <WorkspacePremiumIcon/>,
            },
        ]
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
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Certificados</a></li>
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
            <hr class="m-0" />
            {/* <!-- Certificados --> */}
            <Certificado props={eu}/>
        </div>
    </>
    )
}
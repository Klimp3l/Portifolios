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
import profilePic from '../../../public/Milena.jpeg'

// Cores
import { blue, red, blueGrey, lightBlue, green } from '@mui/material/colors';

export default function Milena() {
    const eu = {
        nomeCompleto: 'Milena Titericz Schrickte',
        endereco: 'Rua Francisco Marochi · CURITIBA, PR',
        telefone: '(41) 9 8866-1419',
        email: 'milena.schrickte@gmail.com',
        minhaCarreira: 'Desde criança sou apaixonada em tecnologia e dedico meu tempo para aprender sobre a área. Atualmente trabalho com programas como excel e CRM e estou realizando treinamento do ERP SAP Business One. ',
        redesSociais: [
            {
                rede: "GitHub",
                url: "https://github.com/MihTss",
                icone: <GitHubIcon/>,
                cor: blueGrey[500],
            },
            // {
            //     rede: "Twitter",
            //     url: "https://twitter.com/klimp3l",
            //     icone: <TwitterIcon/>,
            //     cor: blue[500],
            // },
            {
                rede: "Instagram",
                url: "https://www.instagram.com/mih.tss/",
                icone: <InstagramIcon/>,
                cor: red[500],
            },
        ],
        experiencias: [
            {
                titulo: 'Administradora Financeira - Alma Sistemas de Gestão Empresarial',
                subTitulo: 'Administração de Recursos Humanos e Relacionamento com os Clientes.  ',
                texto: 'Realizava a emissão de notas Fiscais, atualizava o CRM pelo Sistema Protheus e administrava a área financeira da empresa',
                periodo: 'Fevereiro 2021 - Março 2022',
            },
            {
                titulo: 'Consultoria - Horizon ERP',
                subTitulo: 'Consultoria de TI',
                texto: 'Trbabalho com consultoria de softwares básicos de linguagens de marcação, e estou realizando treinamento do software SAP Business One',
                periodo: 'Março 2022 - Presente',
            },
        ],
        educacoes: [
            {
                titulo: 'UNIVERSIDADE POSITIVO',
                subTitulo: 'BACHARELADO EM ENGENHARIA DE SOFTWARE',
                texto: 'Atualmente cursando o 3° Período do curso',
                periodo: '2021 - 2024 (Em andamento)',
            },
            {
                titulo: 'Colégio Passionista Nossa Senhora Menina',
                subTitulo: '1º, 2º e 3º ano do ENSINO MÉDIO',
                texto: 'Ensino Médio Completo',
                periodo: '2019 - 2021',
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
                  descricao: "Elaboração de planilhas",
                  icone: <CheckIcon sx={{ color: green[500] }}/>,
              },                           
            ],
            interesses: [
                {
                    descricao: "Tenho sempre como objetivo focar em meus resultados, ser proativa e comunicativa, focar em meus estudos, bem como estar sempre em constante evolução",
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
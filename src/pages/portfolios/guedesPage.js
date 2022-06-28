import styles from '../../styles/guedes.module.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GamesIcon from '@mui/icons-material/Games';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import { blueGrey } from '@mui/material/colors';


export default function Guedes() {
    return (
        <div class={styles.body}>
            <div class={styles.main}>
                <nav class={styles.nav}>
                    <h2 class={styles.logo}>Guedes <span>Portfolio</span></h2>
                    <ul>
                    <li><a href="D:\Programar\FrontEnd\site_projeto.html">Home</a></li>
                    <li><a href="#">Sobre mim</a></li>
                    <li><a href="#">Habilidades</a></li>
                    </ul>
                    <a href="#"  class={styles.button}>Meus contatos</a>
                </nav>
            
                <div  class={styles.imagemCima}></div>
                <div  class={styles.content}>
                    <h4>Olá, Eu sou o</h4>
                    <h1>Guedes</h1>
                    <h3>Full Stack Dev & Marketing</h3>
                </div>
            </div>
        
            {/* // <!-- Seção Sobre mim--> */}
            <div  class={styles.about}>
                <div  class={styles.aboutMain}>
                    <img src="css/astronauta.png" />
                    <div  class={styles.textoAbout}>
                    <h2>Sobre Mim</h2>
                    <h5>Criando coisas desde <span>sempre</span></h5>
                    <p>
                        Atualmente estou cursando Engenharia de Software na
                        <span>Universade Positivo</span> e claro, sempre estudando
                        paralelamente para me tornar um desenvolvedor Full Stack.
                    </p>
                    <p>
                        Sou apaixonado por criar soluções que resolvam os problemas das
                        pessoas. Também tenho paixão por <span>Marketing</span>, nele
                        consigo entender melhor como a mente humana funciona e consequemente
                        criar soluções muita mais práticas e lucrativas.
                    </p>
                    <button  class={styles.button2}>Me chame para conversar!</button>
                    </div>
                </div>
            </div>
        
            {/* // <!-- Seção Habilidades--> */}
            <div  class={styles.habilidades}>
                <div  class={styles.title}>
                    <h2>Minhas Habilidades</h2>
                </div>
            
                <div  class={styles.box}>
                    <div  class={styles.card}>
                    <ViewWeekIcon sx={{ fontSize: 40, color: blueGrey[500] }}/>
                    <h5>Desenvolvimento Web</h5>
                    <div class={styles.textos}>
                        <p>
                        Estudando e melhorando todos os dias para me tornar Full Stack
                        Web.
                        </p>
            
                        <p className={styles.textCenter}>
                        <a class={styles.button2} href="#"> Saiba Mais</a>
                        </p>
                    </div>
                    </div>
            
                    <div class={styles.card}>
                    <GamesIcon sx={{ fontSize: 40, color: blueGrey[500] }}/>
                    <h5>Desenvolvimento de Jogos</h5>
                    <div class={styles.textos}>
                        <p>
                        Comecei minha jornada de programação com jogos, especificamente no
                        Roblox usando a linguagem LUA. Lá aprendi muita coisa e
                        principalmente POO.
                        </p>
            
                        <p className={styles.textCenter}>
                        <a class={styles.button2} href="#"> Saiba Mais</a>
                        </p>
                    </div>
                    </div>
            
                    <div class={styles.card}>
                    <MenuBookIcon sx={{ fontSize: 40, color: blueGrey[500] }}/>
                    <h5>Marketing</h5>
                    <div class={styles.textos}>
                        <p>
                        Sem Marketing nenhum projeto cresce. Sempre tive isso em mente e
                        gosto muito de aprender todo dia sobre. Copywriting e Media Buying
                        atualmente são Skills muito importantes.
                        </p>
            
                        <p className={styles.textCenter}>
                        <a class={styles.button2} href="#"> Saiba Mais</a>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        
            {/* // <!-- Footer -->> */}
            <footer class={styles.footer}>
                <p>Gustavo Guedes</p>
                <p>Vamos Conversar. Networking vale mais do que dinheiro!</p>
                <div class={styles.social}>
                    <a href="https://www.instagram.com/gustavoguedess/">
                        <InstagramIcon/>
                    </a>
                    <a href="https://github.com/guedesz">
                        <GitHubIcon/>
                    </a>
                </div>
                <p class={styles.final}>Todos os direitos reservados 2022.</p>
            </footer>
        </div>
    )
}
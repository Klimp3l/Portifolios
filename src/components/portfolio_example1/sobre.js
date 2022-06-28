import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

export default function Sobre(props) {
    return (
        <section class="resume-section" id="about">
            <div class="resume-section-content">
                <h1 class="mb-0">
                    {props.props.nomeCompleto}
                </h1>
                <div class="subheading mb-5">
                    {props.props.endereco} · {props.props.telefone}
                    {'\n'}<a href="mailto:dev.joaopedromessias@gmail.com">{props.props.email}</a>
                </div>
                <p class="lead mb-5">
                    {props.props.minhaCarreira}
                </p>
                <Stack direction="row" spacing={2}>
                    {props.props.redesSociais.map(rede => {
                        return (
                            <a href={rede.url}>
                                <Avatar sx={{ width: 56, height: 56, bgcolor: rede.cor }}>
                                   {rede.icone}
                                </Avatar>
                            </a>
                        )
                    })}
                </Stack>
            </div>
        </section>
    )
}
import Stack from '@mui/material/Stack';

export default function Certificado(props) {
    return (
        <section class="resume-section" id="awards">
            <div class="resume-section-content">
                <h2 class="mb-5">Certificados</h2>
                <Stack spacing={2}>
                    {props.props.certificados.map(certificado => {
                        return (
                            <a href={certificado.href}>
                                <Stack direction="row" spacing={2}>
                                    {certificado.icone}
                                    <span>{certificado.titulo}</span>
                                </Stack>
                            </a>
                        )
                    })}
                </Stack>
            </div>
        </section>
    )
}
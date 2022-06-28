import Stack from '@mui/material/Stack';

export default function Interesse(props) {
    return (
        <section class="resume-section" id="interests">
            <div class="resume-section-content">
                <h2 class="mb-5">Interesses</h2>
                <Stack spacing={2}>
                    {props.props.habilidades.interesses.map(interesse => {
                        return (
                            <Stack direction="row" spacing={2}>
                                {interesse.icone}
                                <span>{interesse.descricao}</span>
                            </Stack>
                        )
                    })}
                </Stack>
            </div>
        </section>
    )
}
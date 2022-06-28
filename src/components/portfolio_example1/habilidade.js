import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import { lightGreen } from '@mui/material/colors';

export default function Habilidade(props) {
    return (
        <section class="resume-section" id="skills">
            <div class="resume-section-content">
                <h2 class="mb-5">Habilidades</h2>
                <div class="subheading mb-3">Programação Linguagens & Ferramentas</div>
                <Stack direction="row" spacing={2}>
                    {props.props.habilidades.linguagens.map(linguagem => {
                        return (
                            <Tooltip title={linguagem.linguagem}>
                                <Avatar sx={{ bgcolor: lightGreen[500] }} variant="rounded">
                                    {linguagem.icone}
                                </Avatar>
                            </Tooltip>
                        )
                    })}  
                </Stack>
                {() => {
                        if (props.props.habilidades.workflows) {
                            return (
                                <>
                                    <div class="subheading mb-3">Workflow</div>
                                    <Stack spacing={2}>
                                        {props.props.habilidades.workflows.map(workflow => {
                                            return (
                                                <Stack direction="row" spacing={2}>
                                                    {workflow.icone}
                                                    <span>{workflow.descricao}</span>
                                                </Stack>
                                            )
                                        })}
                                    </Stack>
                                </>
                            )
                        }
                    }
                }
            </div>
        </section>
    )
}
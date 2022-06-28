export default function Educacao(props) {
    return (
        <section class="resume-section" id="education">
            <div class="resume-section-content">
                <h2 class="mb-5">Educação</h2>
                {props.props.educacoes.map(educacao => {
                    return (
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">{educacao.titulo}</h3>
                                <div class="subheading mb-3">{educacao.subTitulo}</div>
                                <p>{educacao.texto}</p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">{educacao.periodo}</span></div>
                        </div>
                    )
                })}  
            </div>
        </section>
    )
}
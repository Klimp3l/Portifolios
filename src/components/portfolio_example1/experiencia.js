export default function Experiencia(props) {
    return (
        <section class="resume-section" id="experience">
            <div class="resume-section-content">
                <h2 class="mb-5">Experiências</h2>
                {props.props.experiencias.map(experiencia => {
                    return (
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">{experiencia.titulo}</h3>
                                <div class="subheading mb-3">{experiencia.subTitulo}</div>
                                <p>{experiencia.texto}</p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">{experiencia.periodo}</span></div>
                        </div>
                    )
                })}                    
            </div>
        </section>
    )
}
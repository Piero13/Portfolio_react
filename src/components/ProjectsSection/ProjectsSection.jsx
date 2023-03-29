import Slider from "../Slider/Slider";
import {picturesDatas} from '../../datas/picturesDatas';

function ProjectsSection({title}) {
    return (
        <section id="section" className="section page-section">
            <div className="page-section__inset">
                <h2 className="page-section__title">{title}</h2>
            </div>
            <Slider slides={picturesDatas}/>
        </section>
    )
}

export default ProjectsSection;
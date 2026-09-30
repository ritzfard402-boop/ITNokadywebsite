import robotNeutral from "../../assets/svg/robot-neutral.svg";
import robotWave from "../../assets/svg/robot-wave.svg";
import robotThinking from "../../assets/svg/robot-thinking.svg";
import robotPresenting from "../../assets/svg/robot-presenting.svg";
import robotOrbit from "../../assets/svg/robot-orbit.svg";
const ROBOT_IMAGES = {
    neutral: robotNeutral,
    wave: robotWave,
    thinking: robotThinking,
    presenting: robotPresenting,
    orbit: robotOrbit,
};
export default function Robot({ pose = "neutral", className = "", }) {
    return (<img src={ROBOT_IMAGES[pose]} alt="Робот-талисман IT NOKADY" className={className}/>);
}

import robotNeutralBody from "../../assets/robot/robot-neutral-body.svg";
import robotNeutralArmLeft from "../../assets/robot/robot-neutral-arm-left.svg";
import robotNeutralArmRight from "../../assets/robot/robot-neutral-arm-right.svg";
import robotNeutralEarLeft from "../../assets/robot/robot-neutral-ear-left.svg";
import robotNeutralEarRight from "../../assets/robot/robot-neutral-ear-right.svg";

const CANVAS_WIDTH = 244;
const CANVAS_HEIGHT = 268;
const ROBOT_LABEL = "Робот-талисман IT NOKADY";
const ROBOT_PARTS = [
  {
    id: "ear-left",
    src: robotNeutralEarLeft,
    x: 5.861,
    y: 0.001,
    width: 24.049,
    height: 47.117,
    className: "robot-ear-left",
  },
  {
    id: "ear-right",
    src: robotNeutralEarRight,
    x: 208.542,
    y: 0.171,
    width: 23.876,
    height: 47.029,
    className: "robot-ear-right",
  },
  {
    id: "body",
    src: robotNeutralBody,
    x: 0,
    y: 0,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
  },
  {
    id: "arm-left",
    src: robotNeutralArmLeft,
    x: -2.235,
    y: 149.517,
    width: 51.845,
    height: 95.972,
    className: "robot-arm-left",
  },
  {
    id: "arm-right",
    src: robotNeutralArmRight,
    x: 189.823,
    y: 148.546,
    width: 51.845,
    height: 95.972,
    className: "robot-arm-right",
  },
];

function toPercent(value, total) {
  return `${(value / total) * 100}%`;
}

export default function Robot({ className = "" }) {
  return (
    <div
      role="img"
      aria-label={ROBOT_LABEL}
      className={`relative ${className}`}
    >
      <div className="robot-figure">
        {ROBOT_PARTS.map((part) => (
          <img
            key={part.id}
            src={part.src}
            alt=""
            className={`absolute max-w-none ${part.className ?? ""}`}
            style={{
              left: toPercent(part.x, CANVAS_WIDTH),
              top: toPercent(part.y, CANVAS_HEIGHT),
              width: toPercent(part.width, CANVAS_WIDTH),
              height: toPercent(part.height, CANVAS_HEIGHT),
            }}
          />
        ))}
      </div>
    </div>
  );
}

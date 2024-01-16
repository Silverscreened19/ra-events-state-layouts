import '../css/IconSwitch.css'

export default function IconSwitch(props) {
    const {icon, onSwitch} = props;
  return (
    <div className="material-icons" onClick={onSwitch}>
      {icon}
    </div>
  );
}

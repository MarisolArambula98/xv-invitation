import './ParchmentHead.css';
import headImg from '../../assets/cabeza_pergamino2.png'

function ParchmentHead({classes}: {classes: string}) {
  return (
    <div className={`parchment__head ${classes}`}>
        <div className="parchment__img">
            <img src={headImg} alt="cabeza pergamino" />
        </div>
        <div className="parchment__body">
            
        </div>
        <div className="parchment__img reverse">
            <img src={headImg} alt="cabeza pergamino" />
        </div>
    </div>
  );
}
export default ParchmentHead;
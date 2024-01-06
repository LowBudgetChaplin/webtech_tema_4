import {useState} from 'react';
function RobotForm({onAdd})
{
const [robotul,setRobot]=useState({
    name: '',
    type: '',
    mass: '',
    weight: '',
});
let AdaugaRobot=()=>{
    const nouRobot={...robotul};
    if(nouRobot.mass<500)
    {
        nouRobot.mass='';
    }
    onAdd(nouRobot);
    setRobot({name:'',type:'',mass:'',weight:''});
};

let ModificaRobotul=(e)=>{
    const {id,value}=e.target;
    setRobot({...robotul,[id]:value});
};

return(
    <div>
        <input
            type="text"
            id="name"
            placeholder="name"
            value={robotul.name}
            onChange={ModificaRobotul}
        />

        <input
            type="text"
            id="type"
            placeholder="type"
            value={robotul.type}
            onChange={ModificaRobotul}
        />
        <input
            type="text"
            id="mass"
            placeholder="mass"
            value={robotul.mass}
            onChange={ModificaRobotul}
        />
        <button onClick={AdaugaRobot}>add</button>
    </div>
);

}
export default RobotForm;
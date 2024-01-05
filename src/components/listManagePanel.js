import '../assets/styles/listManagePanel.css';
import { useState } from "react";
import SetTaskModal from "./setTaskModal";
import StandardBtn from './standardBtn';

function ListManagePanel () {

  const [taskModalOpen, setTaskModalOpen] = useState(false);

  let ModalWindow;

  if (taskModalOpen) {
    ModalWindow = <SetTaskModal task={{name: '', descr: '', deadlineDate: '', deadlineTime: ''}}
                                onClose={()=>{setTaskModalOpen(false)}} 
                                amendMode={false}/>
  } else {
    ModalWindow = null;
  }
   
  return (
    <>
      <div className="manage-panel-cont">
        <div className="manage-panel__add-btn-cont">
          <StandardBtn btnText={'Добавить'}
                       clickHandler={() => {setTaskModalOpen(true)}}/>
        </div>
      </div>
      {ModalWindow}
    </>
  )
}

export default ListManagePanel;
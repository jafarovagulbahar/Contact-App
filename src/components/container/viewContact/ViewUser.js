import React, { useState, useContext, useEffect } from 'react';
import { Modal } from 'antd';
import { GlobalContext } from "../../context/GlobalState";
import './module.css';


export const ViewUser = (props) => {

  const { users } = useContext(GlobalContext);


  const [isModalVisible, setIsModalVisible] = useState(true);


  const handleOk = () => {
    props.setUserID('');
    setIsModalVisible(false);

  };

  const handleCancel = () => {
    props.setUserID('');
    setIsModalVisible(false);
  };

  const [infodUser, setInfoUser] = useState({
    id: '',
    name: '',
    surname: '',
    fathername: '',
    email: '',
    description: '',
    valueJob: '',
    valueGender: ''
  })

  const currentUserId = props.id;


  useEffect(() => {
    const userId = currentUserId;
    const infodUser = users.find(user => user.id === userId);
    setInfoUser(infodUser);

  }, [currentUserId, users])


  return (

    <Modal

      title="Detalies Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >



      <div className='viewContactUser'>

        {/* ---------Name------------- */}
        <div>
          <span>Name</span>
          <h6> {infodUser.name} </h6>
        </div>

        {/* ---------Surname---------- */}
        <div>
          <span>Surname</span>
          <h6>{infodUser.surname}</h6>
        </div>

        {/* ---------Father Name------- */}
        <div>
          <span>Father Name</span>
          <h6> {infodUser.fathername} </h6>
        </div>

        {/* ---------Email------------- */}
        <div>
          <span>Email</span>
          <h6>{infodUser.email} </h6>
        </div>

        {/* ---------Description-------- */}
        <div>
          <span>Description</span>
          <h6>{infodUser.description} </h6>
        </div>

        {/* ----------Job----------- */}
        <div>
          <span>Job</span>
          <h6>{infodUser.valueJob} </h6>
        </div>
        {/* ----------Gender----------- */}
        <div>
          <span>Gender</span>
          <h6>{infodUser.valueGender} </h6>
        </div>


      </div>
    </Modal>

  )
}
import React, { useState, useContext, useEffect } from 'react';
import { Modal, Row } from 'antd';
import { GlobalContext } from "../../context/GlobalState";
import style from './view.module.css';

export const ViewContact = (props) => {

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

  const [infoUser, setInfoUser] = useState({
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
    const infoUser = users.find(user => user.id === userId);
    setInfoUser(infoUser);

  }, [currentUserId, users])

 
  const ConstData=[
    {
      index:1,
      label:"Name:",
      name:infoUser.name
    },
      {
      index:2,
      label:"Surname:",
      name:infoUser.surname
    },
    {
      index:3,
      label:"Father Name:",
      name:infoUser.fathername
    },
    {
      index:4,
      label:"Email:",
      name:infoUser.email
    },
    {
      index:5,
      label:"Description:",
      name:infoUser.description
    },
    {
      index:6,
      label:"Job:",
      name:infoUser.valueJob
    },
    {
      index:7,
      label:"Gender:",
      name:infoUser.valueGender
    } 
  ]

  return (

    <Modal
      title="Detalies Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className={style.viewContactUser}>
        {ConstData.map(({name, label}, index)=> 
            <Row key={index}>
              <span>{label}</span>
              <h6> {name} </h6>
            </Row>
          )}
      </div>
    </Modal>

  )
}
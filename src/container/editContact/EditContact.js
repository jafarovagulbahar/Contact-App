import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import { useHistory, Link } from "react-router-dom";
import { Form, Button, Radio } from 'antd';
import {  toast } from 'react-toastify';
import style from '../addContact/addContact.module.css'
import Inputs from '../../components/customComponet/Inputs';



const layout = {
  labelCol: { span: 8 }
};

export const EditContact = (props) => {
  
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    surname:'',
    fathername:'',
    email:'',
    description:'',
    valueJob:'',
    valueGender:''
  })
  
  const [changeUser, setChangedUser] = useState('')
  const history = useHistory();
  const currentUserId = props.match.params.id;



  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
    setChangedUser(selectedUser)
 
  }, [currentUserId, users])

  
  const onChange = (e) => {
    setSelectedUser({
       ...selectedUser,
      [e.target.name]: 
       e.target.value 
    })
  }

 
  const onSubmit = (e) => {
    if(selectedUser===changeUser){
      notifyError()
    }else{
      notifySeccess()
        
    }
    editUser(selectedUser);
    history.push("/")  
   
  }
  // Notification
  const notifySeccess = () => {
    toast("Success !") 
  } 
  const notifyError = () => {
    toast("Error") 
  } 

  // editContact Data
  const ConstDataEdit=[
    {
      id:1,
      value:selectedUser.name,
      label:"Name",
      name:"name"
    },
    {
      id:2,
      value:selectedUser.surname,
      label:"Surname",
      name:"surname"
      
    },
    {
      id:3,
      value:selectedUser.fathername,
      label:"Father Name",
      name:"fathername"
    },
    {
      id:4,
      value:selectedUser.email,
      label:"Email",
      name:"email"
    },
    {
      id:5,
      value:selectedUser.description,
      label:"Description",
      name:"description"
    },
    {
      id:6,
      value:selectedUser.valueJob,
      label:"Job",
      name:"valueJob"
    },
  ]

  return (
  <div  className={style.addUserForm}>
   <Form
      {...layout}
      name="editForm"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
 {/* -Name,Surname,FatherName, Email, Description, Job-*/}

    { ConstDataEdit.map(({name, label, value}, id)=> 
        <span key={id}>
           <Inputs     
            className={style.inputContent}
            label={label}
            value={value}
            onChange={onChange}
            name={name}    
           />
        </span>
      
    )}
    
    {/* ----------Gender-------------- */}

    <Form.Item 
      className={style.inputContent} 
      label="Gender">
      <Radio.Group 
         onChange={onChange} 
         value={selectedUser.valueGender}
         name="valueGender"
      >
        <Radio value="Male">Male</Radio>
        <Radio value="Famle">Famle</Radio>
      </Radio.Group>
    </Form.Item>

    {/* ----------Buttons-------- */}

      <Form.Item 
        className={style.UpdateButtons}
      > 
        <Button 
        className={style.addBtn}  
        htmlType="submit"      
        >
          Update Contact
        </Button>    

        <Button className={style.cancelBtn}>
          <Link to="/">Cancel</Link>
        </Button>
       </Form.Item>
    
    </Form>
  </div>
     
  )
}

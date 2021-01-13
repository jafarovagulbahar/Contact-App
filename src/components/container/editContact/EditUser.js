import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import { useHistory, Link } from "react-router-dom";
import { Form, Input, Button, Radio } from 'antd';
import {  toast } from 'react-toastify';
import './module.css';


const layout = {
  labelCol: { span: 8 }
};

export const EditUser = (props) => {
  
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    surname:'',
    fathername:'',
    email:'',
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
    setSelectedUser({ ...selectedUser ,[e.target.name]: e.target.value })
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

  const notifySeccess = () => {
    toast("Success !") 
  } 
  const notifyError = () => {
    toast("Error") 
  } 
  
  return (
  <div className='addUserForm'>
   <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      >
    {/* ---------Name------------- */}

      <Form.Item label="Name">
      <Input 
          value={selectedUser.name}
          onChange={onChange}
          name="name"    
          rules={[{ 
            required: true, message: 'Please input your name!' 
          }]}
        />
    </Form.Item>
     {/* ---------Surname------------- */}

     <Form.Item label="Surname">
     <Input 
          value={selectedUser.surname}
          onChange={onChange}
          name="surname"   
          rules={[{ 
            required: true, message: 'Please input your surname!' 
          }]} 
        /> 
   </Form.Item>
    {/* ---------Father Name------------- */}

    <Form.Item label="Father name">
     <Input 
          value={selectedUser.fathername}
          onChange={onChange}
          name="fathername"    
          rules={[{ 
            required: true, message: 'Please input your father name!' 
          }]} 
        /> 
   </Form.Item>
     {/* ---------Email---------------- */}

     <Form.Item label="Email">
     <Input 
          value={selectedUser.email}
          onChange={onChange}
          name="email"    
          rules={[{ 
            required: true, message: 'Please input your email!' 
          }]} 
        /> 
   </Form.Item>
     {/* ---------Description----------- */}

     <Form.Item label="description">
     <Input 
          value={selectedUser.description}
          onChange={onChange}
          name="description" 
          rules={[{ 
            required: true, message: 'Please input your description!' 
          }]}    
        /> 
   </Form.Item>

     {/* ------------Job-------------- */}

     <Form.Item label="description">
     <Input 
          value={selectedUser.valueJob}
          onChange={onChange}
          name="valueJob"   
          rules={[{ 
            required: true, message: 'Please input your job!' 
          }]}  
        /> 
      </Form.Item>

       {/* ----------Gender-------------- */}
    <Form.Item  label="Gender">
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
        className="AddCancelBtns updateBtn"> 
       <Form.Item  className="col-12">
         <Button 
          className="addBtn"  
          htmlType="submit"      
          >
          Update
        </Button>
      

        <Button className="cancelBtn">
          <Link to="/">Cancel</Link>
        </Button>

       </Form.Item>
      </Form.Item>
    
    </Form>
  </div>
     
  )
}

import React, { useState, useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from "uuid";
import {  Link, useHistory } from "react-router-dom";
import {  toast } from 'react-toastify';

import { 
    Form, 
    Input, 
    Button, 
    Select, 
    Radio,
    Checkbox
  } from 'antd';

import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import './module.css';


const { Option } = Select;

// Antd Design ~ Layout
const layout = {
  labelCol: { span: 8}
};

// AddUser Function
export const AddUser = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [fathername, setFathername] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [valueJob, setJob] = useState('IT developer');
  const [valueGender, setGender] = useState('Male');
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

 

  const onSubmit = (e) => {
    
    notify()
    const newUser = {
      id: uuid(),
      name,
      surname,
      fathername,
      email,
      description,
      valueJob,
      valueGender
    }

    addUser(newUser);
    history.push("/");
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeSurname = (e) => {
    setSurname(e.target.value);
  }
  const onChangeFatherName = (e) => {
    setFathername(e.target.value);
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangeDesc = (e) => {
    setDescription(e.target.value);
  }
  function onChangeJob(value) {
    setJob(`${value}`);
  }

  const onChangeGender = e => {
    setGender(e.target.value);
    console.log(e.target.value)
  };
 
  const notify = () => toast("Successfully !");

  return (

  <div className='addUserForm'>
   <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      >
    {/* ---------Name------------- */}
      <Form.Item
        label="Name"
        name="name"
        rules={[{ 
          required: true, message: 'Please input your name!' 
        }]}
        
      >
        <Input 
          placeholder="Name.."
          value={name} 
          onChange={onChangeName} 
          name="name"    
        />
      </Form.Item>
    
    {/* ---------Surname------------- */}
      <Form.Item
          label="Surname"
          name="surname"
          rules={[{ 
            required: true, message: 'Please input your surname!' 
          }]}
        >
          <Input 
            placeholder="Surname.."
            value={surname} 
            onChange={onChangeSurname} 
            name="surname"    
          />
        </Form.Item>

    {/* ---------Father Name------------- */}
      <Form.Item
          label="Father Name"
          name="fathername"
          rules={[{ 
            required: true, message: 'Please input your fathername!' 
          }]}
        >
          <Input 
           placeholder="Father Name.."
            value={fathername} 
            onChange={onChangeFatherName} 
            name="fathername"    
          />
        </Form.Item>

    {/* ---------Email------------- */}
      <Form.Item
          label="Email"
          name="email"
          rules={[{ 
            required: true, message: 'Please input your email!' 
          }]}
        >
          <Input 
           placeholder="Email.."
            value={email} 
            onChange={onChangeEmail} 
            name="email"    
          />
        </Form.Item>

    {/* ---------Description------------- */}
    <Form.Item
          label="Description"
          name="description"
          rules={[{ 
            required: true, message: 'Please input your description!' 
          }]}
        >
          <Input 
            placeholder="Description.."
            value={description} 
            onChange={onChangeDesc} 
            name="description"    
          />
        </Form.Item>
      {/* ----------Job-------------- */}
      <Form.Item
      label="Job"
      name="job"
      initialValue="IT developer"
      rules={[{ 
        required: true, message: 'Please input your Job!' 
      }]}
      >
        <Select 
          className="selctBox"
          showSearch
          optionFilterProp="children"
          onChange={onChangeJob}
          filterOption={(input, option) =>
            option.children.toLowerCase()
            .indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="IT developer">IT developer</Option>
          <Option value="Doctor">Doctor</Option>
          <Option value="Teacher">Teacher</Option>
          <Option value="Engineer">Engineer</Option>
       </Select>

      </Form.Item>

    {/* ----------Gender-------------- */}
    <Form.Item label="Gender">
      <Radio.Group 
         onChange={onChangeGender} 
         value={valueGender}
         name='valueGender'
      >
        <Radio value="Male">Male</Radio>
        <Radio value="Famle">Famle</Radio>
      </Radio.Group>
    </Form.Item>
  
    {/* ----------Notification, Buttons-------- */}
      <Form.Item 
        className="AddCancelBtns">
        <Checkbox 
          className="col-7 checkbox">
          Notification
        </Checkbox>

       <Form.Item  className="col-6">
         <Button 
          className="addBtn"  
          htmlType="submit"
         
          >
          Add Contact
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

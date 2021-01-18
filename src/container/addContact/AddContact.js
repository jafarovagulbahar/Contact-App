import React, { useState, useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import style from './addContact.module.css'
import { 
    Form, 
    Button, 
    Select, 
    Radio,
    Checkbox
  } from 'antd';
import Inputs from '../../components/customComponet/Inputs';


const { Option } = Select;

// Antd Design ~ Layout
const layout = {
  labelCol: { span: 8}
};

// AddUser Function
export const AddContact = () => {

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
    
    if((name==='' || 
       surname==='' || 
       fathername==="" ||
       description==='')){
      isRequarid()
     
    }else{
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

  const isRequarid = () => toast("Please input your fields !");
  
  const addContactData=[
    {
      id:1,
      value:name,
      name:'name',
      label:"Name",
      onChange:onChangeName 
    },
    {
      id:2,
      value:surname,
      name:'surname',
      label:"Surname",
      onChange:onChangeSurname 
    },
    {
      id:3,
      value:fathername,
      name:'fathername',
      label:"Fathername",
      onChange:onChangeFatherName 
    },
    {
      id:4,
      value:email,
      name:'email',
      label:"Email",
      onChange:onChangeEmail 
    },
    {
      id:5,
      value:description,
      name:'description',
      label:"Description",
      onChange:onChangeDesc 
    }
  ]
  
  return (

  <div className={style.addUserForm}>
   <Form
      {...layout}
      name="AddContact"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      >
    {/* -Name,Surname, FatherName, Email, Description-*/}
    
    { addContactData.map(({name, label, value, onChange}, id)=> 
        <span key={id}>
          <Inputs 
            value={value} 
            name={name} 
            label={label} 
            onChange={onChange}
             
          />
        </span>
         
    )}
  
      {/* ----------Job-------------- */}
        <Form.Item
          label="Job"
          name="job"
          className={style.inputContent}
          initialValue="IT developer"     
        >
          <Select 
            className={style.selctBox}
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
        <Form.Item 
          className={style.inputContent}
          label="Gender"
          >
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
            className={style.AddCancelBtns}>
            <Checkbox 
            className={style.notify}
            >
            Notification
            </Checkbox>

        
            <Button 
              className={style.addBtn}  
              htmlType="submit"      
              >
              Add Contact
            </Button>
          

            <Button className={style.cancelBtn}>
              <Link to="/">Cancel</Link>
            </Button>

        
          </Form.Item>
    </Form>
   
 </div>

    
  )
}


import React from 'react';
import {Input, Form} from 'antd';
import style from './Inputs.module.css'

const Inputs = ({id, value, onChange, name, label}) => {
  
   return (

   
       <Form.Item
          key={id}
          label={label}  
          className={style.inputContent}     
          required
        >
        <Input 
          name={name}
          value={value}
          onChange={onChange}
          className={style.input}
          placeholder={label}       
        />    
     </Form.Item>
   
  
  );
};

export default Inputs;
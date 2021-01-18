import React, { useContext, useState } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import { List, Avatar ,Button} from 'antd';
import { 
  EditTwoTone,
  InfoCircleTwoTone,
  DeleteTwoTone
       } from '@ant-design/icons'

import { Popconfirm, message } from 'antd';
import { ViewContact } from '../../components/viewContact/ViewContact';
import style from './contactList.module.css'



export const ContactList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  const [userID,setUserID] = useState('')

  function confirm(user) {
    removeUser(user)
    message.success('Click on Yes');
  }
  
  function cancel(e) {
    message.error('Click on No');
  }

  
  return (
  
  
    <List className={style.contactList} >
      {users.length > 0 ? (
       <>
          {users.map(user => (
    
            <List.Item  key={user.id}>

              <Avatar src="assets/icons/user.png" />
               
              <List.Item.Meta
                className={style.banner}
                title={user.name}
              />
              <List.Item.Meta
                className={style.banner}
                title={user.surname}
              />
              <List.Item.Meta
                className={style.banner}
                title={user.fathername}
              />
               <List.Item.Meta
                title={user.valueJob}
              />
              
            <div >

              <Button  
                 className={style.btnAction}
                 onClick={()=>setUserID(user.id)} 
              >
                <InfoCircleTwoTone />     
              </Button> 

              <Button className={style.btnAction}>
                <Link to={`/edit/${user.id}`} >
                  <EditTwoTone twoToneColor="#52c41a" />
                </Link>
              </Button>

              
              <Popconfirm
                title="Are you sure to delete this contact?"
                onConfirm={()=>confirm(user.id)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"   
              >                
                <Button  className={style.btnAction}>
                   <DeleteTwoTone twoToneColor="#eb2f96"/> 
                </Button>               
              </Popconfirm>
    
              </div>

              { userID === user.id? <ViewContact id={user.id} setUserID={setUserID} />: null }
         
            </List.Item>
          ))}

      </>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </List>




  )
}
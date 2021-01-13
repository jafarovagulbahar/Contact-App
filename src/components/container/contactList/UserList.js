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

import './module.css';
import { ViewUser } from '../viewContact/ViewUser';

export const UserList = () => {


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
  
  
    <List className="mt-4 userList">
      {users.length > 0 ? (
       <>
          {users.map(user => (
    
            <List.Item  key={user.id}>

              <Avatar src="assets/icons/user.png" />
             
              <List.Item.Meta
                title={user.name}
              />
                <List.Item.Meta
                title={user.surname}
              />
              <List.Item.Meta
                title={user.fathername}
              />
               <List.Item.Meta
                title={user.valueJob}
              />
              
            <div className="ml-auto">

              <Button  onClick={()=>setUserID(user.id)} >
                <InfoCircleTwoTone />     
              </Button> 

              <Button >
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
                <Button>
                   <DeleteTwoTone twoToneColor="#eb2f96"/> 
                </Button>               
              </Popconfirm>
    
              </div>

              { userID === user.id? <ViewUser id={user.id} setUserID={setUserID} />: null }
         
            </List.Item>
          ))}

      </>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </List>




  )
}
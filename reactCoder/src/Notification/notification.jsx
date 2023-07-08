import { createContext, useContext, useState } from "react"
import cartBlack from '../assets/cartBlack.svg'
const Notification = ({ type, text }) => {


    const styles = {
        notification: {
          position: 'absolute',
          alignItems: 'center',
          backgroundColor: '#FFFCF2',
          border: '2px solid',
          borderColor: '#252422',
          borderRadius: '5px',
          display: 'flex',
          gap: '20px',
          width: '400px',
          height: '51px',
          padding: '20px',
          top:'60px',
          right:'20px',
        },
        vector: {
          height: '20.53px',
          marginBottom: '-4.76px',
          marginTop: '-4.76px',
          minWidth: '20px',
          position: 'relative',
        },
        text: {
          color: '#252422',
          fontFamily: 'Montserrat-Bold, Helvetica',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: 'normal',
          position: 'relative',
          width: '300px',
        },
      };
    return (
      <div style={styles.notification}>
        <img style={styles.vector} alt="Vector" src={cartBlack} />
        <p style={styles.text}>
          {text}
        </p>
      </div>
    );
  };
  
  
           
const NotificationContext = createContext()

export const NotificationProvider = ( { children }) => {
    
    const [notificationData, setNotificationData] = useState({ type:'sucess' , text:'' })
    
    const setNotification = ( type, text ) =>{
        setNotificationData({ type,text })

        setTimeout(() => {
            setNotificationData({type, text:''})
        }, 3000)
    }

    return(
        <NotificationContext.Provider value={{ setNotification }}>
            {notificationData.text && <Notification type={notificationData.type} text={notificationData.text}/>}
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}
import React from 'react'
import './SelectChoice.css'
import {withRouter} from 'react-router-dom' 

const gearShow = () => { 
  const gearBox = document.querySelector('.gearBox')
  const xmarkitem = document.querySelector('.xmarkitem')
  const gearItem = document.querySelector('.gearItem')
  const changepassword = document.querySelector('.changepassword')
  const Logout = document.querySelector('.Logout')
  gearBox.classList.add ('gearBoxactive')
  gearBox.classList.remove ('closebox')
  xmarkitem.style.display = 'block'
  gearItem.style.display = 'none'
  changepassword.classList.add('changepasswordflex')
  Logout.classList.add('Logoutflex')
 }

const gearClose = () => {
  const gearBox = document.querySelector('.gearBox')
  const xmarkitem = document.querySelector('.xmarkitem')
  const gearItem = document.querySelector('.gearItem')
  const Logout = document.querySelector('.Logout')
  const changepassword = document.querySelector('.changepassword')
  gearItem.style.display = 'block'
  xmarkitem.style.display = 'none'
  gearBox.classList.add('closebox')
  gearBox.classList.remove ('gearBoxactive')
  Logout.classList.remove('Logoutflex')
  changepassword.classList.remove('changepasswordflex')
}

export const SelectChoice = (props) => {

  const styles =  {
    i: {cursor: 'pointer'}
  }
  return (
    <div>
      <div className="gearItem">
      <i className="fa-solid fa-gear"
      style={styles.i}
      onClick={gearShow}></i>
      </div>
     <div className="xmarkitem">
      <i className="fa-solid fa-xmark"
      onClick={gearClose}></i>
      </div>
      <div className="gearBox">
            
            <div className="box">
              <div className="changelog">
                <div onClick={()=>{props.history.push('/change-password')}} 
                className='changepassword'>Zmień hasło</div>
                <br></br>
                <div onClick={()=>{props.history.push('')}} 
                className='Logout' href='#log-out'>Wyloguj się</div>
              </div>
            </div>
      </div>
      </div>
  )
}
export default (withRouter(SelectChoice))

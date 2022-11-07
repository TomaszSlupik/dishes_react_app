import React from 'react'
import './SelectChoice.css'
import {withRouter} from 'react-router-dom' 

const gearShow = () => { 
  let gearBox = document.querySelector('.gearBox')
  let xmarkitem = document.querySelector('.xmarkitem')
  let gearItem = document.querySelector('.gearItem')
  gearBox.classList.add ('gearBoxactive')
  gearBox.classList.remove ('closebox')
  xmarkitem.style.display = 'block'
  gearItem.style.display = 'none'
 }

const gearClose = () => {
  let gearBox = document.querySelector('.gearBox')
  let xmarkitem = document.querySelector('.xmarkitem')
  let gearItem = document.querySelector('.gearItem')
  gearItem.style.display = 'block'
  xmarkitem.style.display = 'none'
  gearBox.classList.add('closebox')
  gearBox.classList.remove ('gearBoxactive')
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

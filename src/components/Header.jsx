import React, { useState } from 'react'
import ModalHeader from './ModalHeader';
import '../styles/header.css'


const Header = () => {
    const [showPopupInfo, setShowPopupInfo] = useState(false);

    const handlerMenu = () => {
        setShowPopupInfo(true)
      };
    

    return (
        <div className='header__container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png' className='header__button' onClick={handlerMenu} />

             <ModalHeader active={showPopupInfo} setActive={setShowPopupInfo}/>
        </div>
    )
}

export default Header
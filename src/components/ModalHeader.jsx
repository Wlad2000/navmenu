import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/modal.css';

const ModalHeader = ({ active, setActive }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <div className='modal__header'> Menu</div>
                <div className='modal__container'>
                    <div className='item__container one'>
                        <Link to="/menu-dashboard-1"><p className='item__container-item' onClick={() => setActive(false)}> Dashboard 1</p></Link>
                        <Link to="/menu-dashboard-2"><p className='item__container-item' onClick={() => setActive(false)}> Dashboard 2</p></Link>
                        <Link to="/menu-dashboard-3"><p className='item__container-item' onClick={() => setActive(false)}> Dashboard 3</p></Link>
                        <Link to="/menu-dashboard-4"><p className='item__container-item' onClick={() => setActive(false)}> Dashboard 4</p></Link>
                    </div>
                    <div className='item__container two'>
                        <Link to="/menu-dashboard-1"><p className='item__container-item' onClick={() => setActive(false)}> Dashboard 1</p></Link>
                        <Link to="/menu-dashboard-2"><p className='item__container-item' onClick={() => setActive(false)}> Dashboard 2</p></Link>
                        <Link to="/menu-dashboard-3"><p className='item__container-item' onClick={() => setActive(false)}> Dashboard 3</p></Link>
                        <Link to="/menu-dashboard-4"><p className='item__container-item' onClick={() => setActive(false)}> Dashboard 4</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalHeader
import React from 'react'
import HeaderImage from '../utils/Header.png';
import TermiteImage from '../utils/termite.png';


const Header = () => {
  return (
    <>
        <div className='my-background'>
            <img src={HeaderImage} alt='logo' className='header-image'/>

            <div className='termite-div'>
                <img src={TermiteImage} alt='logo' className='termite-image'/>
            </div>
        </div>


    </>
  )
}

export default Header
import React from 'react';
import SwitchTheme from './SwitchTheme';
import { useHistory } from "react-router-dom"


const Header = () => {

  const history = useHistory()
  
  const handleClick = () => {
    history.push("/")
  }

  return ( 
    <header className="flex flex-wrap justify-between items-center py-4 px-4 lg:px-24 bg-light">
      <h1 onClick={handleClick} className="font-semibold md:text-xl cursor-pointer">Where in the world?</h1>
      <SwitchTheme />
    </header>
   );
}
 
export default Header;
import React from 'react';
import SwitchTheme from './SwitchTheme';


const Header = () => {
  return ( 
    <header className="flex justify-between items-center py-4">
      <h1 className="text-2xl">Where in the world?</h1>
      <SwitchTheme />
    </header>
   );
}
 
export default Header;
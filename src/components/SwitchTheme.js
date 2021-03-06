import React, { useEffect } from 'react';
import { useLocalStorage } from "../hooks/useLocalStorage"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { faMoon as faRegularMoon} from "@fortawesome/free-regular-svg-icons"

const SwitchTheme = () => {

  const [theme,setTheme] = useLocalStorage('theme','light')
  const themes = { dark: 'light', light: 'dark' }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  },[theme])

  const handleSwitchTheme = (e) => {
    setTheme(themes[theme])
  }

  return (
    <div className="relative px-4 py-2">
      <FontAwesomeIcon 
        icon={ theme==='light' ? faRegularMoon : faMoon} 
        className="mr-4"
      />
      { theme === 'light' ? "Light " : "Dark " } Mode
    <input
      type="checkbox"
      className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer" 
      onChange={handleSwitchTheme}
    />
    </div>
  );
}
 
export default SwitchTheme;
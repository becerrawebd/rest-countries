import React, { useEffect, useRef, useState } from 'react';
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
    <div class="bg-red-500 h-6">
      <FontAwesomeIcon 
        icon={ theme=='light' ? faRegularMoon : faMoon} 
        className="mr-4"
      />
      { theme === 'light' ? "Light Mode" : "Dark Mode" }
    <input
      type="checkbox"
      className="bg-red-500 w-auto h-auto hidden" 
      onChange={handleSwitchTheme}
    />
    </div>
  );
}
 
export default SwitchTheme;
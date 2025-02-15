import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import ButtonIcon from "./ButtonIcon"
import { useDarkMode } from "../context/DarkModeContext"

function DarkmodeToggle() {
  const {isDarkMode, toggleDarkMode} = useDarkMode()

  
    return (
    <div>
        <ButtonIcon onClick={toggleDarkMode} >
           {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/> }
        </ButtonIcon>
    </div>
  )
}

export default DarkmodeToggle
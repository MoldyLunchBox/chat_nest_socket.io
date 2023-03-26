
import {useState} from "react"
function NickName({setNickName}: {setNickName: (value: string) => void} ) {
  const [value, setValue] = useState<string>("")
  const handleChange = (e:any) =>{
    setValue(e.target.value)
    setNickName(value)
  }
  return (
    <div>
      <input onChange={handleChange}  placeholder="type your message"  value={value}/>
      
    </div>
  )
}

export default NickName
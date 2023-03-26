
import {useState} from "react"
interface Props{
  setNickName: (value: string) => void
  sendNewCatter: (value: string) => void
}
function NickName({setNickName, sendNewCatter}: Props ) {
  const [value, setValue] = useState<string>("")
  const handleChange = (e:any) =>{
    setValue(e.target.value)
  }
  const saveNickName = () =>{
    setNickName(value)
    sendNewCatter(value)
    setValue("")

  }
  return (
    <div className="flex flex-col space-y-4">
      <input 
      className="input" 
      onChange={handleChange}  placeholder="Type your nickname"  value={value}/>
      <button onClick={saveNickName} className="w-full rounded bg-[#e50914] py-3 font-semibold">Save</button>
    </div>
  )
}

export default NickName
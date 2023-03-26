interface Props{
  send: (value: string, nickName:string) => void
  nickName:string
}
import {useState} from "react"
function MessageInput({nickName , send}:Props ) {
  const [value, setValue] = useState<string>("")
  const handleChange = (e:any) =>{
    setValue(e.target.value)
  }
  const handleSend = () =>{
    send(value, nickName)
    setValue("")
  }
  return (
    <div className="flex border border-[#414141] rounded-b">
      <textarea onChange={handleChange}  placeholder="type your messaged"  value={value}
      className="w-full h-auto text-white/75  bg-[#333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-white;"/>
      <button onClick={handleSend} className="text-white bg-[#414141] p-2  text-semibold"> Send</button>
    </div>
  )
}

export default MessageInput
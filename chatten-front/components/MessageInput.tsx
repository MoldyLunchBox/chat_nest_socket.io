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
  return (
    <div >
      <input onChange={handleChange} type="text" placeholder="type your message"  value={value}
      className="w-full rounded bg-[#333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-white;"/>
      <button onClick={()=>send(value, nickName)}> send</button>
    </div>
  )
}

export default MessageInput
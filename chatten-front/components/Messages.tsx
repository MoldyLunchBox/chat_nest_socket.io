
interface Props{
  messages: string[]
}
function Messages({messages}:Props) {
  return (
 <>
    {messages.map((msg, index)=>
    <div key={index}>{msg}</div>
    )}
   
    </>
  )
}

export default Messages
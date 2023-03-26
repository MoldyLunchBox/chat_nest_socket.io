
interface Props {
  messages: string[]
}
function Messages({ messages }: Props) {
  return (
    <>
        <div className=" w-full bg-[#414141] py-2 rounded-t">
          <h1 className="text-[gray]  text-center">messages</h1>
        </div>
      <div className="bg-[#333333] min-h-[200px] divide-y-">
        <div className="p-3">
          {messages.map((msg, index) =>
            <div key={index}>{msg}</div>
          )}
        </div>
      </div>
    </>
  )
}

export default Messages
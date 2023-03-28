# Chat App With Nest.js + Socket.io
npm i  @nestjs/cli

npx nest new project-name

npm i --save @nestjs/websockets @nestjs/platform-socket.io\n

npm i --save @types/socket.io

# problems i run into

main problem was with deploying this to vercel which uses serverless functions and has a max execution timeout to probably 10 ms or something,  thats why it cant maintain websocket  connection

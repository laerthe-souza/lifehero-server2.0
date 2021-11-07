import { httpServer, io } from './app';

io.on('connection', socket => {
  console.log('Socket connected', socket.id);
});

httpServer.listen(3333, () => {
  console.log('Server is running on port 3333');
});

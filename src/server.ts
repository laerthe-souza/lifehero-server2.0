import { httpServer, io } from './app';
import { logger } from './utils/logger';

io.on('connection', socket => {
  logger.info('Socket connected', socket.id);
});

httpServer.listen(3333, () => {
  logger.info('Server is running on port 3333');
});

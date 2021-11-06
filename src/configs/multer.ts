import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

export const upload = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const fileName = `${crypto
        .randomBytes(16)
        .toString('hex')}-${file.originalname.replace(/\s/g, '')}`;

      cb(null, fileName);
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpg',
      'image/jpeg',
      'image/pjpeg',
      'image/png',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('This file type is not supported'));
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
});

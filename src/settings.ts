import dotenv from 'dotenv';

dotenv.config();

export const Settings = {
  secret: 'secretKey',
  expiresIn: 3600,
  refreshExpiresIn: 7200,
  PORT: process.env.PORT || 3000,
};
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return {msg: 'I have am signed up'}
  }

  signin() {
    return {msg: 'I have am signed in'}
  }
}

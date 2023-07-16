import { Injectable } from '@nestjs/common';
import * as firebaseAccount from '../FirebaseAccount.json';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  FirebaseApp: admin.app.App;

  constructor() {
    this.FirebaseApp = admin.initializeApp({
      credential: admin.credential.cert(
        firebaseAccount as admin.ServiceAccount,
      ),
    });
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      await this.FirebaseApp.auth().verifyIdToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }
}

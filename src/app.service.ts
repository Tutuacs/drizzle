import { Injectable } from '@nestjs/common';
import { db } from "../db";
import { user } from 'db/schema';

@Injectable()
export class AppService {


  async getHello() {
    console.log(db.select().from(user));
    return `olha: ${await db.select().from(user)}`;
    const users = db.select().from(user) ;
    return users;
  }
}

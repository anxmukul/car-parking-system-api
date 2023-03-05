import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Visit => https://github.com/anxmukul/car-parking-system-api/blob/master/README.md';
  }
}

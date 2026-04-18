import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

const SECRET_KEY = 'v3l0c3_Ph03n1x_7892_R1d3_5tr0ng_B3y0nd';

@Injectable({ providedIn: 'root' })
export class EncryptService {
  encryptPayload = (data: any): string => {
    const jsonString = JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
  };
}

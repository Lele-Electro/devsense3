import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {

  hyphenToCamel = (str: string): string => {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  };

  camelToHyphen = (str: string): string => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };


}

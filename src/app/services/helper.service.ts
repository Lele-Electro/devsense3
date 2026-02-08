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

  log(value: any, label: string = 'WEBSITE CONTENT') {
    console.log('%c═══════════════════════════════════════', 'background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); color: #fff; font-weight: bold; padding: 5px; border-radius: 3px');
    console.log(`%c📦 ${label}`, 'background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); color: #fff; font-weight: bold; font-size: 16px; padding: 8px; border-radius: 3px');
    console.log('%c═══════════════════════════════════════', 'background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); color: #fff; font-weight: bold; padding: 5px; border-radius: 3px');
    console.log(value);
    console.table(value);
    console.log('%c═══════════════════════════════════════\n', 'background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); color: #fff; font-weight: bold; padding: 5px; border-radius: 3px');
  }



}

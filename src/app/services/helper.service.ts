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

  log(value: any, label: string, primaryColor: string, secondaryColor: string, textColor: string) {
    const gradientStyle = `background: linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%); color: ${textColor}; font-weight: bold; padding: 5px; border-radius: 3px`;
    const labelStyle = `background: linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%); color: ${textColor}; font-weight: bold; font-size: 16px; padding: 8px; border-radius: 3px`;

    console.log('%c═══════════════════════════════════════', gradientStyle);
    console.log(`%c📦 ${label}`, labelStyle);
    console.log('%c═══════════════════════════════════════', gradientStyle);
    console.log(value);
    console.table(value);
  }

  /**
   * Extracts the text content of a specific <p> tag from an HTML string.
   * @param html - The raw HTML string (e.g. content.rendered).
   * @param paragraphIndex - Zero-based index of the paragraph to extract (default: 0).
   * @returns The plain-text content of the matched paragraph, or '' if not found.
   */
  getParagraphText(html: string, paragraphIndex: number = 0): string {
    const matches = html.match(/<p[^>]*>[\s\S]*?<\/p>/gi);
    if (!matches || paragraphIndex < 0 || paragraphIndex >= matches.length) {
      return '';
    }

    return matches[paragraphIndex]
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

}

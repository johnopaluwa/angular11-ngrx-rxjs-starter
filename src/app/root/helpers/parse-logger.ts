import { parseISO } from 'date-fns';

export class ParseLogger {
  static parseArray<T>(parseFn: any, jsonArray: any): T[] {
    if (!jsonArray) {
      return [];
    }
    const arr = [];
    for (const jsonClass of jsonArray) {
      try {
        const c = parseFn(jsonClass);
        arr.push(c);
      } catch (error) {
        console.error(
          `Could not be parsed: ${error}, json: ${JSON.stringify(jsonClass)}`
        );
      }
    }
    return arr;
  }

  static parseJson<T>(parseFn: any, json: any): T | null {
    try {
      return parseFn(json);
    } catch (error) {
      console.error(
        `Could not be parsed: ${error}, json: ${JSON.stringify(json)}`
      );
      return null;
    }
  }

  static parseDate(json: any): Date | null {
    if (json) {
      return parseISO(json);
    }

    return null;
  }

  static safeParseDate(json: any): Date {
    if (json) {
      return parseISO(json);
    }

    throw new Error(`Date is empty but should not be empty`);
  }
}

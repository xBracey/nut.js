import clipboardy from "clipboardy";
import { ClipboardProviderInterface } from "macpad-provider-interfaces";

export default class implements ClipboardProviderInterface {
  constructor() {}

  public async hasText(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        const content = clipboardy.readSync();
        resolve(content.length > 0);
      } catch (e) {
        reject(e);
      }
    });
  }

  public clear(): Promise<boolean> {
    return Promise.reject("Method not implemented.");
  }

  public async copy(text: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        clipboardy.writeSync(text);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  public async paste(): Promise<string> {
    return clipboardy.read();
  }
}

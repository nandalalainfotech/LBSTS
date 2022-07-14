import * as translationEn from '../translation/en.json';
import * as translationAr from '../translation/ar.json';
import { LanguageEnum } from '../enums/Language';

export default class CError {
  public errorCode: string;
  public messageEn: string;
  public messageAr: string;
  public error: any;

  constructor(code: string, error?: Error) {
    this.errorCode = code;
    this.messageEn = this.translate(code, LanguageEnum.English);
    this.messageAr = this.translate(code, LanguageEnum.Arabic);
    this.error = error;
  }

  private translate(key: string, language: LanguageEnum) {
    console.log('translate error ', key, language);
    const translate: any = language == LanguageEnum.English ? translationEn : translationAr;
    return translate[key];
  }
}

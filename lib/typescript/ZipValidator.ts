import { StringValidator } from "./module";

export const numberRegexp = /^[0-9]+$/;

export class ZipValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export abstract class SpecialCharacterHelper {
    public static RemoveSpecialCharacters(str: string): string {
        return str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    }
}
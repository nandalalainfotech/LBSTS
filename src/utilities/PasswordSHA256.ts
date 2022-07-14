import crypto from 'crypto';

export abstract class PasswordSHA256 {
    public static GenerateSHA256Password(password): string {
        let hash = crypto.createHash("sha256");
        hash.update(password);
        return hash.digest('hex');
    }
}
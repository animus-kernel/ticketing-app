import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export class PasswordManager {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString("hex")}.${salt}`;
  }

  static async compare(storedHash: string, suppliedHash: string) {
    const [hashedPassword, salt] = storedHash.split(".");

    const buf = (await scryptAsync(suppliedHash, salt, 64)) as Buffer;

    return hashedPassword === buf.toString("hex");
  }
}

import mongoose, { Document, Model } from "mongoose";
import { PasswordManager } from "../utils";

interface IUser extends Document {
  email: string;
  password: string;
}

type UserAttr = Pick<IUser, "email" | "password">;

interface IUserModel extends Model<IUser> {
  build(attr: UserAttr): IUser;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret.password;
        delete ret._id;
      },
      versionKey: false,
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hash = await PasswordManager.toHash(this.get("password"));
    this.set("password", hash);
  }
  done();
});

userSchema.statics.build = (attr: UserAttr) => new User(attr);

export const User = mongoose.model<IUser, IUserModel>("User", userSchema);

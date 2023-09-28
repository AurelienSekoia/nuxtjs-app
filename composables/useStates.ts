import { User } from "firebase/auth";

export const useFirebaseUser = () => useState<User | null>("firebaseUser", () => null); 
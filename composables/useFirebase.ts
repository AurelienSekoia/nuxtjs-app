import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	Auth,
	UserCredential,
	User
} from 'firebase/auth';

export async function createUser(email: string, password: string): Promise<any | void> {
	const auth: Auth = getAuth();
	const credentials = await createUserWithEmailAndPassword(auth, email, password)
		.catch((error) => {
			throw new Error(error);
		});

	return credentials;
}

export async function signInUser(email: string, password: string): Promise<UserCredential | void> {
	const auth: Auth = getAuth();
	const credentials = await signInWithEmailAndPassword(auth, email, password)
		.catch((error) => {
			throw new Error(error);
		});
	return credentials;
}

export function initUser(): void {
	const auth: Auth = getAuth();
	onAuthStateChanged(auth, (user: User | null) => {
		console.log(user ? user : 'nope');
	});
}

export async function signOutUser(): Promise<void> {
	const auth: Auth = getAuth();
	signOut(auth)
		.catch((error) => {
			throw new Error(error);
		});
}
import conf from '../conf/conf';
import { Client, Account, ID } from 'appwrite';

export class AuthService {

	client = new Client()
	account;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);
		this.account = new Account(this.client);
	}

	async createAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(ID.unique(), email, password, name)
			if (userAccount) {
				//call another account 
				return this.login({email,password})
			} else {
				return userAccount
			}
		} catch (error) {
			console.log("This is a create account error :" + error);
		}
	}

	async login({ email, password }) {
		try {
			await this.account.createEmailSession(email, password)
		} catch (error) {
			console.log("This is a login error :" + error);
		}
	}

	async getCurrentUser() {
		try {
			return await this.account.get()
		} catch (error) {
			console.log("This is a get current user error :" + error);
		}
		return null
	}

	async logout() {
		try {
			return await this.account.deleteSessions()
		} catch (error) {
			console.log("This is a log out error :" + error);
		}
	}

}
const authService = new AuthService()

export default authService;
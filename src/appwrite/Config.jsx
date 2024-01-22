import conf from "../conf/conf";
import { ID, Query, Client, Storage, Databases } from "appwrite";

export class appwriteService {
	client = new Client()
	databases;
	bucket;
	query

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
		this.query = new Query(this.client);
	}

	async createPost({ title, slug, content, featuredImage, status, userId }) {
		try {
			return await this.databases.createDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{ title, content, status, featuredImage, userId }
			)
		} catch (error) {
			console.log("This is a create post error " + error);
		}
	}

	async updatePost(slug, { title, status, featuredImage, content }) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{ title, content, status, featuredImage }
			)
		} catch (error) {
			console.log("This is update post error " + error);
		}
	}

	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			)
			return true
		} catch (error) {
			console.log("This is delete post error " + error)
			return false
		}
	}

	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			)
		} catch (error) {
			console.log("This is get post error " + error);
		}
	}

	async getPosts() {
		try {
			return await this.databases.listDocuments(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				[
					Query.equal('status', ['active'])
				]
			)
		} catch (error) {
			console.log("This is get all post error " + error);
			return false;
		}
	}

	// storage file upload service

	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				conf.appwriteBucketId,
				ID.unique(),
				file
			)
		} catch (error) {
			console.log("File upload error " + error);
			return false;
		}
	}

	async deleteFile(fileId) {
		try {
			await this.bucket.deleteFile(
				conf.appwriteBucketId,
				fileId
			)
			return true
		} catch (error) {
			console.log("This is delete file error : " + error)
			return false
		}
	}

	getFilePreview(fileId) {
		try {
			return this.bucket.getFilePreview(
				conf.appwriteBucketId,
				fileId
			)
		} catch (error) {
			console.log("This is get file preview error : " + error);
			return false
		}
	}
}

const AppwriteService = new appwriteService();
export default AppwriteService;
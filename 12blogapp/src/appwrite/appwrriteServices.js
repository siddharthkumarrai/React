import config from '../envConfig/EnvConfig';
import { Client, ID, Databases, Storage, Query} from 'appwrite';

export class AppwriteServices {
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost( {title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId

                }
            )
        } catch (error) {
            console.log("error in create post", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }){
       try {
        return await this.databases.updateDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug, //document id
            {
                title,
                content,
                featuredImage,
                status,
            }
        )
       } catch (error) {
        console.log("error in update post", error)
       }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("error in in deletePost",erroe)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("error in getPost",error);
            return false
        }
    }

    async getPosts( queries = [Query.equal("status","active")]){
           try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,

            )
           } catch (error) {
             console.log("error in getPosts ",error)
             return false;
           }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appwriteBucket_id,
                ID.unique(),
                file
                 
            )
        } catch (error) {
            console.log("error in uploadFile", error)
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.storage.deleteFile(
                config.appwriteBucket_id,
                fileID
            )
        } catch (error) {
            console.log("error in deleteFile", error)
        }
    }

    getFilePreview(fileID){
        return this.storage.getFilePreview(
            config.appwriteBucket_id,
            fileID
        )
    }
};



const appwriteServices = new AppwriteServices()
export default appwriteServices
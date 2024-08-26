class Post{
    private _userName: string;
    private _imageUrl: string;
    private _description: string;
    private _numLikes: number;


constructor(userName: string, imageUrl: string,  description: string){
    this._userName = userName;
    this._imageUrl = imageUrl;
    this._description = description
    this._numLikes = 0;

}
incrementLikes(){

}
get userName(){
    return this.userName;
}

get imageUrl(){
    return this.imageUrl;
}

get description(){
    return this.description;
}

set description(description: string) {
    this.description = description;
}

get numLikes(){
    return this._numLikes += 1;
}
incrementLike(){
    this._numLikes =1

}
}

const post1 = new Post("Gabriel of Cinder", "http:// ...", "imagem")
post1.incrementLike();

console.log(post1)

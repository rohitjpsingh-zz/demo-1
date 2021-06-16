export class Post{
    constructor(
        public name:string,
        public subject :string,
        public email :string,
        public message :string
    ){}
}
export class User {
  userName!: string;
  password!: string
}

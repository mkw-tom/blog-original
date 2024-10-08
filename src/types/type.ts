export type SearchBlogsProps = {
  blogData: any ;
  inputText: string | undefined;
}

export type Inputs = {
  email: "string";
  password: "string"
}

//firebase
export type BlogContentsProps = {
  title: string,
  likes: [],
  comments: []
}

export type CommentDataProps = {
  uid: string | undefined;
  userName: string | null | undefined;
  userPhoto: string | null | undefined;
  text: string;
  likes: [];
}
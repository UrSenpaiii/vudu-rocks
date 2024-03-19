export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type User = {
  id: number;
  name: string;
};

export type ParsedPost = {
  id: number;
  author: string;
  title: string;
  body: string;
};

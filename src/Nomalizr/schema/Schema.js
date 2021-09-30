// import { schema } from 'normalizr';

// // Data about author will be stored in 'authors' object
// const actorSchema = new schema.Entity('results');

// // Data about comment will be store in 'comments' object
// const KnownForSchema = new schema.Array('Known_for');
 
// // Post object has information about one author and many comments stored in array 
// // Author information is stored in 'author' and comments array is 'comments`
// const movieSchema = new schema.Entity('movie', {
//   actor: actorSchema,
//   Known_for:KnownForSchema
// });


// export {movieSchema}

// import { schema } from 'normalizr';

// // Data about author will be stored in 'authors' object
// const authorSchema = new schema.Entity('authors');

// // Data about comment will be store in 'comments' object
// const commentSchema = new schema.Entity('comments');
 
// // Post object has information about one author and many comments stored in array 
// // Author information is stored in 'author' and comments array is 'comments`
// const postSchema = new schema.Entity('posts', {
//   author: authorSchema,
//   comments: [commentSchema]
// });

import { schema } from 'normalizr';

// // Data about author will be stored in 'authors' object
// const actorSchema = new schema.Entity('actors');

// // Data about comment will be store in 'comments' object
// const KnowSchema = new schema.Entity('Known_for');
 
// // Post object has information about one author and many comments stored in array 
// // Author information is stored in 'author' and comments array is 'comments`
// const movieSchema = new schema.Entity('movies', {
//   actor: actorSchema,
//   Known_for: [KnowSchema]
// });
 
const user = new schema.Entity('users');
 
// Define your comments schema
const result = new schema.Entity('results', {
  results:user
});
 
// Define your article
const article = new schema.Entity('articles', {
  author: user,
  resultss: [result]
});

export { article}
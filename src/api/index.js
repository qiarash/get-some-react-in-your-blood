export const dummyApiCall = postId => new Promise(resolve => {
  setTimeout(() => {
    resolve({id: postId, title: 'dummy post'})
  }, 2000);
})

export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok){
        throw new Error('Network response is not OK');
    }
    return response.json();
};

export const createPost = async (post) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(post),
    });
    if (!response.ok) {
        throw new Error('Network response is not OK');
    }
    return response.json();
};
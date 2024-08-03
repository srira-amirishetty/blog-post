import React, {useState} from 'react';

const CreatePost = ({onCreatePost}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreatePost({ title, body });
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Body</label>
                <textarea type="text" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;
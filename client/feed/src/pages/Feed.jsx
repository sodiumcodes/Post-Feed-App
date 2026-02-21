import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Feed.css'

/**
 * Component to display a feed of all posts.
 */
const Feed = () => {
    // State to store the array of posts retrieved from the server
    const [posts, setPosts] = useState([])

    // State to indicate if data is currently being loaded
    const [loading, setLoading] = useState(true)

    // useEffect hook to fetch posts when the component mounts
    useEffect(() => {
        /**
         * Asynchronous function to fetch posts from the backend.
         */
        const fetchPosts = async () => {
            try {
                // Fetching all posts from the backend server running on port 3000
                const response = await axios.get('http://localhost:3000/all-posts')
                // Updating state with the retrieved posts
                setPosts(response.data.posts)
            } catch (error) {
                console.error('Error fetching posts:', error)
            } finally {
                // Setting loading to false once the request is complete
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    // Rendering a loading message if the data is still being fetched
    if (loading) {
        return <div className="loading">Loading posts...</div>
    }

    return (
        <div className="feed-container">
            <header className="feed-header">
                <h1>Post Feed</h1>
                {/* Link component for client-side navigation to the Create Post page */}
                <Link to="/create" className="create-link">+ Create Post</Link>
            </header>

            <div className="posts-list">
                {/* Dynamically rendering post cards if posts exist, otherwise showing a message */}
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className="post-card">
                            {/* Displaying the post image and caption */}
                            <img src={post.image} alt={post.caption} className="post-image" />
                            <div className="post-content">
                                <p className="post-caption">{post.caption}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-posts">No posts found. Create one!</div>
                )}
            </div>
        </div>
    )
}

export default Feed;


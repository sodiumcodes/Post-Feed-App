import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Create.css'

/**
 * Component for creating a new post with an image and caption.
 */
const Create = () => {
  // State for storing the caption text and the selected image file
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState(null)

  // State to manage the loading status while the post is being created
  const [loading, setLoading] = useState(false)

  // Hook for programmatic navigation between routes
  const navigate = useNavigate()

  /**
   * Handles the form submission to create a post.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation to ensure an image has been selected
    if (!image) {
      alert('Please select an image')
      return
    }

    // Creating FormData to send multipart/form-data (required for file uploads)
    const formData = new FormData()
    formData.append('image', image)
    formData.append('caption', caption)

    setLoading(true)
    try {
      // Sending a POST request to the backend API running on port 3000
      const response = await axios.post('http://localhost:3000/create-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('Post created:', response.data)

      // Redirecting the user back to the feed after successful post creation
      navigate('/feed')
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Failed to create post')
    } finally {
      // Resetting the loading state regardless of the request outcome
      setLoading(false)
    }
  }

  return (
    <div className="create-container">
      <section className="create-section">
        <h1>Create Post</h1>
        <form className="create-form" onSubmit={handleSubmit}>
          {/* File input for selecting the image */}
          <input
            type="file"
            name='image'
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
          {/* Text input for specifying the post caption */}
          <input
            type="text"
            name="caption"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          />
          {/* Submit button with dynamic text based on loading state */}
          <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Post'}
          </button>
        </form>
      </section>
    </div>
  )
}

export default Create;

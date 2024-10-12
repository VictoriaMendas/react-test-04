import { useState, useEffect } from 'react'
import ImageGallery from "./components/ImageGallery/ImageGallery"
// import SearchBar from "./components/SearchBar/SearchBar";


function App() {
const [images, setImages] = useState([])
const [query, setQuery] = useState('')
const [page, setPage] = useState(1)
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)

useEffect(() => {
  const asyncWrapper = async () => {
    if (query === '') {
      return;
    }
  
    try {
      setIsLoading(true)
      setError(false)
      const data = await fetchImages(query, page)
  // 
  setImages((prevImages) => {
    return [...prevImages, ...data.results];
  });
  
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  asyncWrapper()
}, [query, page])

  return (
    <div>
      App
      {isLoading && <Loader/>}
      <ImageGallery />
      {/* <SearchBar onSubmit={}/> */}
    </div>
  );
}

export default App;

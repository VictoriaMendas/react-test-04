import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import { fetchImages } from "./api/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";

import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchImages(query, page);
        //
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [query, page]);

  const getQuery = async (query) => {
    setQuery(query);
    setPage(1);
  };
  const onLoadMoreBtn = async () => {
    setPage(page + 1);
  };
  const openModal = (image) => {
    setIsOpen(true);
    setModalData(image);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return (
    <div>
      <SearchBar onSubmit={getQuery} />
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && <LoadMoreBtn onClick={onLoadMoreBtn} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ImageModal
        closeModal={closeModal}
        modalData={modalData}
        modalIsOpen={modalIsOpen}
      />
      {isLoading && <Loader />}

      <Toaster />
    </div>
  );
}

export default App;

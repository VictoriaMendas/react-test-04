export default function ImageCard({ image, onImageClick }) {
  const handleClick = () => {
    onImageClick(image);
  };
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
}

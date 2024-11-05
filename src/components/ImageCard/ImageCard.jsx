import css from "./Imagecard.module.css";

export default function ImageCard({ image, onImageClick }) {
  const handleClick = () => {
    onImageClick(image);
  };
  return (
    <div>
      <img
        className={css.card}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
}

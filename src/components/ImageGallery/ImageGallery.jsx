import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({images, onImageClick}) {
  return (
    <ul>
	{images.map((image) => {
        return (
            <li key={image.id} name={image.username}>
            <div>
           <ImageCard image={image} onImageClick={onImageClick}/>
            </div>
        </li>
        )
    })}
	
</ul>

  )
}

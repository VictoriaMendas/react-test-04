export default function ImageCard({onImageClick}) {
   const handleClick = () => {
    onImageClick(image)
   }
  return (
    <div>
      <img src={image} alt={image.username} />
    </div>
  );
}

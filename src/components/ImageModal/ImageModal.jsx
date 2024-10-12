import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#yourAppElement');


export default function ImageModal () {
return (
    <div>
  <img src="" alt="" />
</div>
 
)
}
import React, { useRef, useEffect } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

interface ImageCropperProps {
  src: string;
  onClose: () => void;
  onUpdate: (croppedDataURL: string) => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ src, onClose, onUpdate }) => {
  const imageElement = useRef<HTMLImageElement>(null);
  const cropper = useRef<Cropper>();

  useEffect(() => {
    if (imageElement.current) {
      cropper.current = new Cropper(imageElement.current, {
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 1,
      });
    }

    return () => {
      if (cropper.current) {
        cropper.current.destroy();
      }
    };
  }, []);

  const handleCrop = () => {
    if (cropper.current) {
      const croppedCanvas = cropper.current.getCroppedCanvas({ width: 202, height: 202 });
      const croppedDataURL = croppedCanvas.toDataURL();
      onUpdate(croppedDataURL);
    }
  };

  return (
      <div className="image-cropper">
        <img ref={imageElement} src={src} alt="Crop" />
        <button onClick={handleCrop}>Cortar e Atualizar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    );
};

export default ImageCropper;

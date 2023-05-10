import React, { useRef, useEffect, useState } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

interface ImageCropperProps {
    photo: File | null;
    imageName: string;
    setCroppedImage: React.Dispatch<React.SetStateAction<Blob | null>>;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ photo, imageName, setCroppedImage }) => {
    const imgRef = useRef<any>(null);
    const [cropper, setCropper] = useState<Cropper | null>(null);

    const handleCropImage = () => {
        const cropper = imgRef.current?.cropper;
        if (cropper) {
            cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
                if (blob) {
                setCroppedImage(blob);
                }
            }, "image/jpeg");
        }
    };
    

    useEffect(() => {
        if (photo && imgRef.current) {
            if (cropper) {
                cropper.destroy();
            }
            const newCropper = new Cropper(imgRef.current, {
                aspectRatio: 1,
                viewMode: 1,
                dragMode: 'move',
                autoCropArea: 1,
                cropBoxResizable: false,
                cropBoxMovable: false,
                minCropBoxWidth: 602,
                minCropBoxHeight: 602,
                ready: function() {
                    newCropper.setCropBoxData({
                        width: 202,
                        height: 202,
                        left: (newCropper.getContainerData().width - 402) / 2,
                        top: (newCropper.getContainerData().height - 402) / 2
                    });
                }
            });
            setCropper(newCropper);
        } 
    }, [photo]);

    

    return (
        <>
            {photo && (
                <div className="my-2">
                    <img ref={imgRef} src={URL.createObjectURL(photo)} alt={imageName} className="col-3" />
                    <button onClick={handleCropImage}>Cut image</button>
                </div>
            )}
        </>
    );
};

export default ImageCropper;

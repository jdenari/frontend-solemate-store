import React, { useRef, useEffect, useState } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

interface ImageCropperProps {
    photo: File | null;
    imageName: string;
    setCroppedImage: React.Dispatch<React.SetStateAction<Blob | null>>;
    resetForm: () => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ photo, imageName, setCroppedImage, resetForm }) => {
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

    const handleErase = () => {
        if (cropper) {
            cropper.destroy();
            setCropper(null);
        }
        setCroppedImage(null);
        resetForm();
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
                        width: 802,
                        height: 802,
                        left: (newCropper.getContainerData().width - 1402) / 2,
                        top: (newCropper.getContainerData().height - 1402) / 2
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
                    <img ref={imgRef} src={URL.createObjectURL(photo)} alt={imageName} className="col-3 p-5 m-5" />
                    <div className="d-flex flex-row-reverse p-3 ">
                        <button onClick={handleCropImage} className='p-2 mx-1 shadow-sm bg-body-tertiary rounded-4 d-flex align-items-center'>Cut image</button>
                        <button onClick={handleErase} className='p-2 mx-1 shadow-sm bg-body-tertiary rounded-4 d-flex align-items-center'>Erase</button>
                    </div>
                </div>
            )}
        </>
    );    
};

export default ImageCropper;

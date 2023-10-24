import { icons } from '@/config/icons';
import styles from './input.module.scss';

import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { ButtonClose } from '@/components/ui/button';

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  setValue: any
}

export function InputFile({ setValue }: InputFileProps) {

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function handleChangeImage(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const fileImage = e.target.files[0];

      if (fileImage.type === "image/jpeg" || fileImage.type === "image/png") {
        setValue(fileImage);
        setImagePreview(URL.createObjectURL(fileImage));
      }
    }
  }

  function handleDeleteImage() {
    setImagePreview(null);
    setValue(null);
  }

  return (
    <div className={styles.containerLabel}>
      {imagePreview && (<ButtonClose onClick={handleDeleteImage} />)}
      <label className={styles.labelInputFile}>
        <input
          type="file"
          onChange={(e) => handleChangeImage(e)}
        />
        {
          imagePreview ? (
            <div className={styles.areaImg}>
              <img
                src={imagePreview}
                alt='Imagen do produto'
              />
            </div>
          ) : (
            <div>
              <span>
                {icons.addImage}
              </span>
              <p>Selecione uma imagen</p>
            </div>
          )
        }
      </label>
    </div>
  )
}

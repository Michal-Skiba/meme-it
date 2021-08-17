import { ButtonPrimary, ButtonSecondary, Layout, TextInput, HashTag } from 'components/';
import React, { useEffect, useRef, useState } from 'react';
import styles from './add.module.scss'
import { getImageProperties, goldenNumber } from 'utils/';
import { uniqueId } from 'lodash';

interface HashTagElement {
  id: string;
  content: string;
}

export const AddMeme = () => {
  const [upperTitle, setUpperTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hashWord, setHashWord] = useState('');
  const [uploadedPhoto, setUploadedPhoto] = useState<File | null>(null)
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState('')
  const [hashTags, setHashTags] = useState<HashTagElement[]>([]);

  const openUploadFile = () => {
    document.getElementById('meme-image')?.click();
  }

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    const file = e.target.files[0];
    const imageProperties = getImageProperties(file)
    setUploadedPhoto(file)
    setUploadedPhotoUrl(imageProperties.url);
  }

  const onKeyChangeHastTag = (e: React.KeyboardEvent) => {
    const key = e.key;
    if (key === "Enter" && hashWord) {
      const hashTagItem: HashTagElement = {
        id: uniqueId(),
        content: `#${hashWord}`,
      }
      setHashTags([...hashTags, hashTagItem]);
      setHashWord('');
    }
  }

  const handleDeleteHashTag = (id: string) => {
    const filteredHashTags = hashTags.filter((hashElement) => hashElement.id !== id);
    setHashTags(filteredHashTags);
  }

  return (
    <Layout>
      <div className={styles.container}>
        <form className={styles.formWrapper}>
          <div className={styles.inputsWrapper}>
            <TextInput label="Upper title*" value={upperTitle} id="upper-meme-title" onChange={(value) => setUpperTitle(value)} marginTop="0" maxLength={70}/>
            <TextInput label="Description" value={description} id="meme-description" onChange={(value) => setDescription(value)} marginTop="10px" maxLength={100} />
            <TextInput label="HashTags*" value={hashWord} id="meme-key-words" onChange={(value) => setHashWord(value)} onKeyUp={onKeyChangeHastTag} marginTop="10px" maxLength={40}/>
            <div className={styles.hashContainer}>
              {hashTags.map((hashItem: HashTagElement) => (
                <HashTag onDelete={handleDeleteHashTag} id={hashItem.id} content={hashItem.content} />
              ))}
            </div>
            <div className={styles.uploadButtonWrapper}>
              <ButtonPrimary onClick={() => openUploadFile()}>
                Upload File
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.photoWrapper}>
            {uploadedPhotoUrl &&
              <img className={styles.uploadedImage} src={uploadedPhotoUrl} alt="uploaded photo" />
            }
          </div>
        </form>
      </div>
      <input
        id="meme-image"
        onChange={(e) => handleUploadFile(e)}
        accept="image/*"
        type="file"
        hidden
      />
    </Layout>
  )
}

export default AddMeme;

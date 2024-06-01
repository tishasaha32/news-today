import { useState, useRef } from "react";
import { db, storage } from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const useAddNews = () => {
  const [headline, setHeadline] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [abstract, setAbstract] = useState("");
  const [section, setSection] = useState("");
  const [body, setBody] = useState("");
  const fileInputRef = useRef(null);

  const handleAddNews = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (image) {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }
      await addDoc(collection(db, "news"), {
        headline,
        author,
        imageUrl,
        abstract,
        section,
        body,
        saved: false,
      });
      toast.success("News added successfully");

      // Clear the form
      setHeadline("");
      setAuthor("");
      setImage(null);
      setAbstract("");
      setSection("");
      setBody("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error adding news:", error);
      toast.error("Failed to add news. Please try again.");
    }
  };

  return {
    headline,
    setHeadline,
    author,
    setAuthor,
    image,
    setImage,
    abstract,
    setAbstract,
    section,
    setSection,
    body,
    setBody,
    fileInputRef,
    handleAddNews,
  };
};

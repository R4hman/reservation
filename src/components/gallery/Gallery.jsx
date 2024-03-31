import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoMdClose } from "react-icons/io";

const Gallery = ({ images }) => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const getImg = (img) => {
    setTempImg(img);
    setModel(true);
  };

  console.log("images", images);
  return (
    <>
      <div className={`model ${model ? "open" : ""}`}>
        <img src={tempImg} alt="" />
        <IoMdClose onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {images?.map((image) => (
          <div className="pics" key={uuidv4()} onClick={() => getImg(image)}>
            <img src={image} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;

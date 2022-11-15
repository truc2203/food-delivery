import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import { categories } from "../utils/data";
import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";
import { storage } from "../firebase.config";
import Loader from "./Loader";
import { saveItem } from "../utils/firebaseFn";
const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [field, setField] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const upLoadImage = (e) => {
    setIsLoading(true);
    const imgFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imgFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imgFile);
    uploadTask.on(
      "state_change",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setField(true);
        setMsg("Error while uploading : Try Again");
        setAlertStatus("danger");
        setTimeout(() => {
          setField(false);
          setIsLoading(false);
        }, 3000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setField(true);
          setMsg("Image uploaded successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setField(false);
          }, 3000);
        });
      }
    );
  };
  const deleteImage = () => {
    setIsLoading(true)
    const deleteRef = ref(storage,imageAsset)
    deleteObject(deleteRef).then(() => {
      setIsLoading(false)
      setImageAsset(null)
      setField(true)
      setMsg('Image delete successfull')
      setAlertStatus('success')
      setTimeout(() => {
        setField(false)
      }, 3000);
    })
  };
  const saveDetails = () => {
    setIsLoading(true)
    try {
      if((!title || !calories || !imageAsset || !price || !category)){
        setField(true);
        setMsg("Required is can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setField(false);
          setIsLoading(false);
        }, 3000);
      }
      else{
        const data = {
          id : `${Date.now()}`,
          title : title,
          imageURL : imageAsset,
          category : category,
          calories : calories,
          qty : 1,
          price : price
        }
        saveItem(data)
        setIsLoading(false)
        setImageAsset(null)
        setField(true)
        clearData()
        setMsg('Data update successfull')
        setAlertStatus('success')
        setTimeout(() => {
          setField(false)
        }, 3000);
      }
    } catch (error) {
      console.log(error);
        setField(true);
        setMsg("Error while uploading : Try Again");
        setAlertStatus("danger");
        setTimeout(() => {
          setField(false);
          setIsLoading(false);
        }, 3000);
    }
  };

  const clearData = () => {
    setTitle('')
    setImageAsset(null)
    setPrice('')
    setCalories('')
  }

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="gap-4 w-[90%] md:w-[70%] border border-solid border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
          {field && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full  rounded-lg text-center text-xl font-bold ${
                alert === "danger"
                  ? "bg-red-400 text-red-900"
                  : "bg-green-500 text-yellow-400"
              }`}
            >
              {msg}
            </motion.p>
          )}

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFastfood className="icon-style" />
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"Give me a title..."}
              className="w-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-slate-800"
            />
          </div>
          <div className="w-full">
            <select
              onChange={(e) => setCategory(e.target.value)}
              name=""
              id=""
              className="rounded-md p-2 outline-none w-full text-lg cursor-pointer border-b-2 border-gray-300"
            >
              <option value="other" className="bg-white ">
                Select Category
              </option>
              {categories &&
                categories.map((item, i) => (
                  <option
                    key={item.id}
                    value={item.urlParamName}
                    className="text-lg border-0 outline-none bg-white capitalize text-slate-900"
                  >
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-full group flex items-center justify-center flex-col border-2 border-dotted border-gray-300 h-225 md:h-420 cursor-pointer rounded-lg">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!imageAsset ? (
                  <>
                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                      <div className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-2">
                        <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                        <p className="text-gray-500 hover:text-gray-700">
                          Click Here Yp Up Load
                        </p>
                      </div>
                      <input
                        type="file"
                        name="uploadimage"
                        accept="image/*"
                        onChange={upLoadImage}
                        className="w-0 h-0"
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <div className="relative h-full">
                      <img
                        src={imageAsset}
                        alt="upload img"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                        onClick={deleteImage}
                      >
                        <MdDelete className="text-white" />
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-3 ">
            <div className="w-full py-2 border-b border-gray-200 flex item-center gap-2">
              <MdFoodBank className="text-gray-700 text-2xl" />
              <input
                type="text"
                required
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Calories"
                className="w-full h-full text-lg bg-transparent outline-none border-none placehoder:text-gray-700"
              />
            </div>
            <div className="w-full py-2 border-b border-gray-200 flex item-center gap-2">
              <MdAttachMoney className="text-gray-700 text-2xl" />
              <input
                type="text"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="price"
                className="w-full h-full text-lg bg-transparent outline-none border-none placehoder:text-gray-700"
              />
            </div>
          </div>
          <div className="flex item-center w-full">
            <button
              type="button"
              className="m-auto md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-slate-200 font-bold"
              onClick={saveDetails}
            >
              Save{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateContainer;

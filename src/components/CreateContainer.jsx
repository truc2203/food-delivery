import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdFastfood } from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";
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
                  : "bg-green-500 text-green-800"
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
            {isLoading ? <Loader /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateContainer;

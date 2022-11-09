import React, { useState } from "react";
import { motion } from "framer-motion";
import {MdFastfood} from 'react-icons/md'
const CreateContainer = () => {
  const [field, setField] = useState(true);
  const [alert, setAlert] = useState(false);
  const [msg, setMsg] = useState(null);

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-[90%] md:w-[70%] border border-solid border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
          {field && (
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }
          }
              className={`w-full p-2 rounded-lg text-center text-xl font-bold ${
                alert === 'danger'
                  ? "bg-red-400 text-red-900"
                  : "bg-green-500 text-green-800"
              }`}
            >
              {msg}
            </motion.p>
          )}

              <div className="w-full py-2 border-b border-gray-300 flex items-center"> 
                <MdFastfood className="icon-style"/>
              </div>

        </div>
      </div>
    </>
  );
};

export default CreateContainer;

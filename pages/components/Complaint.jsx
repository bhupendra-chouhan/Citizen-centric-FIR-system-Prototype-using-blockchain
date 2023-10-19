import React, { useState } from 'react';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import toast from "react-hot-toast";

const Complaint = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: nextId } = useContractRead(contract, "nextId")
    const { mutateAsync: fileComplaint } = useContractWrite(contract, "fileComplaint");

    const handleComplaint = async () => {
        console.log(title, "  this is cosnoled ", description);

      const notification = toast.loading("Filing Complaint...");
      try {
        const data = await fileComplaint({args: [title, description]});
        toast.success(`Complaint Filed! Note Your ComplaintId:${nextId}`, {
          id: notification,
        });
        console.info("contract call successs", data);
        setTitle("");
        setDescription("");
      } catch (err) {
        toast.error("Whoops, something went wrong!", {
          id: notification,
        });
        console.error("contract call failure", err);
      }
    };

    return (
      <div className="complaint-container md: mr-[50px] md:ml-[50px]">
        <p className="complaint-title-red">Describe Your Complaint </p>
        <div className="md:flex items-center justify-between">
          <p className="complaint-text-margin">Title: </p>
          <input
            type="text"
            className="container-input md:w-[500px] w-[300px] container-input md:w-[500px] w-[300px] block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Title Here"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="md:flex items-center">
          <p className="complaint-text-normal">Description: </p>
          <textarea
            type="text"
            className="container-input md:w-[500px] w-[300px] block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Description Here"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button
          className="button-common hover:bg-green-500"
          onClick={handleComplaint}
        >
          File Complaint
        </button>
      </div>
    );
}

export default Complaint
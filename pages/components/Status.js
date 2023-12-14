import React, { useState } from 'react'
import { useContract, useContractRead } from "@thirdweb-dev/react";

const Status = () => {
    const [id, setId] = useState(0);
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: Complaints } = useContractRead(contract, "Complaints", id); {/* Accessing the registered complained using ThirdWeb*/}
    
    return (
      <div className="status-container">
        {/* Search filed complain using its complaint ID.*/}
        <div className="status">
          <p className="status-title animate-pulse">
            Check Status of Your Complaint
          </p>
          <div className="flex items-center justify-center">
            <p className="status-text">Complaint ID:</p>
            <input
              type="number"
              className='status-input md:w-[300px] container-input md:w-[500px] w-[300px] block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Description Here'
              placeholder="Enter Complaint ID"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
        </div>

        {Complaints && Complaints.title && (
          /* Show: Status of the complaint ID that has been requested*/
          <div className="status-render-container md:w-[600px]">
            <p className="status-render-title">Complaint Details</p>
            <p className="status-render-text">
              <span className="text-yellow-500"> Complaint Id : </span>{" "}
              {Complaints.id.toString()}
            </p>
            <p className="status-render-text">
              <span className="text-yellow-500"> Complaint by : </span>{" "}
              {Complaints.complaintRegisteredBy.toString()}
            </p>
            <p className="status-render-text">
              <span className="text-yellow-500"> Complaint Title : </span>{" "}
              {Complaints.title}
            </p>

            {/* Checking whether complain is approved or not:*/}
            <p className="status-render-text">
              <span className="text-yellow-500">Approval Status : </span>{" "}
              {Complaints.isApproved
                ? "Approved"
                : !Complaints.exists
                ? "Declined"
                : "Approval Pending"}
            </p>
            <p className="status-render-text">
              <span className='text-yellow-500'>Approval Remark :</span> {Complaints.approvalRemark}
            </p>
            <p className="status-render-text">
              <span className='text-yellow-500'>Resolution Status :</span>{" "}
              {Complaints.isResolved ? "Resolved" : "Resolution pending"}
            </p>
            <p className="status-render-text mb-2">
              <span className='text-yellow-500'>Resolution Remark :</span> {Complaints.resolutionRemark}
            </p>
          </div>
        )}
      </div>
    );
}

export default Status
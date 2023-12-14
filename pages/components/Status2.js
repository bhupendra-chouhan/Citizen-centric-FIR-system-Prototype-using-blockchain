import React, { useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/react";

const Status = () => {
  const [id, setId] = useState(0);
  const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  const { data: Complaints } = useContractRead(contract, "Complaints", id);
  {
    /* Accessing the registered complained using ThirdWeb*/
  }

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
            Complaint Id : {Complaints.id.toString()}
          </p>
          <p className="status-render-text">
            Complaint by : {Complaints.complaintRegisteredBy.toString()}
          </p>
          <p className="status-render-text">
            Complaint Title : {Complaints.title}
          </p>

          {/* Checking whether complain is approved or not:*/}
          <p className="status-render-text">
            Approval Status :{" "}
            {Complaints.isApproved
              ? "Approved"
              : !Complaints.exists
              ? "Declined"
              : "Approval Pending"}
          </p>
          <p className="status-render-text">
            Approval Remark : {Complaints.approvalRemark}
          </p>
          <p className="status-render-text">
            Resolution Status :{" "}
            {Complaints.isResolved ? "Resolved" : "Resolution pending"}
          </p>
          <p className="status-render-text mb-2">
            Resolution Remark : {Complaints.resolutionRemark}
          </p>
        </div>
      )}

      {Complaints && Complaints.title && (
        /* Show: Status of the complaint ID that has been requested*/
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>PROPERTY </TableColumn>
            <TableColumn>VALUES</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Complaint Id</TableCell>
              <TableCell>{Complaints.id.toString()}</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Complaint by</TableCell>
              <TableCell>
                {Complaints.complaintRegisteredBy.toString()}
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Complaint Title</TableCell>
              <TableCell>{Complaints.title}</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Approval Status</TableCell>
              <TableCell>
                {Complaints.isApproved
                  ? "Approved"
                  : !Complaints.exists
                  ? "Declined"
                  : "Approval Pending"}
              </TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>Approval Remark</TableCell>
              <TableCell>{Complaints.approvalRemark}</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell>Resolution Status</TableCell>
              <TableCell>
                {Complaints.isResolved ? "Resolved" : "Resolution pending"}
              </TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell>Resolution Remark</TableCell>
              <TableCell>{Complaints.resolutionRemark}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default Status;

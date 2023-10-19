import React, { useState } from 'react';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";

const Getter = () => {
    // Capturing states of complaint & resolution ID and complaint and resolution Remark
    const [id, setId] = useState(0);
    const [rId, setRId] = useState(0);
    const [aRemark, setARemark] = useState("");
    const [rRemark, setRRemark] = useState("");

    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT); // Initiating contract instance
    const { data: nextId } = useContractRead(contract, "nextId")
    const { data: pendingApprovals } = useContractRead(contract, "pendingApprovals", 0)
    const { data: pendingResolutions } = useContractRead(contract, "pendingResolutions", 0)

    // Callculating the pending approval IDs and pending resolution IDs
    const { mutateAsync: calcPendingApprovalIds } = useContractWrite(contract, "calcPendingApprovalIds")
    const { mutateAsync: calcPendingResolutionIds } = useContractWrite(contract, "calcPendingResolutionIds")

    // For Approving, Resolving and Discarding complaints
    const { mutateAsync: approveComplaint } = useContractWrite(contract, "approveComplaint")
    const { mutateAsync: resolveComplaint } = useContractWrite(contract, "resolveComplaint")
    const { mutateAsync: discardComplaint } = useContractWrite(contract, "discardComplaint")

    // 
    // Getting Pending Approval IDs:
    const getPendingApprovals = async () => {
        try {
            const data = await calcPendingApprovalIds({ args: [] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }
    
    // Getting Pending Resolution IDs:
    const getPendingResolutions = async () => {
        try {
            const data = await calcPendingResolutionIds({ args: [] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    // To Approve complaing:
    const handleApproveComplaint = async () => {
        try {
            const data = await approveComplaint({
              args: [id, aRemark]
            });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    // To Approve Decline:
    const handleDeclineComplaint = async () => {
        try {
            const data = await discardComplaint({args: [id, aRemark]});
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    // To Approve Resolve:
    const handleResolveComplaint = async () => {
        try {
            const data = await resolveComplaint({args: [rId, rRemark]});
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    return (
        <div className='getter-container md:p-[30px]  md:m-5 xl:flex xl:flex-row'>
            
            {/*--------------- Pending COMPLAINTS Section:*/}
            <div className='getter-card md:m-5'>
                <p className='getter-card-title'>Pending Approvals</p>
                
                <div className='flex items-center mt-3'>
                    {/* Get the next pending complaint ID that needs to be approved*/}
                    <button className="button-common hover:bg-blue-900" onClick={getPendingApprovals}>Next Pending Approval ID</button>
                    {
                        pendingApprovals && (
                            <p className='getter-card-number'>: {pendingApprovals.toString()}</p> /*getting ID as response */
                        )
                    }
                </div>

                <div className='md:flex items-center'>
                    {/*Taking input of compaint ID.*/}
                    <p className='text-2xl font-semibold'>Complaint Id: </p>
                    <input type="number" className='p-1 m-1 md:w-[500px] w-[200px] rounded-sm bg-[#D2DAFF]' placeholder='Enter Id Here'
                        onChange={(e) => { setId(e.target.value) }} />
                </div>

                <div className='md:flex items-center'>
                    {/*Taking input of Remarks*/}
                    <p className='text-2xl font-semibold'>Your Remark: </p>
                    <input type="text" className='p-1 m-1 md:w-[500px] w-[200px] rounded-sm bg-[#D2DAFF]' placeholder='Enter Remark Here'
                        onChange={(e) => { setARemark(e.target.value) }} />
                </div>

                {/* Clickables to Approve and to Decline */}
                <div className='flex'>
                    <button className="button-common hover:bg-blue-900" onClick={handleApproveComplaint}>Approve Complaint</button>
                    <button className="button-common hover:bg-blue-900" onClick={handleDeclineComplaint}>Decline Complaint</button>
                </div>

            </div>

            {/* --------------- Pending RESOLUTION Section:*/}
            <div className='getter-card md:m-5'>
                <p className='getter-card-title'>Pending Resolutions</p>
                <div className='flex items-center mt-3'>
                    {/*Get the next pending Resolution ID that needs to be approved*/}
                    <button className="button-common hover:bg-blue-900" onClick={getPendingResolutions}>Next Pending Resolution ID</button>
                    {
                        pendingResolutions && (
                            <p className='getter-card-number'>: {pendingResolutions.toString()}</p>
                        )
                    }

                </div>

                <div className='md:flex items-center'>
                    {/*Taking input of Resolution ID.*/}
                    <p className='text-2xl font-semibold'>Complaint Id: </p>
                    <input type="number" className='getter-input md:w-[500px]' placeholder='Enter Id Here'
                        onChange={(e) => { setRId(e.target.value) }} />
                </div>
                <div className='md:flex items-center'>
                    {/*Taking input of Remarks*/}
                    <p className='text-2xl font-semibold'>Your Remark: </p>
                    <input type="text" className='getter-input md:w-[500px]' placeholder='Enter Remark Here'
                        onChange={(e) => { setRRemark(e.target.value) }} />
                </div>
                <button className="button-common hover:bg-blue-900" onClick={handleResolveComplaint}>Resolve Complaint</button>
            </div>

        </div>
    )
}

export default Getter
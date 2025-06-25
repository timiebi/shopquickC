"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import axios from "@/lib/axios"; // ← use axios instance
import { Dispatch, useState } from "react";
import toast from "react-hot-toast";

type WaitlistModalProps = {
   isOpen: boolean;
   onClose: () => void;
   setFormOpen: Dispatch<React.SetStateAction<boolean>>;
   children?: React.ReactNode;
};

export function WaitlistModalComponent({ isOpen, setFormOpen }: WaitlistModalProps) {
   const [successOpen, setSuccessOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      if(formData.firstname === "" || formData.lastname === "" || formData.email === "") {
         toast.error("Please fill in all fields.");
         return;
      }
      try {
         await axios.post("/user/store-user", formData);
          setLoading(false);
         toast.success("Successfully joined the waitlist!");
         
         setFormOpen(false);
         setSuccessOpen(true);
         
      } catch (error: any) {
         toast.error(
            error?.response?.data?.message ||
               "There was an error submitting the form. Please try again.",
         );
          setLoading(false);
      }finally{
        setLoading(false);
      }
   };

   return (
    <div>
      {!successOpen?<Dialog open={isOpen} onOpenChange={setFormOpen}>
         <DialogContent style={{ maxWidth: "400px" }}>
            <DialogHeader>
               <DialogTitle className="font-normal text-[1.5rem] text-[#0A0D14]">
                  Join the Waitlist
               </DialogTitle>
               <DialogTitle className="font-normal text-[1rem] text-[#525866]">
                  We’re almost ready. Save your spot on the waitlist.
               </DialogTitle>

               <form className="mt-5 max-w-[368px] w-full" onSubmit={handleSubmit}>
                  <p className="text-[#868C98] text-[12px] font-normal uppercase">
                     be among the first wave
                  </p>

                  <div className="my-4 grid grid-cols-2 gap-3.5 items-center">
                     <div className="flex flex-col">
                        <label className="text-[14px] text-[#525866] font-normal mb-1">
                           First Name
                        </label>
                        <input
                           name="firstname"
                           value={formData.firstname}
                           onChange={handleChange}
                           className="py-[8px] px-[1rem] border-[#E2E4E9] border rounded-[5px]"
                           placeholder="John"
                        />
                     </div>

                     <div className="flex flex-col">
                        <label className="text-[14px] text-[#525866] font-normal mb-1">
                           Last Name
                        </label>
                        <input
                           name="lastname"
                           value={formData.lastname}
                           onChange={handleChange}
                           className="py-[8px] px-[1rem] border-[#E2E4E9] border rounded-[5px]"
                           placeholder="Doe"
                        />
                     </div>
                  </div>

                  <div className="flex flex-col">
                     <label className="text-[14px] text-[#525866] font-normal mb-1">
                        Email Address
                     </label>
                     <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="py-[8px] px-[1rem] border-[#E2E4E9] border rounded-[5px]"
                        placeholder="Enter Email Address"
                     />
                  </div>

                  <button
                     type="submit"
                     className="cursor-pointer mt-4 w-full bg-[#08569C] text-[#fff] py-[8px] px-[1rem] rounded-[5px]"
                  >
                     {loading?"loading...":"Join Waitlist"}
                  </button>
               </form>
            </DialogHeader>
         </DialogContent>
      </Dialog>:
     
           ( <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
                <DialogContent style={{ maxWidth: "400px" }}>
                    <DialogHeader>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="36" rx="18" fill="#EBF1FF" />
                            <path
                                d="M16.4996 20.379L23.3936 13.4843L24.4548 14.5448L16.4996 22.5L11.7266 17.727L12.7871 16.6665L16.4996 20.379Z"
                                fill="#375DFB"
                            />
                        </svg>
                        <DialogTitle className="font-normal text-[1.5rem] text-[#0A0D14]">
                            You have been added
                        </DialogTitle>
                        <DialogTitle className="font-normal text-[1rem] text-[#525866]">
                            Hi John, You are spot on! Await the big news
                        </DialogTitle>
                    </DialogHeader>
                    <button
                        onClick={() => setSuccessOpen(false)}
                        className="mt-4 w-full bg-[#375DFB] text-[#fff] py-[8px] px-[1rem] rounded-[5px]"
                    >
                        Close
                    </button>
                </DialogContent>
            </Dialog>)}
      </div>
   );
}

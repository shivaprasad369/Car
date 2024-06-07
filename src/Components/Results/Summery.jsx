import { Divider } from "@mui/material";
import React from "react";

export default function Summery({ datas }) {
  return (
    <div className="px-[10%]  w-[100%] flex justify-center items-center">
      <div className="flex flex-col gap-5 bg-gray-100 px-5 pb-[2rem]">
        <div className="text-[25px] flex flex-c0l gap-5 leading-[35px] font-bold text-orange-400 text-center justify-center items-center mt-[2rem] uppercase">order Detals</div>
        <div className="mt-[2rem]  w-[40%] ml-[60%] font-bold tracking-wider flex flex-col ">
          <img
            src={require("../../Assets/kogo.png")}
            alt="order"
            className="w-[5rem] mb-4 "
          />
          <h1 className="uppercase">Sri ganesh travels.</h1>
          <p>yourEmail@gmail.com.</p>
          <p>+91 836 225 1917.</p>
          <p>
            Chennamma Circle, Mahaveer Complex, Sadashiv Nagar, Hubballi,
            Karnataka 580029.
          </p>
        </div>
        <Divider />
        <div className="flex flex-col gap-2">
          <h1 className="text-[20px] font-bold tracking-wider">Rental Details</h1>
          <div className="">
            <h1>Shivaprasad sapare</h1>
            <h2>Shivu369sapare@gmail.com.</h2>
            <h2>9380309188</h2>
            <h1>Trip type: Local</h1>
            <h2>car name : swift</h2>
            <h2>From :gadag</h2>
            <h2>To :hubli</h2>
            <h2>PickUp date</h2>
            <h2>Pickup At</h2>
            <h2>Return date</h2>
          </div>
        </div>
        <Divider  className="my-2"/>
        <div className="">
          <h1 className="text-[20px] font-bold tracking-wider mb-2">Terms and Conditions</h1>
          <div className="flex flex-col gap-2">
            <span>1. Inter State Road Tax Is Applicable</span>
            <span>2. GST Will Be Charge Total Amount Of 5%</span>
            <span>3. Parking And Toll Fees As Applicable.</span>
            <span>4. Night After 12.00AM Driver Batta One Day Extra.</span>
            <span>
              5. Any Hike In Fuel Charges Hire Charges Will Change As Per The
              Ratio.
            </span>
          </div>
        </div>
<Divider/>
        <div>
        Thank you for choosing our car rental service! If you have any questions or need further assistance, please contact us at sgthubli@gmail.com or call us at +91 836 225 1917
        </div>
      </div>
    </div>
  );
}

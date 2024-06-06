import React, { useEffect } from 'react'
import Footer from './Footer'

import Header from './Headers'
import Menu from './Menu'
import { useLocation } from 'react-router-dom';
export default function Tac() {
    const location = useLocation();
    useEffect(() => {
      const element = document.getElementById("tac");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);
  return (
    <>
<Header/>
    <div id='tac' className='w-[100%] px-[10%] flex flex-col gap-4 py-[5rem]'>
      <div className='text-[25px] leading-[40px] font-bold tracking-wide text-orange-400'>
        <h1>Terms and Conditions</h1>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-[16px] tracking-wider capitalize'>Introduction:</h1>
        <p className='opacity-[0.8] tracking-wider'>Welcome to Quick Response Driver, your one-stop platform for convenient and reliable transportation, home services, errands, and more! These Terms and Conditions (“Terms”) govern your access to and use of our website, mobile applications, and services (collectively, the “Platform”). By accessing or using the Platform, you agree to be bound by these Terms.</p>

      </div>
      <div className=' flex flex-col gap-5'>
        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>1. General Terms:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem]'>
                    <li className='3'><h1 className='font-bold'> Definitions:</h1>
                    <ul className='list-disc ml-[2rem] opacity-[0.8] tracking-wider'>
                        <li>“Quick Response Driver,” “we,” “us,” or “our” refers to [Your Company Name], the owner and operator of the Platform.</li>
                        <li>“User” or “you” refers to any individual who accesses or uses the Platform.</li>
                    </ul>
                    </li>
                    <li className='mt-3'><h1 className='font-bold'>Eligibility:</h1> <p className='list-disc ml-[2rem] opacity-[0.8] tracking-wider'>You must be 18 years of age or older with a valid government-issued ID to use the Platform.</p></li>
                </ul>
            </div>
        </div>
        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>2. Services Provided:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem]  opacity-[0.8]'>
                    <li className='3'><h1 className=''> Quick Response Driver offers a variety of services, including:</h1>
                    <ul className='list-disc ml-[2rem]  tracking-wider'>
                        <li>Transportation (taxi booking, ride-hailing, airport transfers)</li>
                        <li>Home Services (cleaning, handyman services, plumbing, electrical work)</li>
                        <li>Errands (grocery delivery, laundry pickup and delivery, pet care services)</li>
                    </ul>
                    </li>
                    <li>Service availability may vary by location and time of day.</li>
                    <li>Specific service details, limitations, and exclusions are outlined on the Platform.</li>
                    <li>Payment methods accepted are listed on the Platform. Cash on delivery may be available for certain services.</li>
                </ul>
            </div>
        </div>
        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>3. User Accounts:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>You may be required to create an account to access certain features of the Platform.</h1>
                   
                    </li>
                    <li>Account verification may involve email or phone number verification.</li>
                    <li>You are responsible for maintaining secure passwords and not sharing your account information.</li>
                    <li>We reserve the right to terminate or suspend your account for violating these Terms.</li>
                </ul>
            </div>
        </div>

        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>4. Booking and Service Provision:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>Booking services is easy through the Platform. Follow the instructions provided.</h1>
                   
                    </li>
                    <li>You are responsible for scheduling services and adhering to our cancellation and rescheduling policies.</li>
                    <li>We strive to meet service delivery standards, but unforeseen circumstances may arise.</li>
                   
                </ul>
            </div>
        </div>

        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>5. Driver and Service Provider Policies:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>
                    Drivers and service providers undergo rigorous background checks and are required to adhere to a code of conduct.</h1>
                   
                    </li>
                    <li>You are responsible for scheduling services and adhering to our cancellation and rescheduling policies.</li>
                    <li>They maintain their own insurance coverage as required by law.</li>
                   
                </ul>
            </div>
        </div>

        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>6. User Conduct:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>
                    Prohibited activities include harassment, fraud, illegal behavior, and providing false information.</h1>
                    </li>
                    <li>We may terminate your account or take legal action for violating user conduct policies.</li>
                </ul>
            </div>
        </div>

        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>7. Intellectual Property:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>
                    Quick Response Driver owns the content and intellectual property rights associated with the Platform. Unauthorized use is prohibited.</h1>
                    </li>

                </ul>
            </div>
        </div>

        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>8. Privacy and Data Protection:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>
                    Our Privacy Policy explains how we collect, use, and protect your personal information. By using the Platform, you consent to our privacy practices.</h1>
                    </li>

                </ul>
            </div>
        </div>

        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>9. Liability and Disclaimers:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>
                    While we strive to provide reliable service, Quick Response Driver is not liable for any damages or losses resulting from your use of the Platform.</h1>
                    </li>
                    <li>We disclaim warranties related to service availability and accuracy.</li>
                    <li> Terms include provisions for resolving disputes and indemnifying Quick Response Driver.</li>

                </ul>
            </div>
        </div>

        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>10. Termination of Agreement:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>
                    We reserve the right to terminate your access to the Platform for any reason, including violation of these Terms.</h1>
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>11. Miscellaneous:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>
                    These Terms constitute the entire agreement between you and Shri Ganesh Travels.</h1>

                    </li>
                    <li>We may amend these Terms at any time, and any changes will be communicated to you.</li>
                    <li>If any part of these Terms is deemed invalid, the remainder remains in effect.</li>
                    <li>These Terms are governed by the law .</li>
                </ul>
            </div>
        </div>

        <div>
            <h1  className='font-bold text-[16px] tracking-wider capitalize'>12. Contact Information:</h1>
            <div className='tracking-wider mt-[1rem]'>
                <ul style={{listStyleType:'disc'}} className='list-disc ml-[3rem] flex-col gap-2  opacity-[0.8]'>
                    <li className='3'><h1 className=''>
                    For questions or concerns, please contact us at [sgthubli@gmail.com] or +91 836 225 1917 . Our customer support team is available to assist you.</h1>

                    </li>
                   
                </ul>
            </div>
        </div>
        <h1  className='font-bold text-[16px] tracking-wider capitalize'>Additional Considerations:</h1>
      </div>
    </div>
    <Menu/>
    <Footer/>
    </>
  )
}

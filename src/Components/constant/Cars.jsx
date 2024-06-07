const data = [
  
  {
    carId: 2,
    name: "Toyota Etios",
    type: "Local",
    price: [
      {
        4: {
          "40km": 1200,
        },
        8: {
          "80km": 2200,
        },
      },
    ],
    Exclusive: {
      Hour: 60,
      km: 11,
    },
    facilities: {
      seats: 4,
      AC: true,
    },
    Photo: "toyota-etios.png",
  },
  {
    carId: 1,
    name: "Swift Dzire",
    type: "Local",
    price: [
      {
        4: {
          "40km": 1200,
        },
        8: {
          "80km": 2200,
        },
      },
    ],
    Exclusive: {
      Hour: 60,
      km: 11,
    },
    facilities: {
      seats: 4,
      AC: true,
    },
    Photo: "swift.png",
  },
  {
    carId: 3,
    name: "Honda City",
    type: "Local",
    price: [
      {
        4: {
          "40km": 1800,
        },
        8: {
          "80km": 3000,
        },
      },
    ],
    Exclusive: {
      Hour: 70,
      km: 12,
    },
    facilities: {
      seats: 4,
      AC: true,
    },
    Photo: "hondacity.png",
  },
  {
    carId: 4,
    name: "Innova",
    type: "Local",
    price: [
      {
        4: {
          "40km": 1600,
        },
        8: {
          "80km": 3500,
        },
      },
    ],
    Exclusive: {
      Hour: 70,
      km: 16,
    },
    facilities: {
      seats: 7,
      AC: true,
    },
    Photo: "Innova.png",
  },
  {
    carId: 5,
    name: "Toyota Innova Crysta",
    type: "Local",
    price: [
      {
        4: {
          "40km": 1600,
        },
        8: {
          "80km": 3500,
        },
      },
    ],
    Exclusive: {
      Hour: 70,
      km: 16,
    },
    facilities: {
      seats: 7,
      AC: true,
    },
    Photo: "toyotaCryst.png",
  },
  {
    carId: 6,
    name: "Swift Dzire",
    type: "Airport",
    price: [
      {
        4: {
          "40km": 700,
        },
        8: {
          "80km": 700,
        },
      },
    ],
    // Exclusive: {
    //   Hour: 70,
    //   km: 16,
    // },
    facilities: {
      seats: 4,
      AC: true,
    },
    Photo: "swift.png",
  },
  // {
  //   carId: 7,
  //   name: "Indigo",
  //   type: "Airport",
  //   price: [
  //     {
  //       4: {
  //         "40km": 700,
  //       },
  //       8: {
  //         "80km": 700,
  //       },
  //     },
  //   ],
  //   // Exclusive: {
  //   //   Hour: 70,
  //   //   km: 16,
  //   // },
  //   facilities: {
  //     seats: 4,
  //     AC: true,
  //   },
  //   Photo: "indigo.png",
  // },
  {
    carId: 8,
    name: "Innova",
    type: "Airport",
    price: [
      {
        4: {
          "40km": 1200,
        },
        8: {
          "80km": 1200,
        },
      },
    ],
    // Exclusive: {
    //   Hour: 70,
    //   km: 16,
    // },
    facilities: {
      seats: 7,
      AC: true,
    },
    Photo: "Innova.png",
  },
  {
    carId: 9,
    name: "Tavera",
    type: "Airport",
    price: [
      {
        4: {
          "40km": 1000,
        },
        8: {
          "80km": 1000,
        },
      },
    ],
    // Exclusive: {
    //   Hour: 70,
    //   km: 16,
    // },
    facilities: {
      seats: 8,
      AC: true,
    },
    Photo: "Tavera.png",
  },


  {
    carId: 18,
    name: <h1 className="text-[20px] leading-[25px]">Swift Dzire<br/><span className="text-[14px] text-gray-500 tracking-wider ">A/C <br /> <b>4 seater</b></span></h1>,
    // name: <h1> Bus<br/><span>A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 250 <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
          <h1 className="leading-[25px]">Per Day 250km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.11 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:300
    },
    facilities: {
      seats:4,
      AC: true,
    },
    Photo: "swift.png",
  },
  {
    carId: 19,
    name: <h1 className="text-[20px] leading-[25px]">Toyota Etios<br/><span className="text-[14px] text-gray-500 tracking-wider ">A/C <br /> <b>4 seater</b></span></h1>,
    // name: <h1> Bus<br/><span>A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
          <h1 className="leading-[25px]">Per Day 250km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.11 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:300
    },
    facilities: {
      seats: 4,
      AC: true,
    },
    Photo: "toyota-etios.png",
  },
  {
    carId: 20,
    name: <h1 className="text-[20px] leading-[25px]">Honda City<br/><span className="text-[14px] text-gray-500 tracking-wider "> <br /> <b>4 seater</b></span></h1>,
    // name: <h1> Bus<br/><span>A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
          <h1 className="leading-[25px]">Per Day 250km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.12 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:300
    },
    facilities: {
      seats: 4,
      AC: true,
    },
    Photo: "hondacity.png",
  },
 
  {
    carId: 24,
    name: <h1 className="text-[20px] leading-[25px]">Innova<br/><span className="text-[14px] text-gray-500 tracking-wider "> <br /> <b>7 seater</b></span></h1>,
    // name: <h1> Bus<br/><span>A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
          <h1 className="leading-[25px]">Per Day 300km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.16 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:300
    },
    facilities: {
      seats: 7,
      AC: true,
    },
    Photo: "Innova.png",
  },
  {
    carId: 24,
    name: <h1 className="text-[20px] leading-[25px]">Innova Crysta<br/><span className="text-[14px] text-gray-500 tracking-wider "> <br /> <b>7 seater</b></span></h1>,
    // name: <h1> Bus<br/><span>A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
          <h1 className="leading-[25px]">Per Day 300km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.18 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:300
    },
    facilities: {
      seats: 7,
      AC: true,
    },
    Photo: "toyotaCryst.png",
  },
  {
    carId: 22,
    name: <h1 className="text-[20px] leading-[25px]">Tavera<br/><span className="text-[14px] text-gray-500 tracking-wider ">Non A/C <br /> <b>8 seater</b></span></h1>,
    // name: <h1> Bus<br/><span>A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
          <h1 className="leading-[25px]">Per Day 300km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.14 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:300
    },
    facilities: {
      seats: 8,
      AC: false,
    },
    Photo: "Tavera.png",
  },
  {
    carId: 23,
    name: <h1 className="text-[20px] leading-[25px]">Tavera<br/><span className="text-[14px] text-gray-500 tracking-wider ">A/C <br /> <b>8 seater</b></span></h1>,
    // name: <h1> Bus<br/><span>A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
          <h1 className="leading-[25px]">Per Day 300km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.15 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:300
    },
    facilities: {
      seats: 8,
      AC: true,
    },
    Photo: "Tavera.png",
  },
  {
    carId: 21,
    name: <h1 className="text-[20px] leading-[25px]">Cruizer<br/><span className="text-[14px] text-gray-500 tracking-wider ">Non A/C <br /> <b>14 seater</b></span></h1>,
    // name: <h1> Bus<br/><span>A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
          <h1 className="leading-[25px]">Per Day 300km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.15 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:300
    },
    facilities: {
      seats: 14,
      AC: false,
    },
    Photo: "Crusor.png",
  },
  {
    carId: 10,
    name: <h1 className="text-[20px] leading-[25px]">Tempo Traveler<br/><span className="text-[14px] text-gray-500 tracking-wider ">Non A/C</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
            <h1>Per Day 300km <span>Rs.19 Per km0.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
             <h1 className="leading-[25px]">Per Day 300km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.19 Per km.</span></h1>

          {/* <h1>Per Day 300km <span>Rs.19 Per km0.</span></h1> */}
        </div>,
        },
      },
    ],
    Exclusive: {
  Batta:400
    },
    facilities: {
      seats: 10+1,
      AC: false,
    },
    Photo: "Tempo.png",
  },
  {
    carId: 11,
    name: <h1 className="text-[20px] leading-[25px]">Tempo Traveler<br/><span className="text-[14px] text-gray-500 tracking-wider ">A/C</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
            <h1>Per Day 300km <span>Rs.21 Per km0.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
             <h1 className="leading-[25px]">Per Day 300km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.21 Per km.</span></h1>

          {/* <h1>Per Day 300km <span>Rs.21 Per km0.</span></h1> */}
        </div>,
        },
      },
    ],
    Exclusive: {
   
      Batta:400
    },
    facilities: {
      seats: 10+1,
      AC: true,
    },
    Photo: "Tempo.png",
  },
  {
    carId: 12,
    name: <h1 className="text-[20px] leading-[25px]">Mini bus<br/><span className="text-[14px] text-gray-500 tracking-wider ">Non A/C <br /> <b>20 seater</b></span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
            <h1>Per Day 300km <span>Rs.29 Per km0.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
             <h1 className="leading-[25px]">Per Day 300km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.29 Per km.</span></h1>

          {/* <h1>Per Day 300km <span>Rs.29 Per km0.</span></h1> */}
        </div>,
        },
      },
    ],
    Exclusive: {
    batta:500
      
    },
    facilities: {
      seats: 20,
      AC: false,
    },
    Photo: "Minibus.png",
  },
  {
    carId: 13,

    name: <h1 className="text-[20px] leading-[25px]">Mini bus<br/><span className="text-[14px] text-gray-500 tracking-wider "> A/C <br /> <b>20 seater</b></span></h1>,
    // name: <h1>Mini Bus<br/><span> A/C 20 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
            <h1>Per Day 300km <span>Rs.35 Per km0.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
             <h1 className="leading-[25px]">Per Day 300km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.35 Per km.</span></h1>

          {/* <h1>Per Day 300km <span>Rs.35 Per km0.</span></h1> */}
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:500
     
    },
    facilities: {
      seats: 20,
      AC:true,
    },
    Photo: "Minibus.png",
  },
  {
    carId: 14,
    name: <h1 className="text-[20px] leading-[25px]">Mini bus<br/><span className="text-[14px] text-gray-500 tracking-wider ">Non A/C <br /> <b>33 seater</b></span></h1>,
    // name: <h1>Mini Bus<br/><span>Non A/C 33 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 350km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.39 Per km.</span></h1>

            {/* <h1>Per Day 350km <span>Rs.39 Per km0.</span></h1> */}
          </div>,
        },
        8: {
          "80km": <div>
                      <h1 className="leading-[25px]">Per Day 350km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.39 Per km.</span></h1>

        </div>,
        },
      },
    ],
    Exclusive: {
      Batta:600
    },
    facilities: {
      seats: 33,
      AC: false,
    },
    Photo: "Minibus.png",
  },
  {
    carId: 15,
    name: <h1 className="text-[20px] leading-[25px]">Mini bus<br/><span className="text-[14px] text-gray-500 tracking-wider ">A/C <br /> <b>33 seater</b></span></h1>,
    // name: <h1>Mini bus<br/><span>A/C 33 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 350km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.45 Per km.</span></h1>
            {/* <h1>Per Day 350km <span>Rs.45 Per km0.</span></h1> */}
          </div>,
        },
        8: {
          "80km": <div>
                     <h1 className="leading-[25px]">Per Day 350km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.45 Per km.</span></h1>

        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:600
    },
    facilities: {
      seats: 33,
      AC: true,
    },
    Photo: "Minibus.png",
  },
  {
    carId: 16,
    name: <h1 className="text-[20px] leading-[25px]">Bus<br/><span className="text-[14px] text-gray-500 tracking-wider ">Non A/C <br /> <b>49 seater</b></span></h1>,
    // name: <h1>bus<br/><span>Non A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.45 Per km.</span></h1>
            {/* <h1>Per Day 400km <span>Rs.45 Per km0.</span></h1> */}
          </div>,
        },
        8: {
          "80km": <div>
           <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.45 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:1000
    },
    facilities: {
      seats: 49,
      AC: false,
    },
    Photo: "bus.png",
  },
  {
    carId: 17,
    name: <h1 className="text-[20px] leading-[25px]">Bus<br/><span className="text-[14px] text-gray-500 tracking-wider ">A/C <br /> <b>49 seater</b></span></h1>,
    // name: <h1> Bus<br/><span>A/C 49 seater</span></h1>,
    type: "Round",
    price: [
      {
        4: {
          "40km": <div>
             <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
          </div>,
        },
        8: {
          "80km": <div>
          <h1 className="leading-[25px]">Per Day 400km <br /> <span  className="text-[14px] text-gray-500 font-bold">Rs.55 Per km.</span></h1>
        </div>,
        },
      },
    ],
    Exclusive: {
     Batta:1000
    },
    facilities: {
      seats: 49,
      AC: true,
    },
    Photo: "bus.png",
  },



];
export default data;
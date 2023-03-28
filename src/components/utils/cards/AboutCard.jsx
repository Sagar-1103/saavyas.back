import React from 'react'

function AboutCard() {
  return (
    
        <div className="flex md:flex-col rounded-lg md:justify-start md:items-start md:px-2 justify-center items-center gap-3 bg-[#17294d] w-[97%] min-h-[150px] relative p-1 min-h-3">
            
            <div className="bg-[#111e38] p-2 md:w-[250px] md:h-[250px] w-[40%] h-[150px] rounded-md flex justify-center items-center">
                <img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="img" className='max-h-[150px] md:max-h-[250px]'/>
            </div>

            <div className="text-left w-[60%] h-[100%]  rounded-md flex gap-1 flex-col justify-center md:items-left md:justify-start">
                <span className='text-left font-semibold md:text-lg text-lg font-lostfish'>
                    Someone's Name
                </span>
                <span className='font-poppins text-left text-xs flex gap-2 items-center'>983948387927</span>
                <span className='font-poppins text-left text-xs flex gap-2 items-center'>abhiraajverma@gmail.com</span>
                
            </div>
        </div>
  )
}

export default AboutCard
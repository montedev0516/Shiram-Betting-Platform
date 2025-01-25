import { useEffect, useState } from "react";
import Banner from "../../components/Banner"
import Card from "../../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../../sidebar/Sidebar";
import Newsletter from "../../components/Newsletter";
import './effect.scss';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const imgs_banner = [
    "https://tezcdn.io/casino/casino-highlight/aviator-730-280.gif",
    "https://tezcdn.io/casino/casino-highlight/wingogames-730-280.gif",
    "https://tezcdn.io/casino/casino-highlight/mac88-730*280.webp",
    "https://tezcdn.io/casino/casino-highlight/fun-games-730x280.webp",
    "https://shriram999.com/assets/img/desktop/banner-1.webp",
    "https://shriram999.com/assets/img/desktop/banner-2.webp",
    "https://shriram999.com/assets/img/desktop/banner-3.webp",
    "https://shriram999.com/assets/img/desktop/banner-4.webp",
  ];

  const imgs_board_right = [
    "https://shriram999.com/assets/img/roulette.webp",
    "https://shriram999.com/assets/img/sicbo.webp",
    "https://shriram999.com/assets/img/dragontiger.webp",
    "https://shriram999.com/assets/img/desktop/banner-4.webp",
    "https://shriram999.com/assets/img/desktop/casino/casino5.webp",
    "https://shriram999.com/assets/img/desktop/casino/casino9.webp",
    "https://shriram999.com/assets/img/desktop/exchage/wheelBetCasinoNew.webp",
    "https://shriram999.com/assets/img/desktop/exchage/32casinoCards.webp",
  ];

  const imgs_board_right_second = [
    "https://shriram999.com/assets/img/desktop/casino/casino4.webp",
    "https://shriram999.com/assets/img/desktop/casino/casino5.webp",
    "https://shriram999.com/assets/img/desktop/casino/casino6.webp",
    "https://shriram999.com/assets/img/desktop/casino/casino8.webp",
    "https://shriram999.com/assets/img/desktop/casino/casino9.webp",
    "https://shriram999.com/assets/img/desktop/casino/casino10.webp",
    "https://shriram999.com/assets/img/desktop/casino/casino-dreamcatcher.webp",
    "https://shriram999.com/assets/img/desktop/casino/casino12.webp",
  ];

  const cellStyle = {
    overflow: 'hidden', // Hide overflow for each cell
  };

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://mern-job-portal-website.vercel.app/all-jobs").then(res => res.json()).then(data => {
  //     setJobs(data);
  //     setIsLoading(false)
  //   })
  // }, [])

  // // console.log(jobs)

  // const [query, setQuery] = useState("");
  // const handleInputChange = (event) => {
  //   setQuery(event.target.value)
  // }

  // // FILTER JOBS BY TITLE
  // const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  // // console.log(filteredItems)

  // // Radio Filtering

  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value)
  // }

  // // Button based Filtering
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value)
  // }

  // //Calculate the index range
  // const calculatePageRange = () => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   return { startIndex, endIndex };
  // }

  // // Function for the next page
  // const nextPage = () => {
  //   if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }

  // // Function for the previous page

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1)
  //   }
  // }


  // //Main Function
  // const filteredData = (jobs, selected, query) => {
  //   let filteredJobs = jobs;

  //   //Filtering Input Items
  //   if (query) {
  //     filteredJobs = filteredItems;
  //   }

  //   //Category Filtering

  //   if (selected) {
  //     filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate,

  //     }) =>
  //       jobLocation.toLowerCase() === selected.toLowerCase() ||
  //       parseInt(maxPrice) <= parseInt(selected) ||
  //       postingDate >= selected ||
  //       salaryType.toLowerCase() === selected.toLowerCase() ||
  //       experienceLevel.toLowerCase() === selected.toLowerCase() ||
  //       employmentType.toLowerCase() === selected.toLowerCase()
  //     );
  //     console.log(filteredJobs);
  //   }

  //   // Slice the data based on current page
  //   const { startIndex, endIndex } = calculatePageRange();
  //   filteredJobs = filteredJobs.slice(startIndex, endIndex)

  //   return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  // }

  // const result = filteredData(jobs, selectedCategory, query);

  return (

    // <div>
    //   <Banner query={query} handleInputChange={handleInputChange} />

    //   {/* Main Content */}
    //   <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
    //     {/* Left Side */}
    //     <div className="bg-white p-4 rounded">
    //       <Sidebar handleChange={handleChange} handleClick={handleClick} />
    //     </div>

    //     {/* Jobs Cards */}
    //     <div className="col-span-2 bg-white p-4 rounded-sm">

    //       {
    //         isLoading ? (<p className="font-medium">Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
    //           <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
    //           <p className="">No Data Found!</p>
    //         </>
    //       }

    //       {/* PAGINATION */}

    //       {
    //         result.length > 0 ? (
    //           <div className="flex justify-center mt-4 space-x-8">
    //             <button onClick={prevPage} disabled={currentPage === 1} className="hover:underline font-bold">
    //               Previous
    //             </button>
    //             <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)} </span>
    //             <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className="hover:underline font-bold">
    //               Next
    //             </button>
    //           </div>
    //         ) : ""
    //       }

    //     </div>

    //     {/* Right Side */}
    //     <div className="bg-white p-4 rounded"><Newsletter /></div>
    //   </div>

    // </div>

    <div className="flex w-full h-full mb-4">
      <div
        className="w-1/6 h-[100vh]"
      />

      <div
        className="w-5/6"
        style={{
          background: '#fff',
          boxShadow: 'inset 0 0 5px 0 #989898',
        }}
      >
        <div className="flex w-full">
          <div className="w-3/4 grid grid-cols-4 py-3 pl-2 pr-1 h-fit gap-1">
            {imgs_banner.map(item =>
              <img
                key={item}
                src={`${item}`}
                className="w-full h-22 border-[1px] border-gray-200 rounded-md p-1" />
            )}
            <div className="my-4 flex gap-2 font-semibold">
              <img src={"https://shriram999.com/assets/img/desktop/inplayico.png"} className="w-[24px] h-[24px]" />
              INPLAY
            </div>
          </div>

          <div className="w-1/4 mr-3 pl-4">
            <p
              className="text-base bg-inherit px-[12px] font-bold py-[2px] col-span-2 rounded-t-sm mt-[1px] text-white text-[14px]"
              style={{
                background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
              }}
            >
              Play Games
            </p>
            <div className="h-[390px] overflow-auto mb-4 border-[1px] border-gray-300 rounded-[5px] rounded-t-none border-t-0 p-[1px] pt-14 ">
              {imgs_board_right.map(item => <img key={item} src={`${item}`} className="w-full h-auto mt-[1px]"></img>)}
            </div>

            <p
              className="text-base bg-inherit px-[12px] font-bold py-[2px] col-span-2 rounded-t-[3px] mt-5 text-white text-[14px]"
              style={{
                background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
              }}
            >
              Play Games
            </p>
            <div className="h-80 overflow-auto grid grid-cols-2 gap-[1px] mb-4 border-[1px] border-gray-400 rounded-md rounded-t-none p-[1px] ">
              {imgs_board_right_second.map(item =>
                <div className="w-full h-full border-[1px] border-black relative skew-button-container">
                  <img key={item} src={`${item}`} className="w-auto h-full skew-button-container relative" />
                  <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 hover-skew-button duration-500 skew-button-white-hover">
                    <button
                      className="w-[100px] h-[35px] text-black"
                      style={{
                        background: '#ffb80c',
                        width: '90%',
                        height: '26px'
                      }}
                    >
                      <p className="text-[12px] font-bold">PLAY NOW</p>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[1px] p-3">
          <div className="w-full h-full border-[1px] border-black relative skew-button-container">
            <img src={"https://shriram999.com/assets/img/desktop/exchage/CasinoJokerBet.webp"} className="w-full h-full" />
            <div className="w-full h-full absolute flex justify-center items-center top-0 left-0 hover-skew-button duration-300 bg-black bg-opacity-40 skew-button-hover">
              <button
                className="w-[100px] h-[35px] text-white"
                style={{
                  background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
                  transform: 'skewX(-20deg)'
                }}
              >
                <p style={{ transform: 'skewX(20deg)' }}>PLAY</p>
              </button>
            </div>
          </div>
          <div className="w-full h-full border-[1px] border-black relative skew-button-container">
            <img src={"https://shriram999.com/assets/img/desktop/exchage/wheelBetCasinoNew.webp"} className="w-full h-full" />
            <div className="w-full h-full absolute flex justify-center items-center top-0 left-0 hover-skew-button duration-300 bg-black bg-opacity-40 skew-button-hover">
              <button
                className="w-[100px] h-[35px] text-white"
                style={{
                  background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
                  transform: 'skewX(-20deg)'
                }}
              >
                <p style={{ transform: 'skewX(20deg)' }}>PLAY</p>
              </button>
            </div>
          </div>
          <div className="w-full h-full border-[1px] border-black row-span-2 relative skew-button-container">
            <img src={"https://shriram999.com/assets/img/desktop/exchage/blackJackCasinoGame.webp"} className="w-full h-full row-span-2" />
            <div className="w-full h-full absolute flex justify-center items-center top-0 left-0 hover-skew-button duration-300 bg-black bg-opacity-40 skew-button-hover">
              <button
                className="w-[100px] h-[35px] text-white"
                style={{
                  background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
                  transform: 'skewX(-20deg)'
                }}
              >
                <p style={{ transform: 'skewX(20deg)' }}>PLAY</p>
              </button>
            </div>
          </div>
          <div className="w-full h-full border-[1px] border-black relative skew-button-container">
            <img src={"https://shriram999.com/assets/img/desktop/exchage/casinoPoker.webp"} className="w-full h-full" />
            <div className="w-full h-full absolute flex justify-center items-center top-0 left-0 hover-skew-button duration-300 bg-black bg-opacity-40 skew-button-hover">
              <button
                className="w-[100px] h-[35px] text-white"
                style={{
                  background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
                  transform: 'skewX(-20deg)'
                }}
              >
                <p style={{ transform: 'skewX(20deg)' }}>PLAY</p>
              </button>
            </div>
          </div>
          <div className="w-full h-full border-[1px] border-black relative skew-button-container">
            <img src={"https://shriram999.com/assets/img/desktop/exchage/casinoBetNumber.webp"} className="w-full h-full" />
            <div className="w-full h-full absolute flex justify-center items-center top-0 left-0 hover-skew-button duration-300 bg-black bg-opacity-40 skew-button-hover">
              <button
                className="w-[100px] h-[35px] text-white"
                style={{
                  background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
                  transform: 'skewX(-20deg)'
                }}
              >
                <p style={{ transform: 'skewX(20deg)' }}>PLAY</p>
              </button>
            </div>
          </div>
          <div className="w-full h-full border-[1px] border-black relative skew-button-container">
            <img src={"https://shriram999.com/assets/img/desktop/exchage/casinoFruitRace1.webp"} className="w-full h-full" />
            <div className="w-full h-full absolute flex justify-center items-center top-0 left-0 hover-skew-button duration-300 bg-black bg-opacity-40 skew-button-hover">
              <button
                className="w-[100px] h-[35px] text-white"
                style={{
                  background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
                  transform: 'skewX(-20deg)'
                }}
              >
                <p style={{ transform: 'skewX(20deg)' }}>PLAY</p>
              </button>
            </div>
          </div>
          <div className="w-full h-full border-[1px] border-black relative skew-button-container">
            <img src={"https://shriram999.com/assets/img/desktop/exchage/casinoliveDice.webp"} className="w-full h-full" />
            <div className="w-full h-full absolute flex justify-center items-center top-0 left-0 hover-skew-button duration-300 bg-black bg-opacity-40 skew-button-hover">
              <button
                className="w-[100px] h-[35px] text-white"
                style={{
                  background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
                  transform: 'skewX(-20deg)'
                }}
              >
                <p style={{ transform: 'skewX(20deg)' }}>PLAY</p>
              </button>
            </div>
          </div>
          <div className="w-full h-full border-[1px] border-black relative skew-button-container">
            <img src={"https://shriram999.com/assets/img/desktop/exchage/32casinoCards.webp"} className="w-full h-full" />
            <div className="w-full h-full absolute flex justify-center items-center top-0 left-0 hover-skew-button duration-300 bg-black bg-opacity-40 skew-button-hover">
              <button
                className="w-[100px] h-[35px] text-white"
                style={{
                  background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
                  transform: 'skewX(-20deg)'
                }}
              >
                <p style={{ transform: 'skewX(20deg)' }}>PLAY</p>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home

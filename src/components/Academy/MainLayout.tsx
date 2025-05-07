
// import React from 'react';

// interface MainLayoutProps {
//   children: React.ReactNode;
// }

// const MainLayout = ({ children }: MainLayoutProps) => {
//   return (
//     <div className="flex min-h-screen w-full">
//       {/* Left sticky sidebar (5%) */}
//       {/* <div className="w-[10%] fixed left-0 top-0 h-screen bg-gray-100">
//         <div className="p-4">
//           <p className="writing-vertical-lr transform rotate-180 text-gray-600">Left Sidebar</p>
//         </div>
//       </div> */}
//       <div className="w-[10%] fixed left-0 top-0 h-screen bg-gray-100">
//   <div className="p-4 flex flex-col items-center justify-center h-full">
//     {/* Add PNG image */}
//     <img src="/images/academy/Artboard 1-8.png" alt="Sidebar Icon" className="mb-4 w-full max-h-screen " />
    
//     {/* Optional text below image */}
//     {/* <p className="writing-vertical-lr transform rotate-180 text-gray-600">Left Sidebar</p> */}
//   </div>
// </div>


//       {/* Main content area (90%) */}
//       <div className="w-[80%] mx-auto">
//         <div className="min-h-screen">
//           {children}
//         </div>
//       </div>

//       {/* Right sticky sidebar (5%) */}
//       {/* <div className="w-[10%] fixed right-0 top-0 h-screen bg-gray-100">
//         <div className="p-4">
//         <img src="/images/academy/right.png" alt="Sidebar Icon" className="mb-4 w-full max-h-screen " />
    
//           <p className="writing-vertical-lr text-gray-600">Right Sidebar</p>
//         </div>
//       </div> */}
//       <div className="w-[10%] fixed right-0 top-0 h-screen bg-gray-100">
//   <div className="p-4 flex flex-col items-center justify-center h-full">
//     <img src="/images/academy/Artboard 2-8.png" alt="Right Sidebar Icon" className="mb-4 w-full max-h-screen" />
//     {/* <p className="writing-vertical-lr text-gray-600">Right Sidebar</p> */}
//   </div>
// </div>

//     </div>
//   );
// };

  // export default MainLayout;
  import React from 'react';

  interface MainLayoutProps {
    children: React.ReactNode;
  }

  const MainLayout = ({ children }: MainLayoutProps) => {
    return (
      <div className="w-full min-h-screen flex flex-col">
  

        {/* Content Area: Sidebars + Main */}
        <div className="flex flex-1 w-full">
          {/* Left Sticky Sidebar */}
          <div className="w-[10%] sticky top-20 h-[calc(100vh-5rem)]  self-start">
            <div className=" flex flex-col items-center justify-center h-full">
              <img 
                src="/images/academy/Artboard 1-8.png" 
                alt="Left Sidebar Icon" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Main Content */}
      
          <div className="w-[80%] px-0 md:px-6 pl-0 pr-0 md:pr-3 py-0 md:py-3 flex flex-col ">
            <main className="flex-1">
              {children}
            </main>

          </div>


          {/* Right Sticky Sidebar */}
          <div className="w-[10%] sticky top-20 h-[calc(100vh-5rem)]  self-start">
            <div className=" flex flex-col items-center justify-center h-full">
              <img 
                src="/images/academy/Artboard 2-8.png" 
                alt="Right Sidebar Icon" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default MainLayout;

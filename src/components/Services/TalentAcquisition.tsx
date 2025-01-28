'use client'

import { useState, useEffect } from 'react'
import { Intern, Company } from "../../types/interns";
// import { customData } from '../data/customData'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { preloadImage } from '../../utils/imageLoader'
import { Building2, GraduationCap, Briefcase, MapPin, Star } from 'lucide-react'

export default function TalentAcquisition() {
  const [data, setData] = useState<{ interns: Intern[], companies: Company[] } | null>(null)
  const [currentInternPage, setCurrentInternPage] = useState(1)
  const [currentCompanyPage, setCurrentCompanyPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    const loadData = async () => {
      try {                          
        const internResponse = await fetch(`${import.meta.env.VITE_API_URL}getInterns`);

        console.log("Intern data:", internResponse);
        const companyResponse = await fetch(`${import.meta.env.VITE_API_URL}getCompanies`);
   
        if (!internResponse.ok) {
          throw new Error("Failed to fetch intern data");
        }
        if (!companyResponse.ok) {
          throw new Error("Failed to fetch company data");
        }

        const internData = await internResponse.json();
        const companyData = await companyResponse.json();
  
        console.log("Intern data:", internData);
        console.log("Company data:", companyData);
  
        if (internData && companyData) {
          setData({
            interns: internData,
            companies: companyData,
          });
        } else {
          console.error("Invalid data format", internData, companyData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    loadData();
  }, []);

  // useEffect(() => {
  //   const loadData = async () => {
  //     const loadedData = customData;

  //     await Promise.all(
  //       loadedData.companies.map(async (company) => {
  //         try {
  //           // await preloadImage(company.logo);
  //         } catch (error) {
  //           console.error(`Failed to load image for ${company.clientName}`);
  //         }
  //       })
  //     );

  //     setData(loadedData);
  //   };

  //   loadData();
  // }, []);

  if (!data) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )

  const handlePageChange = (type: "intern" | "company", newPage: number) => {
    if (type === "intern") setCurrentInternPage(newPage);
    else setCurrentCompanyPage(newPage);
  };

  const paginatedInterns = data.interns.slice(
    (currentInternPage - 1) * itemsPerPage,
    currentInternPage * itemsPerPage
  );

  const paginatedCompanies = data.companies.slice(
    (currentCompanyPage - 1) * itemsPerPage,
    currentCompanyPage * itemsPerPage
  );

  const renderPagination = (totalItems: number, currentPage: number, type: "intern" | "company") => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(type, pageNumber)}
              className={`px-4 py-2 rounded ${currentPage === pageNumber
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-2 sm:p-8 rounded-xl">
      <Tabs defaultValue="interns" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-16 bg-white rounded-full p-1 ">
          <TabsTrigger value="interns" className="text-[15px] sm:text-md py-3 rounded-full transition-all duration-300 data-[state=active]:bg-blue-400 data-[state=active]:text-white">
            Interns
          </TabsTrigger>
          <TabsTrigger value="companies" className="text-[15px] sm:text-md py-3 rounded-full transition-all duration-300 data-[state=active]:bg-red-400 data-[state=active]:text-white">
            Companies
          </TabsTrigger>
        </TabsList>
        <TabsContent value="interns">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedInterns.map((intern) => (
              <Card key={intern.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
                <CardHeader className="bg-blue-400 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-y-12 -translate-x-12"></div>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20 border-4 border-white shadow-lg hidden sm:visible">
                      <AvatarFallback className="text-2xl font-bold bg-blue-700">{intern.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl font-bold">{intern.fullName}</CardTitle>
                      <p className="text-sm opacity-80">{intern.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm px-3 py-1">{intern.skill}</Badge>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <GraduationCap className="text-blue-500" size={20} />
                      <p className="text-sm"><strong>University:</strong> {intern.university}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Building2 className="text-blue-500" size={20} />
                      <p className="text-sm"><strong>College:</strong> {intern.districtCollegeName}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {renderPagination(data.interns.length, currentInternPage, "intern")}
        </TabsContent>
        <TabsContent value="companies">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCompanies.map((company) => (
              <Card key={company.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
                <CardHeader className="bg-red-400 text-white pb-16 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 -translate-x-16"></div>
                  <div className="flex items-center sm:space-x-4 ">
                    {/* <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white p-2 shadow-lg hidden sm:visible">
                      <img
                        src={company.logo || "/placeholder.svg?height=80&width=80"}
                        alt={`${company.clientName} logo`}
                        className="w-full h-full object-contain "
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/placeholder.svg?height=80&width=80";
                        }}
                      />
                    </div> */}
                    <CardTitle className="text-[18px]  sm:text-xl font-bold">{company.clientName}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-8 relative mb-4">
                  <div className="absolute -top-12 left-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                                  
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Briefcase className="text-green-500" size={20} />
                        <p className="text-sm"><strong>Industry:</strong> {company.industry}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="text-green-500" size={20} />
                        <p className="text-sm"><strong>Location:</strong> {company.location}</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800">Available Jobs:</h3>
                    <ul className="mt-4 space-y-3">
                      {company.jobs.map((job, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Star className="text-green-500 mt-1" size={20} />
                          <div>
                            <p className="font-medium text-gray-700">{job.title}</p>
                            <p className="text-sm text-gray-500">{job.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
          {renderPagination(data.companies.length, currentCompanyPage, "company")}
        </TabsContent>
      </Tabs>
    </div>
  )
}


import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import PhotoLoader from "@/components/PhotoLoader";
import AnalyticsPage from "./analytics";

const PAGE_SIZE = 30;

const CandidatesDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [visibleCandidates, setVisibleCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const loaderRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setVisibleCandidates(filteredCandidates.slice(0, PAGE_SIZE));
  }, [searchQuery, candidates]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCandidates.length < candidates.length
        ) {
          loadMore();
        }
      },
      { threshold: 1.0 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCandidates, candidates]);

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}api/Candidates`,
      );
      setCandidates(response.data.data || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please check the backend.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (visibleCandidates.length < filteredCandidates.length) {
      const nextBatch = filteredCandidates.slice(
        visibleCandidates.length,
        visibleCandidates.length + PAGE_SIZE,
      );
      setVisibleCandidates((prev) => [...prev, ...nextBatch]);
    }
  };

  const filteredCandidates = candidates.filter((candidate) => {
    const query = searchQuery.toLowerCase();
    return (
      candidate.Candidate_ID?.toLowerCase().includes(query) ||
      candidate.Full_Name?.toLowerCase().includes(query) ||
      candidate.City?.toLowerCase().includes(query) ||
      candidate.Position_Hiring_for?.toLowerCase().includes(query)
    );
  });

  // Apply pagination after filtering
  const paginatedCandidates = filteredCandidates.slice(
    0,
    visibleCandidates.length,
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="text-center py-9">
        <i className="fas fa-camera text-red-500 text-2xl"></i>
        <h1 className="text-4xl font-bold mt-2">
          {activeTab === "dashboard" ? (
            <>
              Empowering{" "}
              <span className="italic text-red-500"> Placements</span>
              <span className="block">Tracking Talent</span>
            </>
          ) : (
            <>
              Insights That{" "}
              <span className="italic text-red-500">Drive Success</span>
            </>
          )}
        </h1>
      </div>

      {/* Navigation Menu */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 text-lg font-semibold rounded-md transition-all ${
            activeTab === "dashboard" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`px-4 py-2 text-lg font-semibold rounded-md transition-all ${
            activeTab === "analytics" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
      </div>

      {/* Search Bar */}
      {activeTab === "dashboard" && (
        <div className="flex justify-center mb-6">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search by Name, ID, City, or Position..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>
      )}

      {loading && (
        <div className="flex justify-center">
          <PhotoLoader />
        </div>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          {activeTab === "dashboard" ? (
            <div className="mb-6">
              {/* Candidates Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Candidate ID</th>
                      <th className="border p-2">Name</th>
                      <th className="border p-2">Email</th>
                      <th className="border p-2">Position</th>
                      <th className="border p-2">Applied On</th>
                      <th className="border p-2">Status</th>
                      <th className="border p-2">Experience</th>
                      <th className="border p-2">Highest Qualification</th>
                      <th className="border p-2">Skills</th>
                      <th className="border p-2">City</th>
                      <th className="border p-2">State</th>
                      <th className="border p-2">Source</th>
                      <th className="border p-2">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedCandidates.length > 0 ? (
                      paginatedCandidates.map((candidate) => (
                        <tr key={candidate.id} className="border">
                          <td className="border p-2">
                            {candidate.Candidate_ID || "N/A"}
                          </td>
                          <td className="border p-2">{candidate.Full_Name}</td>
                          <td className="border p-2">
                            {candidate.Email || "N/A"}
                          </td>
                          <td className="border p-2">
                            {candidate.Position_Hiring_for || "N/A"}
                          </td>
                          <td className="border p-2">
                            {candidate.Created_Time || "N/A"}
                          </td>
                          <td className="border p-2">
                            {candidate.Candidate_Status || "Unknown"}
                          </td>
                          <td className="border p-2">
                            {candidate.Experience_in_Years || "Unknown"}
                          </td>
                          <td className="border p-2">
                            {candidate.Highest_Qualification_Held || "Unknown"}
                          </td>
                          <td className="border p-2">
                            {candidate.Skill_Set || "Unknown"}
                          </td>
                          <td className="border p-2">
                            {candidate.City || "Unknown"}
                          </td>
                          <td className="border p-2">
                            {candidate.State || "Unknown"}
                          </td>
                          <td className="border p-2">
                            {candidate.Source || "Unknown"}
                          </td>
                          <td className="border p-2">
                            {candidate.Country || "Unknown"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="13" className="text-center p-2">
                          No candidates found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* Lazy Loader Trigger */}
              <div ref={loaderRef} className="py-4 flex justify-center">
                {visibleCandidates.length < candidates.length && (
                  <PhotoLoader />
                )}
              </div>
            </div>
          ) : (
            <div className="text-center p-4">
              <AnalyticsPage candidates={candidates} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CandidatesDashboard;

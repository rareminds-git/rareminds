import { useState, useEffect } from "react";
import axios from "axios";
import PhotoLoader from "@/components/PhotoLoader";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

const COLORS = [
  "#ff6666",
  "#ff3333",
  "#cc0000",
  "#6699ff",
  "#3366ff",
  "#0033cc",
];

const AnalyticsPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [analytics, setAnalytics] = useState({
    totalCandidates: 0,
    candidatesThisMonth: 0,
    statusData: [],
    cityData: [],
    positionData: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setAnalytics(getAnalyticsData(candidates));
  }, [candidates]);

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

  const getAnalyticsData = (candidates) => {
    const totalCandidates = candidates.length;

    const currentMonth = dayjs().month();
    const currentYear = dayjs().year();
    const previousMonth = dayjs().subtract(1, "month").month();
    const previousYear = dayjs().subtract(1, "month").year();

    const candidatesPreviousMonth = candidates.filter((candidate) => {
      const appliedDate = candidate.Created_Time
        ? dayjs(candidate.Created_Time)
        : null;
      return (
        appliedDate &&
        appliedDate.year() === previousYear &&
        appliedDate.month() === previousMonth
      );
    }).length;

    const candidatesThisMonth = candidates.filter((candidate) => {
      const appliedDate = candidate.Created_Time
        ? dayjs(candidate.Created_Time)
        : null;
      return (
        appliedDate &&
        appliedDate.year() === currentYear &&
        appliedDate.month() === currentMonth
      );
    }).length;

    const applicationTrends = [
      { month: "Previous Month", count: candidatesPreviousMonth },
      { month: "Current Month", count: candidatesThisMonth },
    ];
    const statusCounts = candidates.reduce((acc, candidate) => {
      const status = candidate.Candidate_Status || "Unknown";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});

    const cityCounts = candidates.reduce((acc, candidate) => {
      const city = candidate.City || "Unknown";
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {});

    const positionCounts = candidates.reduce((acc, candidate) => {
      const position = candidate.Position_Hiring_for || "Unknown";
      acc[position] = (acc[position] || 0) + 1;
      return acc;
    }, {});

    const statusData = Object.keys(statusCounts).map((key) => ({
      name: key,
      count: statusCounts[key],
    }));

    const cityData = Object.keys(cityCounts).map((key) => ({
      name: key,
      count: cityCounts[key],
    }));

    const positionData = Object.keys(positionCounts).map((key) => ({
      name: key,
      count: positionCounts[key],
    }));

    return {
      totalCandidates,
      candidatesThisMonth,
      statusData,
      cityData,
      positionData,
      applicationTrends,
    };
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {loading && (
        <div className="flex justify-center">
          <PhotoLoader />
        </div>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Total Candidates */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">Total Candidates</h3>
            <motion.p
              className="text-6xl font-bold text-red-500 flex items-center justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 130 }}
              transition={{ duration: 1 }}
            >
              {analytics.totalCandidates}
            </motion.p>
          </div>

          {/* Candidates Applied This Month */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">
              Candidates This Month
            </h3>
            <motion.p
              className="text-6xl font-bold text-blue-500 flex items-center justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 130 }}
              transition={{ duration: 1 }}
            >
              {analytics.candidatesThisMonth}
            </motion.p>
          </div>

          {/* Candidates by Status (Pie Chart) */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4">Candidates by Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={analytics.statusData}
                  dataKey="count"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {analytics.statusData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Candidates by City (Bar Chart) */}
          <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4">Candidates by City</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={analytics.cityData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#4F3D7A" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Candidates by Position (Bar Chart) */}
          <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4">
              Candidates by Position
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={analytics.positionData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#3CC677" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4">
              Application Trends (Previous vs. Current Month)
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={analytics.applicationTrends}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsPage;

import React from "react";
import { GraduationCap, Rocket, Lightbulb, Target, Trophy } from "lucide-react";
import { Card } from "../ui-card/card";

const InstitutionWhyRareminds = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Rareminds? Your Gateway to Success!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your journey to success starts here! At Rareminds, we don't just
            train students—we shape future-ready professionals who stand out in
            every field.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="p-8 shadow-lg bg-white/80 backdrop-blur animate-fade-in">
          <div className="space-y-8">
            {/* Beyond Degrees Section */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <Lightbulb className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Beyond Degrees, Towards Excellence
                </h3>
                <p className="text-gray-600">
                  Knowledge is power, but skills drive success. Companies today
                  seek candidates who can think critically, communicate
                  effectively, and lead confidently.
                </p>
              </div>
            </div>

            {/* Your Future Section */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 rounded-lg">
                  <Rocket className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your Future, Our Mission
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4 mt-4">
                    <li className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-600" />
                      <span>Training that gets you hired</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-red-600" />
                      <span>Expert-led guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-600" />
                      <span>Soft skills that set you apart</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-red-600" />
                      <span>Internships & job placements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-4 animate-fade-up">
          <h3 className="text-2xl font-bold text-gray-900">
            When It Comes to Careers, There's Only One Name—RAREMINDS!
          </h3>
          <p className="text-gray-600">
            From the classroom to the boardroom, we ensure you are the candidate
            every employer wants.
          </p>
          <button
            onClick={() => navigate("/institutions/query")}
            className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Start your journey with Rareminds today!
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstitutionWhyRareminds;

// export default InstitutionWhyRareminds;

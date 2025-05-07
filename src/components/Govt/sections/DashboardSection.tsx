
import React from "react";
import { Section } from "@/components/ui/section";
import { IconBadge } from "@/components/ui/icon-badge";
import { icons } from "@/components/Govt/icons";

export const DashboardSection = () => {
  return (
    <Section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Your dashboard. Your reports. Your outcomes.{" "}
          <span className="text-blue-600">Delivered weekly.</span>
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          Complete transparency with real-time tracking and comprehensive reporting
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <div className="mb-6 flex items-center gap-3">
            <IconBadge icon={<icons.BarChartHorizontal className="h-6 w-6" />} />
            <h3 className="text-2xl font-bold">Real-time Dashboard</h3>
          </div>
          <div className="mb-6 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Dashboard analytics" 
              className="h-auto w-full object-cover" 
            />
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-700">
              <icons.CheckCircle className="h-5 w-5 text-green-500" />
              Track progress in real-time
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <icons.Calendar className="h-5 w-5 text-amber-500" />
              Daily and weekly status updates
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <icons.Document className="h-5 w-5 text-blue-500" />
              Exportable data for your records
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <div className="mb-6 flex items-center gap-3">
              <IconBadge icon={<icons.LineChart className="h-6 w-6" />} color="blue" />
              <h3 className="text-2xl font-bold">Data-Driven Performance</h3>
            </div>
            <div className="mb-4 flex justify-center gap-8">
              <div className="flex items-center justify-center">
                <div className="h-24 w-24 rounded-full border-8 border-blue-500 border-r-transparent"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full rounded-full bg-gray-200">
                  <div className="h-4 w-3/4 rounded-full bg-blue-500"></div>
                </div>
                <div className="h-4 w-full rounded-full bg-gray-200">
                  <div className="h-4 w-2/3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-4 w-full rounded-full bg-gray-200">
                  <div className="h-4 w-5/6 rounded-full bg-orange-500"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              Comprehensive metrics on attendance, scores, and outcomes
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <div className="mb-6 flex items-center gap-3">
              <IconBadge icon={<icons.FileText className="h-6 w-6" />} color="green" />
              <h3 className="text-2xl font-bold">Compliance-Ready Documentation</h3>
            </div>
            <p className="mb-4 text-gray-700">
              All documentation prepared according to government standards
            </p>
            <div className="space-y-3">
              <div className="h-4 w-full rounded-full bg-gray-200">
                <div className="h-4 w-4/5 rounded-full bg-blue-500"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-gray-200">
                <div className="h-4 w-3/4 rounded-full bg-green-500"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-gray-200">
                <div className="h-4 w-4/5 rounded-full bg-orange-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

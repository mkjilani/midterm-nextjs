import React from 'react';
import { useEffect } from "react";

const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-blue-900">Projects</h1>
            <div className="flex justify-between">
               <div className="w-1/3 p-4 bg-blue-100">
                <h2 className="text-lg font-semibold mb-4 text-black">Windows 2008</h2>
                <p className="text-left">Led a successful Windows OS upgrade project for 8,000+ number of systems ensuring minimal downtime, Collaborated with cross-functional teams to plan, implement, and validate the Windows OS upgrade process, Conducted comprehensive risk assessments and developed mitigation strategies, resulting in a smooth transition, Provided technical support and training to end-users during and after the upgrade, addressing issues promptly, Maintained documentation of the upgrade process, configurations, and troubleshooting procedures.</p>
                </div>
                <div className="w-1/3 p-4 bg-blue-200">
                <h2 className="text-lg font-semibold mb-4 text-black">Database Upgrades</h2>
                <p className="text-left">Led global initiative to upgrade 10,000 Oracle and SQL databases. Managed team of database administrators to migration databases for trading applications</p>
                </div>
                <div className="w-1/3 p-4 bg-blue-300">
                <h2 className="text-lg font-semibold mb-4 text-black">Data Visualizations</h2>
                <p className="text-left">Created data visual presentations for senior management to view/analyze project progress with key metrics. Metrics used to assess overall state of projects </p>
                </div>
            </div>
        </div>
    );
  };

export default Projects;
"use client";

import About from "./about";
import Connections from "./connections";
import Portfolio from "./portfolio";
import ProfileProgress from "./profile-progress";
import Projects from "./projects";
import RecentActivity from "./recent-activity";
import Skills from "./skills";
import Teams from "./teams";
import UserHeader from "./user-header";
import UserInfo from "./user-info";

export default function UserProfile() {
  return (
    <>
      <UserHeader />
      <div className="pt-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <ProfileProgress />
          <UserInfo />
          <Portfolio />
          <Skills />
          <Connections />
          <Teams />
        </div>
        <div className="col-span-12 lg:col-span-8 space-y-6 ">
          <About />
          <RecentActivity />
          <Projects />
        </div>
      </div>
    </>
  );
}

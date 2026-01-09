"use client";

import DashboardTabs from "@/components/DashboardTabs";

export default function HomePage() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-[420px] flex justify-center">
        <DashboardTabs />
      </div>
    </section>
  );
}
"use client";
import { useAppStore } from "@/components/providers/app-provider";

export default function ManagePage() {
  const user = useAppStore((state) => state.user);
  return <div>Manage</div>;
}

"use client";

import authApiRequest from "@/apiRequests/auth";
import { useAppStore } from "@/components/providers/app-provider";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.login,
  });
};
export const useGetMeMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.getMe,
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.logout,
  });
};

export const useSetTokenToCookieMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.setTokenToCookie,
  });
};

export const useGetProfileMutation = () => {
  const { isAuth } = useAppStore();
  return useQuery({
    queryKey: ["me"],
    queryFn: authApiRequest.getProfile,
    enabled: isAuth,
  });
};

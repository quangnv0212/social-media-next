import authApiRequest from "@/apiRequests/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("access_token")?.value;
  const refreshToken = cookiesStore.get("refresh_token")?.value;
  cookiesStore.delete("access_token");
  cookiesStore.delete("refresh_token");

  if (!accessToken || !refreshToken) {
    return NextResponse.json(
      { message: "Can't find access token or refresh token" },
      { status: 200 }
    );
  }
  try {
    const result = await authApiRequest.sLogout({
      accessToken,
      refreshToken,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "Logged out" });
}

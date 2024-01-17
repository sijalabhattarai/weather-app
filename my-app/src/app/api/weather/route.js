import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");
  let url = "";
  if (address) {
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      address +
      "&appid=" +
      "af245905885a7476bac97bc18658910e";
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=26.6895&lon=87.6642&appid=af245905885a7476bac97bc18658910e
    `;
  }
  console.log(url);
  const res = await fetch(url);

  const data = await res.json();
  return NextResponse.json({ data });
}
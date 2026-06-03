import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL(request.url);
  const { searchParams } = url;
  console.log(searchParams);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`,
  );
  const data = await response.json();
  return NextResponse.json({ data }, { status: 200 });
}

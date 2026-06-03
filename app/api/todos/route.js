import { NextResponse } from 'next/server';
export async function POST(req, res) {
  //* parse the request body to get the data sent by the client

  const body = await req.json();

  const { title, description, status } = body;
  //   todo database logic here to save the todo item

  return NextResponse.json(
    {
      message: 'Todo created successfully',
      todo: { title, description, status },
    },
    { status: 201 },
  );
}

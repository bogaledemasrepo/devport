import { NextResponse } from 'next/server';
import projects from '@/data';

export async function GET() {
  try {

   await new Promise((res,_)=>{
    console.log(_)
    setTimeout(()=>res(true),1000)
   })
     
  return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}



export async function POST() {

  try {
   const response = await new Promise((res,_)=>{
    console.log(_)
    setTimeout(()=>res(true),1000)
   })
   console.log(response)
    return NextResponse.json({ message: 'Response sent to client' }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: `Failed to send email: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
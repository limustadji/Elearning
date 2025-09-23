import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const courses = await prisma.course.findMany({
      include: {
        instructor: {
          select: {
            name: true,
            profile_picture_url: true,
          },
        },
        chapters: {
          orderBy: { order_number: "asc" },
        },
      },
    });
    return NextResponse.json({ courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

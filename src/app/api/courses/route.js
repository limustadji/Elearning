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
            instructor_data: {
              select: {
                title: true,
                company: true,
              },
            },
          },
        },
        course_categories: {
          include: {
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json({ courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

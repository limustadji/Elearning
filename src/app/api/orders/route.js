import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const body = await request.json();
    const { courseId, totalAmount, paymentMethodId } = body;
    const userId = parseInt(session.user.id);

    if (!courseId || !totalAmount || !paymentMethodId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const newOrder = await prisma.order.create({
      data: {
        user_id: userId,
        course_id: parseInt(courseId),
        status: "pending",
        total_amount: totalAmount,
        invoice: {
          create: {
            invoice_number: `INV-${Date.now()}-${userId}`,
            payment_method_id: parseInt(paymentMethodId),
            amount: totalAmount,
          },
        },
      },
      include: {
        invoice: true,
      },
    });

    return NextResponse.json(newOrder);
  } catch (error) {
    console.error("ORDER_CREATION_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

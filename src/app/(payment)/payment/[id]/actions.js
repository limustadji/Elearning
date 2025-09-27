"use server";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function createOrderAndRedirect(formData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }

  const courseId = parseInt(formData.get("courseId"), 10);
  const totalAmount = parseFloat(formData.get("totalAmount"));
  const paymentMethodId = parseInt(formData.get("paymentMethodId"), 10);
  const userId = parseInt(session.user.id, 10);

  if (!courseId || !totalAmount || !paymentMethodId || !userId) {
    throw new Error(
      "Data yang dibutuhkan tidak lengkap atau sesi tidak valid."
    );
  }

  try {
    await prisma.order.create({
      data: {
        user_id: userId,
        course_id: courseId,
        status: "pending",
        total_amount: totalAmount,
        invoice: {
          create: {
            invoice_number: `INV-${Date.now()}-${userId}`,
            payment_method_id: paymentMethodId,
            amount: totalAmount,
          },
        },
      },
    });
  } catch (error) {
    console.error("ORDER_CREATION_ERROR", error);
    throw new Error("Terjadi kesalahan internal saat membuat pesanan.");
  }

  redirect(`/bayar/${courseId}`);
}

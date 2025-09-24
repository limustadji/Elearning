import React from "react";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DetailProdukHero from "@/components/detailproduk/DetailProdukHero";
import TutorProfile from "@/components/detailproduk/TutorProfile";
import KurikulumAccordion from "@/components/detailproduk/KurikulumAccordion";
import OrderSummaryCard from "@/components/card/OrderSummaryCard";
import CourseCard from "@/components/card/CourseCard";
import ReviewCard from "@/components/card/ReviewCard";

async function getCourseData(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/courses/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

async function getRelatedCourses(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/courses/related/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.courses || [];
}

export default async function DetailProdukPage({ params }) {
  const course = await getCourseData(params.id);
  const relatedCourses = await getRelatedCourses(params.id);

  if (!course) {
    notFound();
  }

  const instructor = course.instructor;

  const courseIncludes = [
    { icon: "/assets/icons/icon-file-check.svg", text: "Ujian Akhir" },
    {
      icon: "/assets/icons/icon-video.svg",
      text: `${course.chapters.reduce(
        (acc, chapter) => acc + chapter.lessons.length,
        0
      )} Video`,
    },
    { icon: "/assets/icons/icon-book.svg", text: "7 Dokumen" },
    { icon: "/assets/icons/icon-file-certificate.svg", text: "Sertifikat" },
    { icon: "/assets/icons/icon-file-edit.svg", text: "Pretest" },
  ];

  const curriculumData = course.chapters.map((chapter) => ({
    title: chapter.title,
    lessons: chapter.lessons.map((lesson) => ({
      title: lesson.title,
      duration: `${lesson.duration || 0} Menit`,
    })),
  }));

  const breadcrumb = [
    { name: "Beranda", href: "/" },
    {
      name: course.course_categories[0]?.category.name || "Kategori",
      href: "#",
    },
    { name: course.title, href: "#" },
  ];

  const cardStyle = "p-8 bg-white border border-gray-200 rounded-xl shadow-sm";

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <Breadcrumb items={breadcrumb} />
        </div>

        <DetailProdukHero
          title={course.title}
          subtitle={course.description}
          rating={course.averageRating.toFixed(1)}
          reviewCount={course.totalReviews}
          imageUrl={course.thumbnail_url || "/assets/images/heroimage.jpg"}
        />

        <div className="lg:hidden my-8">
          <OrderSummaryCard
            title={course.title}
            price={Number(course.price)}
            discountedPrice={Number(course.price) / 2}
            discountPercentage={50}
            specialOfferText="Penawaran spesial tersisa 2 hari lagi!"
            includes={courseIncludes}
            language="Bahasa Indonesia"
          />
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 py-8 lg:py-16">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className={cardStyle}>
              <h2 className="text-2xl font-bold text-foreground">Deskripsi</h2>
              <p className="text-base text-gray-600 leading-relaxed mt-4">
                {course.description}
              </p>
            </div>

            {instructor && (
              <div className={cardStyle}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Belajar bersama Tutor Profesional
                </h2>
                <TutorProfile
                  name={instructor.name}
                  title={instructor.instructor_data?.title || "Instruktur"}
                  company={instructor.instructor_data?.company || "Perusahaan"}
                  bio={instructor.instructor_data?.bio}
                  avatarUrl={
                    instructor.profile_picture_url ||
                    "/assets/images/avatar.jpg"
                  }
                />
              </div>
            )}

            <div className={cardStyle}>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Kamu akan Mempelajari
              </h2>
              <KurikulumAccordion curriculumData={curriculumData} />
            </div>

            <div className={cardStyle}>
              <h2 className="text-2xl font-bold text-foreground">
                Rating dan Review
              </h2>
              <div className="mt-6 space-y-8">
                {course.reviews && course.reviews.length > 0 ? (
                  course.reviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      name={review.user.name}
                      role="Alumni Course"
                      avatarUrl={
                        review.user.profile_picture_url ||
                        "/assets/images/avatar.jpg"
                      }
                      rating={review.rating}
                      comment={review.comment}
                    />
                  ))
                ) : (
                  <p className="text-gray-500">
                    Belum ada review untuk kelas ini.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <OrderSummaryCard
                title={course.title}
                price={Number(course.price)}
                discountedPrice={Number(course.price) / 2}
                discountPercentage={50}
                specialOfferText="Penawaran spesial tersisa 2 hari lagi!"
                includes={courseIncludes}
                language="Bahasa Indonesia"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Video Pembelajaran Terkait Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedCourses.map((relatedCourse) => (
              <CourseCard
                key={relatedCourse.id}
                title={relatedCourse.title}
                description={relatedCourse.description}
                authorName={relatedCourse.instructor.name}
                authorImage={
                  relatedCourse.instructor.profile_picture_url ||
                  "/assets/images/avatar.jpg"
                }
                authorRole={
                  relatedCourse.instructor.instructor_data?.title ||
                  "Instructor"
                }
                authorCompany={
                  relatedCourse.instructor.instructor_data?.company || ""
                }
                rating={
                  relatedCourse.averageRating
                    ? relatedCourse.averageRating.toFixed(1)
                    : "0.0"
                }
                reviewCount={relatedCourse.totalReviews || 0}
                price={Number(relatedCourse.price)}
                imageUrl={relatedCourse.thumbnail_url}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

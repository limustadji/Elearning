import CourseCard from "@/components/card/CourseCard";
import Navbar from "@/components/navigation/Navbar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-gray-50 p-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold text-center">Desktop Cards</h2>
        <div className="flex flex-wrap items-start justify-center gap-8">
          <CourseCard
            variant="default"
            title="Big 4 Auditor Financial Analyst"
            description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
            authorName="Jenna Ortega"
            authorRole="Senior Accountant"
            authorCompany="Gojek"
            authorImage="/assets/images/avatar.jpg"
            rating={3.5}
            reviewCount={86}
            price={300000}
            imageUrl="/assets/images/cover7.jpg"
          />

          <CourseCard
            variant="discount"
            title="UI/UX Design for Beginners"
            description="Belajar dasar-dasar desain antarmuka dan pengalaman pengguna dari awal."
            authorName="John Doe"
            authorRole="Product Designer"
            authorCompany="TechCorp"
            authorImage="/assets/images/avatar2.jpg"
            rating={4.5}
            reviewCount={120}
            price={500000}
            discountedPrice={250000}
            imageUrl="/assets/images/cover1.jpg"
          />
        </div>
      </div>

      <hr />

      <div>
        <h2 className="mb-4 text-2xl font-bold text-center">
          Mobile Card (Fixed 320px)
        </h2>
        <div className="flex justify-center">
          <CourseCard
            variant="mobile"
            title="Digital Marketing Masterclass"
            authorName="Jane Smith"
            authorRole="Marketing Specialist"
            authorImage="/assets/images/avatar4.jpg"
            rating={4.8}
            reviewCount={95}
            price={450000}
            imageUrl="/assets/images/cover4.jpg"
          />
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/components/navigation/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 p-8 ">
      <div>
        <h2 className="text-xl font-bold mb-4">1. Navbar: Main (Logged In)</h2>
        <Navbar isLoggedIn={true} navType="main" />
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-bold mb-4">2. Navbar: Main (Logged Out)</h2>
        <Navbar isLoggedIn={false} navType="main" />
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-bold mb-4">3. Navbar: Payment Flow</h2>
        <Navbar isLoggedIn={true} navType="payment" currentStep={1} />
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-bold mb-4">
          4. Navbar: Authentication (Logo Saja)
        </h2>
        <Navbar navType="auth" />
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-bold mb-4">
          5. Navbar: Course (Completed)
        </h2>
        <Navbar
          isLoggedIn={true}
          navType="course"
          courseState="completed"
          courseTitle="Foundations of User Experience Design"
        />
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-bold mb-4">
          6. Navbar: Course (In Progress)
        </h2>
        <Navbar
          isLoggedIn={true}
          navType="course"
          courseState="inProgress"
          courseTitle="Foundations of User Experience Design"
          progress={83}
        />
      </div>
    </div>
  );
}

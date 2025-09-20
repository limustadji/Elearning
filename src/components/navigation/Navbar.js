import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLink";
import UserProfile from "./UserProfile";
import Button from "../button/Button";
import UnstyledButton from "../button/UnstyledButton";
import Stepper from "../step/Stepper";
import Step from "../step/Step";
import CertificateDropdown from "../dropdown/CertificateDropdown";
import ProgressDropdown from "../dropdown/ProgressDropdown";

const Navbar = ({
  isLoggedIn = false,
  navType = "main",
  courseState = "inProgress",
  courseTitle = "Foundations of User Experience Design",
  progress = 83,
  currentStep = 1,
}) => {
  const getNavAlignment = () => {
    if (navType === "auth") {
      return "justify-start";
    }
    return "justify-between";
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm-px-6 lg:px-8">
        <div className={`flex items-center h-20 ${getNavAlignment()}`}>
          {/* Bagian Kiri Navbar */}
          <div className="flex items-center">
            {navType === "course" ? (
              <UnstyledButton iconLeft={true}>
                <span className="text-base font-semibold">{courseTitle}</span>
              </UnstyledButton>
            ) : (
              <Logo />
            )}
          </div>

          {/* Bagian Kanan Navbar */}
          {navType !== "auth" && (
            <div className="flex items-center">
              {navType === "main" && (
                <>
                  <div className="hidden md:block">
                    <NavLinks />
                  </div>
                  <div className="ml-4 flex items-center">
                    {isLoggedIn ? (
                      <UserProfile avatar="/assets/images/avatar.jpg" />
                    ) : (
                      <div className="hidden md:flex items-center space-x-2">
                        <Button variant="solid" color="primary" size="md">
                          Login
                        </Button>
                        <Button variant="outline" color="primary" size="md">
                          Register
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              )}

              {navType === "payment" && (
                <Stepper currentStep={currentStep}>
                  <Step title="Pilih Metode" />
                  <Step title="Bayar" />
                  <Step title="Selesai" />
                </Stepper>
              )}

              {navType === "course" && (
                <div className="flex items-center">
                  {courseState === "completed" ? (
                    <CertificateDropdown />
                  ) : (
                    <ProgressDropdown
                      progress={progress}
                      completedModules={10}
                      totalModules={12}
                    />
                  )}
                  <div className="ml-9">
                    <UserProfile avatar="/assets/images/avatar.jpg" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

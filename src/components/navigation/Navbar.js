"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLink";
import UserProfile from "./UserProfile";
import Button from "../button/Button";
import UnstyledButton from "../button/UnstyledButton";
import Stepper from "../step/Stepper";
import Step from "../step/Step";
import CertificateDropdown from "../dropdown/CertificateDropdown";
import ProgressDropdown from "../dropdown/ProgressDropdown";
import HamburgerIcon from "../icons/HamburgerIcon";

const Navbar = ({
  isLoggedIn = false,
  navType = "main",
  courseState = "inProgress",
  courseTitle = "Foundations of User Experience Design",
  progress = 83,
  currentStep = 1,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const truncateTitle = (title) => {
    return title.split(" ")[0] + "...";
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Konten Utama Navbar */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Sisi Kiri Desktop */}
            <div className="flex items-center">
              {navType === "course" ? (
                <UnstyledButton iconLeft={true}>
                  <span className="text-lg font-semibold">{courseTitle}</span>
                </UnstyledButton>
              ) : (
                <Logo />
              )}
            </div>

            {/* Sisi Kanan Desktop */}
            <div className="flex items-center">
              {navType === "main" && (
                <>
                  <NavLinks />
                  <div className="ml-4 flex items-center">
                    {isLoggedIn ? (
                      <UserProfile avatar="/assets/images/avatar.jpg" />
                    ) : (
                      <div className="flex items-center space-x-2">
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
                    <ProgressDropdown progress={progress} />
                  )}
                  <div className="ml-9">
                    <UserProfile avatar="/assets/images/avatar.jpg" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/*TAMPILAN MOBILE*/}
          <div className="md:hidden flex items-center justify-between w-full">
            {(navType === "main" ||
              navType === "auth" ||
              navType === "payment") && (
              <>
                <Logo />
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <HamburgerIcon />
                </button>
              </>
            )}

            {navType === "course" && (
              <>
                <UnstyledButton iconLeft={true}>
                  <span className="text-base font-semibold">
                    {truncateTitle(courseTitle)}
                  </span>
                </UnstyledButton>
                <div className="flex items-center gap-x-4">
                  {courseState === "inProgress" ? (
                    <ProgressDropdown
                      progress={progress}
                      completedModules={10}
                      totalModules={12}
                    />
                  ) : (
                    <CertificateDropdown isIconOnly={true} />
                  )}
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <HamburgerIcon />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks />
            <div className="px-3 pt-4 pb-2 border-t">
              {isLoggedIn ? (
                <div className="flex items-center gap-x-3">
                  <UserProfile avatar="/assets/images/avatar.jpg" />
                  <p className="font-semibold">User Name</p>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="solid"
                    color="primary"
                    size="md"
                    className="w-full"
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    color="primary"
                    size="md"
                    className="w-full"
                  >
                    Register
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

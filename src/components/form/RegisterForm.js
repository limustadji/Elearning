"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "../button/Button";
import ChevronDownIcon from "../icons/ChevronDownIcon";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  icon,
  onIconClick,
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm  text-foreground">
      {label} <span className="text-error-default">*</span>
    </label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200"
      />
      {icon && (
        <button
          type="button"
          onClick={onIconClick}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          {icon}
        </button>
      )}
    </div>
  </div>
);

const PhoneInput = ({
  label,
  value,
  onChange,
  countries = [],
  variant = "default",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countries[0] || {
      name: "Indonesia",
      code: "+62",
      flag: "/assets/icons/icon-indonesia.svg",
    }
  );
  const dropdownRef = useRef(null);
  const isMobile = variant === "mobile";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm ">
        {label} <span className="text-error-default">*</span>
      </label>
      <div className="flex items-center gap-2 ">
        <div className="relative w-1/4" ref={dropdownRef}>
          <button
            type="button"
            className="w-full flex items-center justify-between px-3 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-2">
              {!isMobile && (
                <>
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    width={24}
                    height={16}
                  />
                  <div className="h-6 w-px bg-gray-300" />
                </>
              )}
              <span className="text-sm font-medium">
                {selectedCountry.code}
              </span>
            </div>
            {!isMobile && (
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {isOpen && (
            <ul className="absolute z-20 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto w-56">
              {countries.map((country) => (
                <li
                  key={country.code}
                  className="flex items-center gap-3 px-4 py-2 text-sm  hover:bg-gray-100 cursor-pointer "
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src={country.flag}
                    alt={country.name}
                    width={24}
                    height={16}
                  />
                  <span>
                    {country.name} ({country.code})
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="w-3/4">
          <input
            type="tel"
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>
      </div>
    </div>
  );
};

const RegisterForm = ({ variant = "default" }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const isMobile = variant === "mobile";

  const countryData = [
    {
      name: "Indonesia",
      code: "+62",
      flag: "/assets/icons/icon-indonesia.svg",
    },
    { name: "Malaysia", code: "+60", flag: "/assets/icons/icon-indonesia.svg" },
    {
      name: "Singapore",
      code: "+65",
      flag: "/assets/icons/icon-indonesia.svg",
    },
  ];

  return (
    <div
      className={`
            bg-white border border-gray-200 flex flex-col
            ${
              isMobile
                ? "w-80 p-5 gap-5 rounded-md"
                : "w-147.5 p-9 gap-9 rounded-lg"
            }
        `}
    >
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-3xl font-bold text-foreground">Pendaftaran Akun</h1>
        <p className="text-base text-gray-600">
          Yuk, daftarkan akunmu sekarang juga!
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <Input
          label="Nama Lengkap"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          label="E-Mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {isMobile && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-foreground">
              Jenis Kelamin <span className="text-error-default">*</span>
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary-100">
              <option>Wanita</option>
              <option>Pria</option>
            </select>
          </div>
        )}

        <PhoneInput
          label="No. Hp"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          countries={countryData}
          variant={variant}
        />

        <Input
          label="Kata Sandi"
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onIconClick={() => setIsPasswordVisible(!isPasswordVisible)}
          icon={
            <Image
              src={
                isPasswordVisible
                  ? "/assets/icons/icon-eye-on.svg"
                  : "/assets/icons/icon-eye-off.svg"
              }
              alt="Toggle"
              width={20}
              height={20}
            />
          }
        />

        <div>
          <Input
            label="Konfirmasi Kata Sandi"
            type={isConfirmPasswordVisible ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onIconClick={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
            icon={
              <Image
                src={
                  isConfirmPasswordVisible
                    ? "/assets/icons/icon-eye-on.svg"
                    : "/assets/icons/icon-eye-off.svg"
                }
                alt="Toggle"
                width={20}
                height={20}
              />
            }
          />
          <div className="text-right mt-2">
            <a href="#" className="text-sm hover:underline">
              Lupa Password?
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          <Button variant="solid" color="primary" size="md" className="w-full">
            Daftar
          </Button>
          <Button variant="light" color="primary" size="md" className="w-full">
            Masuk
          </Button>
        </div>
      </form>

      <div className="flex items-center gap-4">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="text-sm text-gray-400">atau</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <Button
        variant="outline"
        color="primary"
        size="md"
        className="w-full flex items-center justify-center gap-2 !border-gray-100 !text-gray-700 hover:!bg-gray-50"
      >
        <Image
          src="/assets/icons/icon-google.svg"
          alt="Google logo"
          width={20}
          height={20}
        />
        <span>Daftar dengan Google</span>
      </Button>
    </div>
  );
};

export default RegisterForm;

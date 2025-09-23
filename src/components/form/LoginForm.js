"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../button/Button";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  onIconClick,
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-foreground">
      {label} <span className="text-error-default">*</span>
    </label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200"
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

const LoginForm = ({ variant = "default" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isMobile = variant === "mobile";

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
        <h1 className="text-3xl font-bold text-foreground">Masuk ke Akun</h1>
        <p className="text-base">Yuk, lanjutin belajarmu di videobelajar.</p>
      </div>

      <form className="flex flex-col gap-5">
        <Input
          label="E-Mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <Input
            label="Kata Sandi"
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onIconClick={togglePasswordVisibility}
            icon={
              <Image
                src={
                  isPasswordVisible
                    ? "/assets/icons/icon-eye-on.svg"
                    : "/assets/icons/icon-eye-off.svg"
                }
                alt="Toggle visibility"
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
            Masuk
          </Button>
          <Button variant="light" color="primary" size="md" className="w-full">
            Daftar
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
        <span>Masuk dengan Google</span>
      </Button>
    </div>
  );
};

export default LoginForm;

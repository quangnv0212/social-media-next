"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { useThemeStore } from "@/store/store";
const languages = [
  {
    name: "en",
    flag: "https://avatars.githubusercontent.com/u/97165289",
  },
  {
    name: "vn",
    flag: "https://avatars.githubusercontent.com/u/97165289",
  },
  {
    name: "en",
    flag: "https://avatars.githubusercontent.com/u/97165289",
  },
];
const Language = () => {
  type Language = {
    name: string;
    flag: any;
    language?: string;
  };
  const router = useRouter();
  const pathname = usePathname();
  const _pathname = pathname.split("/")[2];
  const { isRtl, setRtl } = useThemeStore();
  const found = pathname
    ? languages.find((lang) => pathname.includes(lang.name))
    : null;
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    found ?? languages[0]
  );

  const handleSelected = (lang: string) => {
    setSelectedLanguage({
      ...selectedLanguage,
      name: lang,
      language: lang === "en" ? "En" : "Bn",
    });
    setRtl(lang === "ar");
    if (_pathname) {
      router.push(`/${lang}/${_pathname}`);
    } else {
      router.push(`/${lang}`);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" className="bg-transparent hover:bg-transparent">
          <span className="w-6 h-6 rounded-full me-1.5">
            <Image
              src={
                selectedLanguage
                  ? selectedLanguage.flag
                  : "https://avatars.githubusercontent.com/u/97165289"
              }
              alt=""
              className="w-full h-full object-cover rounded-full"
              width={24}
              height={24}
            />
          </span>
          <span className="text-sm text-default-600 capitalize">
            {selectedLanguage ? selectedLanguage.name : "En"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        {languages.map((item, index) => (
          <DropdownMenuItem
            key={`flag-${index}`}
            className={cn(
              "py-1.5 px-2 cursor-pointer dark:hover:bg-background mb-[2px] last:mb-0",
              {
                "bg-primary-100 ":
                  selectedLanguage && selectedLanguage.name === item.name,
              }
            )}
            onClick={() => handleSelected(item.name)}
          >
            <span className="w-6 h-6 rounded-full me-1.5">
              <Image
                src={item.flag}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </span>
            <span className="text-sm text-default-600 capitalize">
              {item.name}
            </span>
            {selectedLanguage && selectedLanguage.name === item.name && (
              <Check className="w-4 h-4 flex-none ltr:ml-auto rtl:mr-auto text-default-700" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Language;

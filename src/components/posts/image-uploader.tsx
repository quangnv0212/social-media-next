import { cn } from "@/lib/utils";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Control, useController } from "react-hook-form";

interface ImageUploaderProps {
  maxFiles?: number;
  maxSize?: number; // in bytes
  className?: string;
  control: Control<
    {
      content: string;
      media?: any[] | undefined;
    },
    any
  >;
}

export function ImageUploader({
  maxFiles = 4,
  maxSize = 5 * 1024 * 1024, // 5MB default
  className,
  control,
}: ImageUploaderProps) {
  const {
    field: { value = [], onChange },
  } = useController({
    control,
    name: "media",
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (value.length + acceptedFiles.length > maxFiles) {
        alert(`You can only upload up to ${maxFiles} files`);
        return;
      }

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      onChange?.(newFiles);
    },
    [value.length, maxFiles, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
    },
    maxSize,
    maxFiles,
  });

  const removeFile = (fileToRemove: File) => {
    onChange?.(value.filter((file: any) => file !== fileToRemove));
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors",
          "hover:border-primary/50 hover:bg-muted/50",
          isDragActive && "border-primary bg-muted",
          "flex flex-col items-center justify-center gap-2"
        )}
      >
        <input {...getInputProps()} />
        <Upload className="h-8 w-8 text-muted-foreground" />
        <div className="text-center">
          <p className="text-sm font-medium">
            {isDragActive ? "Drop the files here" : "Drag & drop files here"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            or click to select files
          </p>
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          Supports: JPG, JPEG, PNG, GIF, WEBP (max {maxFiles} files,{" "}
          {maxSize / (1024 * 1024)}MB each)
        </div>
      </div>

      {value.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {value.map((file: any) => (
            <div key={file.name} className="relative group aspect-square">
              <Image
                src={file.preview}
                alt={file.name}
                className="object-cover rounded-lg"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <button
                onClick={() => removeFile(file)}
                className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

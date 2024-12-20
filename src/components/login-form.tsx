"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetProfileMutation, useLoginMutation } from "@/queries/useAuth";
import { LoginBodyType } from "@/schemaValidations/auth.schema";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppStore } from "./providers/app-provider";

export default function LoginForm() {
  const { setUser, setIsAuth } = useAppStore();
  const loginMutation = useLoginMutation();
  const { data: profile } = useGetProfileMutation();

  const form = useForm<LoginBodyType>({
    // resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "quangnv.0214@gmail.com",
      password: "123456",
    },
  });
  const router = useRouter();
  const onSubmit = async (data: LoginBodyType) => {
    await loginMutation.mutateAsync(data);
    setIsAuth(true);
    router.push("/");
  };
  useEffect(() => {
    if (profile) {
      setUser(profile.payload);
    }
  }, [profile]);
  console.log(profile);

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
            noValidate
            onSubmit={form.handleSubmit(onSubmit, (err) => {})}
          >
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field, formState: { errors } }) => (
                  <FormItem>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        {...field}
                      />
                      <FormMessage>
                        {Boolean(errors.email?.message) &&
                          (errors.email?.message as any)}
                      </FormMessage>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field, formState: { errors } }) => (
                  <FormItem>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        required
                        {...field}
                      />
                      <FormMessage>
                        {Boolean(errors.password?.message) &&
                          (errors.password?.message as any)}
                      </FormMessage>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {loginMutation.isPending ? (
                  <Icon icon="lucide:loader" className="animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

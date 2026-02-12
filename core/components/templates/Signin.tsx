import React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Signin = () => {
  return (
    <Card className="w-75 mx-auto mt-12 px-4">
      <CardHeader className="px-0">
        <CardTitle className="w-fit mx-auto font-bold border-b-2 border-dashed border-[#9d44b5] pb-2">
          Signin
        </CardTitle>
        <CardDescription className="text-[0.8rem]"></CardDescription>
      </CardHeader>

      <Label htmlFor="email">email</Label>
      <Input id="email" />
      <Label htmlFor="password">password</Label>
      <Input id="password" />

      <CardFooter>
        <div className="flex flex-col w-full gap-2">
          <Button>Signin</Button>
          <Button>Signup</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Signin;

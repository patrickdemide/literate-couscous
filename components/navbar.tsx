import { BellIcon, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbarweb = () => {
  return (
    <div className="flex justify-between  py-2 ">
      <div>Sitname</div>
      <div>
        <Button className="justify-between w-72 bg-accent/25 text-primary hover:bg-accent/50">
          <div>Search...</div>
          <div>
            <SearchIcon />
          </div>
        </Button>
      </div>
      <div className="flex items-center space-x-5">
        <BellIcon className=" rounded-full bg-accent/50" />

        <Avatar className=" size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className=" size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className=" size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
//
export const Navbarmobile = () => {
  return (
    <div>
      <div>dsdcsd</div>
    </div>
  );
};

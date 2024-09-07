import { DropdownMenuDemo } from "@/components/avatar";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowDown,
  BellIcon,
  BookmarkIcon,
  DotIcon,
  EllipsisIcon,
  HeartIcon,
  HomeIcon,
  MessageCircle,
  PlusIcon,
  SearchIcon,
  User,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <main className="lg:px-5">
      <div className="sticky top-0 z-20 hidden items-center justify-between bg-background py-2 lg:flex">
        <div className="w-72 text-3xl font-bold">SiteName</div>
        <Input className="max-w-lg bg-accent/50" placeholder="Search..." />
        <div className="flex w-72 items-center justify-end space-x-5">
          <div className="rounded-full bg-accent/25 p-2">
            <BellIcon />
          </div>
          <DropdownMenuDemo />
        </div>
      </div>

      <div className="hidden lg:flex">
        <div className="sticky top-[3.5rem] h-[calc(100vh-3.5rem)] w-72 pt-10 text-xl font-semibold">
          <div className="space-y-4">
            <div className="flex space-x-2 text-blue-600">
              <HomeIcon />
              <div>Pour toi</div>
            </div>

            <div className="flex space-x-2">
              <UsersIcon />
              <div>Abonnement</div>
            </div>

            {/* <div className="flex space-x-2">
              <BookmarkIcon />
              <div>Bookmaks</div>
            </div>

            <div className="flex space-x-2">
              <User />
              <div>Profile</div>
            </div> */}


            <div >
              <Dialog >
                <DialogTrigger asChild>
                  
                  <PlusIcon className=" size-20 rounded-full bg-accent" />



                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>



          </div>
        </div>

        <div className="flex flex-1">
          <div className="flex-1 space-y-20 pt-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="mx-auto flex max-w-lg space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between">
                    <div className="flex">
                      <div>romaricdemide</div>
                      <DotIcon />
                      <div className="text-muted-foreground">4h</div>
                    </div>

                    <EllipsisIcon />
                  </div>

                  <div className="line-clamp-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem nostrum pariatur atque culpa illum vitae doloremque
                    cupiditate, minus, placeat earum ipsam ex vel quo repellat,
                    id iusto. Suscipit, corporis obcaecati?
                  </div>

                  <div className="text-blue-600">
                    {" "}
                    #endregion #endregion #endregion #endregion #endregion{" "}
                  </div>

                  <img
                    src="/59f63a8e006156c86a7cc8116351d93c.jpg"
                    alt=""
                    className="w-full rounded-lg"
                  />

                  <div className="flex space-x-5 pt-3">
                    <div className="flex space-x-2 text-muted-foreground">
                      <HeartIcon />
                      <div>100k</div>
                    </div>

                    <div className="flex space-x-2 text-muted-foreground">
                      <MessageCircle />
                      <div>100k</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-[3.5rem] flex h-[calc(100vh-3.5rem)] w-72 flex-col items-end pt-10">
            <div className="space-y-5">
              <div className="text-xl font-bold">Who to follow</div>
              <div className="space-y-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex space-x-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <div>romaricdemide</div>
                      <div className="text-sm text-muted-foreground">
                        {" "}
                        155k followers
                      </div>
                    </div>
                    <Button className="bg-blue-600 text-white">Follow</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden px-2 pb-36">
        {/* <div className=" text-center text-2xl font-bold pt-4">SiteName</div> */}


        <div className=" flex py-2 justify-center space-x-2  text-xl font-bold">
          <div className=" text-blue-600">Pour vous</div>
          <div className=" text-blue-600">
            /
          </div>
          <div>Following</div>
        </div>

        <div className="flex-1 space-y-20 pt-14">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="mx-auto flex max-w-lg space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <div className="flex">
                    <div>romaricdemide</div>
                    <DotIcon />
                    <div className="text-muted-foreground">4h</div>
                  </div>

                  <EllipsisIcon />
                </div>

                <div className="line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem nostrum pariatur atque culpa illum vitae doloremque
                  cupiditate, minus, placeat earum ipsam ex vel quo repellat, id
                  iusto. Suscipit, corporis obcaecati?
                </div>

                <div className="text-blue-600">
                  {" "}
                  #endregion #endregion #endregion #endregion #endregion{" "}
                </div>

                <img
                  src="/59f63a8e006156c86a7cc8116351d93c.jpg"
                  alt=""
                  className="w-full rounded-lg"
                />

                <div className="flex space-x-5 pt-3">
                  <div className="flex space-x-2 text-muted-foreground">
                    <HeartIcon />
                    <div>100k</div>
                  </div>

                  <div className="flex space-x-2 text-muted-foreground">
                    <MessageCircle />
                    <div>100k</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bg-background inset-x-0 bottom-0 flex space-x-2 border-t border-accent py-1 lg:hidden">
        <Button variant={"ghost"} className="flex-1">
          <HomeIcon />
        </Button>
        <Button variant={"ghost"} className="flex-1">
          <SearchIcon />
        </Button>
        <Button variant={"ghost"} className="flex-1 bg-accent">
          <PlusIcon />
        </Button>
        <Button variant={"ghost"} className="flex-1">
          <BellIcon />
        </Button>
        <Button variant={"ghost"} className="flex-1">
          <UserIcon />
        </Button>
      </div>
    </main>
  );
}

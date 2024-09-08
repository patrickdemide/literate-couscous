import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowDown,
  ArrowLeft,
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

export default function DetailPost() {
  return (
    <main className="px-2 lg:px-5">
      <div className="sticky top-0 z-20 hidden items-center justify-between bg-background py-2 lg:flex">
        <div className="w-72 text-3xl font-bold">SiteName</div>
        <Input className="max-w-lg bg-accent/50" placeholder="Search..." />
        <div className="flex w-72 items-center justify-end space-x-5">
          <div className="rounded-full bg-accent/25 p-2">
            <BellIcon />
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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

            <div className="flex space-x-2">
              <BookmarkIcon />
              <div>Bookmaks</div>
            </div>

            <div className="flex space-x-2">
              <User />
              <div>Profile</div>
            </div>

            <PlusIcon className="fixed bottom-20 right-20 size-20 rounded-full bg-accent" />
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

      <div className="px-2 pb-36 sm:hidden">
        <div className="fixed inset-x-0 top-0 z-20 flex justify-between space-x-1 bg-background py-3">
          <ArrowLeft />
          <div className="text-xl font-bold">Rayan  Posts</div>
          <SearchIcon />
        </div>

        <div className="flex-1 space-y-20 pt-24">
          {Array.from({ length: 1 }).map((_, i) => (
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

      <div className="fixed inset-x-0 bottom-0 z-20 flex items-center space-x-2 bg-background px-2 py-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          placeholder="Add comment"
          className="rounded-full bg-accent/50"
        />
      </div>

      <div className="mb-10 border-b border-accent flex justify-between">
        <div>Comments</div>
        <Button>
          Reccent
          <ArrowDown />
        </Button>
      </div>

      <div className="space-y-20 pb-40 sm:hidden">
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

              <div className=" flex space-x-3  p-2 border-l border-blue-600 bg-accent/25 rounded-xl">
                <Avatar className=" size-6">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <div className="">
                    <div className="flex">
                      <div className=" text-sm">romaricdemide</div>
                      <DotIcon />
                      <div className="text-muted-foreground">4h</div>
                    </div>
                    <div className=" line-clamp-2 text-muted-foreground text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    </div>
                  </div>
                </div>
              </div>

              <div className=" text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                nostrum pariatur atque culpa illum vitae doloremque cupiditate,
                minus, placeat earum ipsam ex vel quo repellat, id iusto.
                Suscipit, corporis obcaecati?     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                nostrum pariatur atque culpa illum vitae doloremque cupiditate,
                minus, placeat earum ipsam ex vel quo repellat, id iusto.
                Suscipit, corporis obcaecati?     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                nostrum pariatur atque culpa illum vitae doloremque cupiditate,
                minus, placeat earum ipsam ex vel quo repellat, id iusto.
                Suscipit, corporis obcaecati?
              </div>


              <div className="flex space-x-5 pt-3">
                <div className="flex space-x-2 text-muted-foreground">
                  <HeartIcon />
                  <div>100k</div>
                </div>

                <div className="flex space-x-2 text-muted-foreground">
                  Repondre
                </div>
              </div>


            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

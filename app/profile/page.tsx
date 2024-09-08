import { ChevronLeft, ChevronRight, DotIcon, EllipsisIcon, EllipsisVertical, HeartIcon, MessageCircle, UserPlus } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


export default function profile() {
    return (
        <div className=' px-5 '>
            <div className=' sticky top-0 bg-background py-3 flex items-center'>
                <div className=' flex-1'>
                    <ChevronLeft />
                </div>
                <div className=' text-xl font-extrabold'>Profile Romaric</div>
                <div className=' flex-1 flex justify-end'>
                    <Drawer>
                        <DrawerTrigger>
                            <EllipsisVertical />
                        </DrawerTrigger>
                        <DrawerContent>

                            <DrawerFooter>
                                <Button variant={'secondary'} className=' justify-between'>Activité <ChevronRight/></Button>
                                <Button variant={'secondary'} className=' justify-normal'>Mode</Button>
                                <Button variant={'secondary'} className=' justify-normal'>Logout</Button>
                           
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>

                </div>

            </div>

            <div className=' pt-10 flex space-x-4 items-center'>

                <div className=' space-y-1'>
                    <Avatar className=' size-20'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>


                <div className=' flex space-x-5'>
                    <div className=' flex-1'>
                        <div className=' font-bold text-lg'>500k</div>
                        <div className=' text-muted-foreground '>followers</div>
                    </div>
                    <div className=' flex-1'>
                        <div className=' font-bold text-lg'>500k</div>
                        <div className=' text-muted-foreground '>followings</div>
                    </div>
                    <div className=' flex-1'>
                        <div className=' font-bold text-lg'>500k</div>
                        <div className=' text-muted-foreground '>posts</div>
                    </div>

                </div>


            </div>
            <div className=' font-semibold text-muted-foreground mt-2'>@romaeic demide</div>

            <div className='  pt-2 text-sm'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quo ut unde quasi dolore aliquid sit atque hic
            </div>

            <div className=' flex pt-3 space-x-3 w-full'>
                <Button className=' flex-1'>Modifier le  profile </Button>
                <Button size={'icon'}><UserPlus /></Button>
            </div>


            <div className=' mt-14 '>
                <div className=' text-xl font-bold'>Mes posts </div>
                <div className=' space-y-10 pt-5'>

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
            </div>
        </div>
    )
}

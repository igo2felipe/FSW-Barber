import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import Image from "next/image"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="https://s3-alpha-sig.figma.com/img/0253/a980/873ac68aebe436f0d55d07b08c2901da?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q1Z3X3xflK4D8MfRAeT9EeTVG8CsHOYGlWB~Mastp2Dd99vM7qiZ9XdnuCS4ZjiO0hi9mlMSdbDi02CyTD4JWIEvdF6w1dlqOKG~GhDP~tHFzsHKGXpdlu~DnZAE4oZofz1rFR5Ytn-7b0qEI66IBQqpJmthrBpaSW2rg3TerEWk6y-w00jd5OKVattU2c0eiFFKA5xNZghcsHIIrtOXphSsrHzkfBM2BxM8Otd2WQHPseHsZwQdyx1pbLoQpBtJkQHnfE9hK6OKv2kZKJZmBnNaWzXOepZ0FHPUFywCFUNwC4i3P5zivsgNHAUX~tOwpgI-8P5QUOuhKOmUotdLEQ__" />
        </Avatar>

        <div>
          <p className="font-bold">Igor Felipe</p>
          <p className="text-xs">igorfeleonel@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet

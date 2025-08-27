import { Button } from "@/components/ui/button";
import Image from "next/image";
import adnroid from "@/public/android.png";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";

interface ServiceCardProps {
  title: string;
  discription: string;
  icon: string;
  link: string;
}

export default function ServiceCard({
  title,
  discription,
  icon,
  link,
}: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 relative  w-20 h-20">
          <Image
            src={icon || adnroid}
            alt={title}
            fill
            objectFit="cover"
            className="object-contain rounded-lg"
          />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed line-clamp-6">
          {discription}
        </CardDescription>
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link href={link}>View Projects</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

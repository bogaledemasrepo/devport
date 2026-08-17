import { Button } from "@/components/ui/button";
import Image from "next/image";
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
  description: string;
  icon: string;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  link,
}: ServiceCardProps) {
  return (
    <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="text-center">
        <div className="relative mx-auto mb-4 h-20 w-20">
          <Image
            src={icon}
            alt={title}
            fill
            objectFit="cover"
            className="rounded-lg object-contain"
          />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="line-clamp-6 text-sm leading-relaxed">
          {description}
        </CardDescription>
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link href={link}>View Projects</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

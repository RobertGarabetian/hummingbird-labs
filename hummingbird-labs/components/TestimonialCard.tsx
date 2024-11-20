import { Card } from "@/components/ui/card";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  business: string;
  image: string;
}

export function TestimonialCard({ quote, author, business, image }: TestimonialCardProps) {
  return (
    <Card className="p-6 glass-card hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image}
          alt={author}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{business}</p>
        </div>
      </div>
      <p className="text-muted-foreground italic">&ldquo;{quote}&rdquo;</p>
    </Card>
  );
}
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = [
    {
      id: 1,
      name: "Mohamed Ali",
      position: "Co-Founder & CEO at Layers",
      content:
        "Working with Ahmed Fawzy was an absolute pleasure. He delivered our projects on time and exceeded our expectations in terms of quality and functionality. HisWorking with Ahmed Fawzy was an outstanding experience. He delivered our projects on time, with exceptional quality and functionality that went beyond our expectations. His attention to detail, strong technical skills, and ability to solve complex problems made a real impact on our success. We highly recommend him for any software development project.",
      rating: 5,
      image: "/moh-ali.jpg",
    },
    {
      id: 2,
      name: "Mohamed Arafat Ibrahim",
      position: "Co-Founder & CEO | Author @ BookCloud Middle East",
      content: `I had the pleasure of working with Ahmed, and I can confidently say he’s one of the most supportive and professional people I’ve met. I was facing a very challenging technical issue that had been blocking progress on our project for four whole months.

Ahmed stepped in with remarkable patience and dedication. He worked closely with us, joined live sessions, and — to my surprise — we were able to solve the issue together in just two days.

I truly appreciate his commitment, expertise, and exceptional collaboration skills. Highly recommended.`,
      rating: 5,
      image: "/moh-arafat-ibhrahim.jpg",
    },
    {
      id: 3,
      name: "Eslam Osama",
      position: "CEO at Eslam Offers",
      content: `I had the pleasure of working with Ahmed Fawzy during his time at Eslam Offers, and he was a key contributor to the team’s success.

From day one, Ahmed Fawzy showed a strong sense of responsibility and ownership. He was always proactive, detail-oriented, and committed to delivering great results. His work helped improve how we managed and published offers, which made a real difference in the quality and reliability of the platform.

Beyond his technical and operational skills, Ahmed Fawzy is a great teammate — collaborative, positive, and always ready to share ideas or help solve a problem. His communication style makes working with him easy and enjoyable.

I highly recommend Ahmed Fawzy to any team looking for someone dependable, driven, and focused on delivering value. He’d be an asset in any role he takes on next.`,
      rating: 5,
      image: "/eslam-osama.jpg",
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-5 w-5 fill-primary text-primary" />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />,
      );
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Satisfaction
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3 p-2"
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground grow mb-4">
                        &quot;{testimonial.content}&quot;
                      </p>
                      <div className="mt-auto">
                        {renderStars(testimonial.rating)}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative translate-y-0 mr-2" />
              <CarouselNext className="relative translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

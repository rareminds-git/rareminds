import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageSquareQuote, Star } from "lucide-react";
import Quotes from "./quotes";

const testimonials = [
  {
    img: "/images/corporate/recruitment/testimonials/PCC.webp",
    content:
      "I want to take a moment to express our sincere appreciation for your outstanding support in our recruitment efforts at Park Controls and Communications Private Limited. The quality of service from you and your team has been truly commendable, and we are consistently impressed by your dedication and professionalism. A special thanks for successfully onboarding for three candidates whose contributions are already making a positive impact. Your commitment to excellence and ability to identify top talent reaffirm the strength of our partnership. We are grateful for this collaboration with Rareminds and look forward to continued success together.",
    author: "Manisha Borse",
    position: "DGM – HR & Admin",
    company: "Park Controls and Communications Private Limited",
    rating: 5,
  },
  {
    img: "/images/corporate/recruitment/testimonials/PFC.webp",
    content:
      "A big 'Thank you' to you and your team for being consistent and diligent and finally closing this vacancy for us. Hope to continue our collaboration with Rareminds.",
    author: "Aarohee Aaron",
    position: "Director- HR",
    company: "Plastics For Change",
    rating: 5,
  },
  {
    img: "/images/corporate/recruitment/testimonials/infolab.webp",
    content:
      "I wish to convey our profound appreciation for your outstanding support. The quality of service from your team has consistently impressed us. Special thanks for onboarding Riyaaz; his contributions are already proving invaluable. Additionally, the introductions of Sireesha and Rajireddy align perfectly with our needs. Your commitment to excellence and the caliber of talent you provide reinforce our partnership's strength. We're grateful for our collaboration and look forward to continued success together.",
    author: "Srikanth M",
    position: "TA Manager",
    company: "Infolob Solutions India Pvt. Ltd.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FFFBE5] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/corporate/recruitment/testimonials/bg.webp')] bg-center opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <div className="bg-corporate-secondary text-white w-16 h-16 rounded-[25px] mx-auto mb-4 flex items-center justify-center transform rotate-6">
          <MessageSquareQuote size={32} />
        </div>
        <h2 className="text-3xl md:text-5xl text-center font-bold mb-4 text-corporate-black">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg text-center">
          Don't just take our word for it. Hear from the companies that trust
          Rareminds with their most important asset—their people.
        </p>

        <div className="mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full py-5">
                  <div className="relative mt-[80px]">
                    <Quotes className="absolute top-0" />

                    <div className="relative flex justify-center flex-col mx-auto">
                      <img
                        src={testimonial.img}
                        alt={testimonial.company + " Logo"}
                        height={200}
                        width={350}
                        className="object-contain mx-auto max-h-[200px] mt-[100px] lg:mt-[50px]"
                      />

                      <div className="flex mx-auto mt-3">
                        <Star
                          fill={`${testimonial.rating > 0 ? "#F1CF54" : "#DBDBDB"}`}
                          stroke="none"
                          className=""
                        />
                        <Star
                          fill={`${testimonial.rating > 1 ? "#F1CF54" : "#DBDBDB"}`}
                          stroke="none"
                          className=""
                        />
                        <Star
                          fill={`${testimonial.rating > 2 ? "#F1CF54" : "#DBDBDB"}`}
                          stroke="none"
                          className=""
                        />
                        <Star
                          fill={`${testimonial.rating > 3 ? "#F1CF54" : "#DBDBDB"}`}
                          stroke="none"
                          className=""
                        />
                        <Star
                          fill={`${testimonial.rating > 4 ? "#F1CF54" : "#DBDBDB"}`}
                          stroke="none"
                          className=""
                        />
                      </div>

                      <p className="mt-5 w-full max-w-[950px] mx-auto text-center">
                        {testimonial.content}
                      </p>
                      <div>
                        <p className="font-bold text-[20px] mt-4 text-corporate-primary text-center">
                          {testimonial.author}
                        </p>
                        <p className="text-corporate-secondary text-center">
                          {testimonial.position}
                        </p>
                        <p className="text-sm text-corporate-grey text-center">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static transform-none mx-2 bg-corporate-primary/20 border-corporate-primary text-corporate-primary hover:bg-corporate-primary hover:text-white" />
              <CarouselNext className="relative static transform-none mx-2 bg-corporate-primary/20 border-corporate-primary text-corporate-primary hover:bg-corporate-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

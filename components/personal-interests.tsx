// import { Card, CardContent } from "@/components/ui/card"
// import { Camera, Music, Mountain, Coffee, Book, Gamepad2 } from "lucide-react"

// const interests = [
//   {
//     icon: Camera,
//     title: "Photography",
//     description: "Capturing moments and exploring creative perspectives through the lens.",
//     image: "/camera-and-photography-equipment-on-wooden-desk.png",
//   },
//   {
//     icon: Music,
//     title: "Music Production",
//     description: "Creating electronic music and experimenting with sound design in my home studio.",
//     image: "/music-production-setup-with-synthesizers-and-compu.png",
//   },
//   {
//     icon: Mountain,
//     title: "Hiking",
//     description: "Finding inspiration and clarity in nature's most beautiful places.",
//     image: "/mountain-hiking-trail-with-scenic-view.png",
//   },
//   {
//     icon: Coffee,
//     title: "Coffee Culture",
//     description: "Exploring different brewing methods and discovering unique coffee origins.",
//     image: "/coffee-brewing-setup-with-pour-over-and-beans.png",
//   },
//   {
//     icon: Book,
//     title: "Reading",
//     description: "Diving into sci-fi novels, tech books, and philosophy to expand my perspective.",
//     image: "/stack-of-books-on-reading-table-with-warm-lighting.png",
//   },
//   {
//     icon: Gamepad2,
//     title: "Gaming",
//     description: "Enjoying indie games and analyzing game design and user experience patterns.",
//     image: "/gaming-setup-with-controller-and-retro-games.png",
//   },
// ]

// export function PersonalInterests() {
//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Beyond the Code</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             The passions and hobbies that fuel my creativity and keep me inspired outside of work.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {interests.map((interest, index) => (
//             <Card
//               key={index}
//               className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={interest.image || "/placeholder.svg"}
//                   alt={interest.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 flex items-center gap-2">
//                   <interest.icon className="w-6 h-6 text-white" />
//                   <h3 className="text-white font-semibold text-lg">{interest.title}</h3>
//                 </div>
//               </div>
//               <CardContent className="p-6">
//                 <p className="text-muted-foreground leading-relaxed">{interest.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";
// Import the logo image relative to this file
import yash from "../assests/yashhhhhhhhhh.jpeg";
import ashutosh from "../assests/ashu.jpeg";
import rahul1 from "../assests/rahulgym.jpeg";
import nishan from "../assests/nishu.jpeg";
import ritik from "../assests/ritik (2).jpeg";
import rahul2 from "../assests/rahulchomu.jpeg";
import piyush from "../assests/piyush.jpeg";
import raj from "../assests/raj.jpeg";
import kamal from "../assests/kamal.jpeg";
import ritikkumar from "../assests/tiny.jpeg";
import anubhav from "../assests/anubhav.jpeg";
import ayush from "../assests/ayuMahto.jpeg";
import francis from "../assests/francis.jpeg";
import ayushkumar from "../assests/ayushSingh.jpeg";
import ojha from "../assests/ojha.jpg"
import sachin from "../assests/sachine.jpg"

export default function Team() {
  const teamMembers = [
    
    {
      name: "Yash",
      description: "Lead the pack.",
      image: yash,
      linkedin: "https://www.linkedin.com/in/yash-singh-034bb8221",
      twitter: "https://x.com/YshSngh2?t=J9ICeydbJCPQaW_mv9nqFQ&s=09",
      email: "yashkant.singh0123@gmail.com",
   },

    {
     name: "Ashutosh",
      description: "He is the tech guy",
      image: ashutosh,
      linkedin: "https://www.linkedin.com/in/ashutosh-singh-10b62a19b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitter: "https://x.com/singh_ashu10?s=21",
      email: "ashutosh.singh2780@gmail.com",
    },
    {
      name: "Rahul",
      description: "Manage our money",
      image: rahul2,
      linkedin: "https://www.linkedin.com/in/rahul-mahato-288366357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/rahulmahato45",
      email: "mahatorahul81@gmail.com",
    },
    {
      name: "Ritik",
      description: "He get's the things done",
      image: ritik,
      linkedin: "#",
      twitter: "#",
      email: "Kumarritik1227@gmail.com",
    },
     {
      name: "Piyush",
      description: "Turning ideas into reality- A magician(might be the storezee god).",
      image: piyush,
      linkedin: "#",
      twitter: "#",
      email: "contact.piyush@zohomail.in",
   },
    {
      name: "Nishan",
      description: "He writes the code",
      image: nishan,
      linkedin: "#",
      twitter: "#",
      email: "khannishan713@gmail.com",
    },
    {
      name: "Rahul Kumar",
      description: "Chief vibe officer",
      image: rahul1,
      linkedin: "#",
      twitter: "#",
      email: "rk3464320@gmail.com",
     },
   {
    name: "Kamal",
    description: "He is the boss around.",
    image: kamal,
    linkedin: "#",
    twitter: "#",
    email: "kamalkantsingh004@gmail.com",
   },
   {
    name: "Ritik Kumar",
    description: "He is the 2nd boss around.",
    image: ritikkumar,
    linkedin: "#",
    twitter: "#",
    email: "rk6203434@gmail.com",
   },
   {
    name: "Anubhav",
      description: "He is the 3rd boss around.",
      image:anubhav,
      linkedin: "#",
      twitter: "#",
      email: "anubhavkumar8709@gmail.com",
   },
   {
    name: "Raj Kant",
    description: "we dont know what he do, because he do all the things",
    image: raj,
    linkedin: "#",
    twitter: "#",
    email: "rajkantsingh007@gmail.com",
   },
   {
    name: "Ayush Singh",
      description: "He is moving the things so the world doesn’t stop.",
      image:ayushkumar,
      linkedin: "#",
      twitter: "#",
      email: "singhkumarayush0970@gmail.com",
   },
   {
    name: "Francis",
      description: "He is a visual storyteller",
      image: francis,
      linkedin: "#",
      twitter: "#",
      email: "fpatra651@gmail.com"
   },
   {
    name: "Ayush Kumar",
      description: "Managing vibes, not just a page",
      image: ayush,
      linkedin: "#",
      twitter: "#",
      email: "ayushmahatohere@gmail.com",
   },
    {
    name: "Ashutosh Ojha",
      description: "Medicine for our stress",
      image: ojha,
      linkedin: "https://www.linkedin.com/in/ashutosh-ojha-94784239b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      twitter: "#",
      email: "ashutosh141076@gmail.com",
   },
   {
    name: "Sachin",
      description: "The Serious Guy",
      image: sachin,
      linkedin: "#",
      twitter: "#",
      email: "ayushmahatohere@gmail.com",
   },
    
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
             Powering Storezee
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hustlers. Young. Dreamers. Focused on redefining what's possible.
            <p>People build companies. We build the solutions that help you soar.</p>
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <Card key={index} className="border-0 shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-45 h-40 object-cover mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
               
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-4">
                {member.description}
              </p>
              <div className="flex items-center space-x-3">
                <a href={member.linkedin} className="p-2 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </a>
                <a href={member.twitter} className="p-2 bg-sky-100 rounded-xl hover:bg-sky-200 transition-colors">
                  <Twitter className="w-4 h-4 text-sky-600" />
                </a>
                <a href={`mailto:${member.email}`} className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                  <Mail className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Role Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission is powered by passion, purpose, and people. We’re not just building a service - we’re solving real problems and reshaping how the world travels, stores, and moves freely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ingenuity at the Core</h3>
                <p className="text-gray-600">
                  We’re always rethinking the norm - using smart tech and user-first thinking to make mobility seamless, secure, and stress-free.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Rooted in Local Strength</h3>
                <p className="text-gray-600">
                  Our community-first model empowers local partners and neighborhoods, turning idle spaces into opportunity hubs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Impact with Intention</h3>
                <p className="text-gray-600">
                  From easing travel to solving everyday storage challenges - we’re creating a real difference in how people live, move, and experience freedom.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
             Be Part of the Movement
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We’re not just building a product - we’re starting a travel revolution. If you're passionate about solving real-world problems, let's build the future together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl">
                Get in Touch
              </Button>
            </Link>
            <a href="mailto:careersinfo@thestorezee.com">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                info@thestorezee.com
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
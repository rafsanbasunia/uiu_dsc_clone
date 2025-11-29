import Head from "next/head";
import { Mail, Linkedin, Facebook, Github, Globe } from "lucide-react";

export default function Team() {
  return (
    <>
      <Head>
        <title>Our Team - UIU Data Science Club</title>
        <meta
          name="description"
          content="Meet the dedicated individuals who make the UIU Data Science Club possible."
        />
      </Head>
      <main className="container mx-auto px-4 py-8 min-h-screen">
        <div className="container py-10">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                Our Team
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Meet the dedicated individuals who make the UIU Data Science
                Club possible.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-center text-primary">
                  Moderator
                </h2>
                <div className="flex justify-center">
                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80 max-w-xs">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/modaretor.png"
                          alt="Ms. Khushnur Binte Jahangir"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Ms. Khushnur Binte Jahangir
                        </h3>
                        <p className="text-sm text-primary">Moderator</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:khushnur@cse.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/khushnur"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary">
                  Executive Committee
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Anik.JPG"
                          alt="Musfique Ahmed"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Musfique Ahmed
                        </h3>
                        <p className="text-sm text-primary">President</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:mahmed2330101@bsds.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/musfique-ahmed-aa89a5293"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/anik.mushfik"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/Musfique-Ahmed"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Mahi.JPG"
                          alt="MD Mahidul Islam Mahi"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          MD Mahidul Islam Mahi
                        </h3>
                        <p className="text-sm text-primary">Vice President</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:mmahi2330150@bsds.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/md-mahidul-islam-mahi-192759227"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/kmmahidulislam.mahi"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/Mitahi-1810"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/ds_mushfiq_rahman_v2.webp"
                          alt="Mushfiqur Rahman"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Mushfiqur Rahman
                        </h3>
                        <p className="text-sm text-primary">
                          General Secretary
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:mrahman2330090@bsds.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/profile.php?id=100010316107551"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Miti.JPG"
                          alt="Meherun Mehnaj Miti"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Meherun Mehnaj Miti
                        </h3>
                        <p className="text-sm text-primary">Joint Secretary</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:mmiti2330122@bsds.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/meherun-mehnaj-77a685216"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/meherun.mehnaj"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/Meherun-Mehnaj"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Faiyaz.JPG"
                          alt="Faiyaz Rahman"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Faiyaz Rahman
                        </h3>
                        <p className="text-sm text-primary">Treasurer</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:faiyaaaz.rahman@gmail.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/faiyaz-rahman-699189210"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/faiyaaaz"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary">
                  Wing Heads
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Monzim.JPG"
                          alt="Azraf Al Monzim"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Azraf Al Monzim
                        </h3>
                        <p className="text-sm text-primary">IT Wing Head</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://monzim.com"
                          >
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Portfolio</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:hello@monzim.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/monzim/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/Azraf.Monzim"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/monzim"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Anas.JPG"
                          alt="Abu Anas"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Abu Anas
                        </h3>
                        <p className="text-sm text-primary">
                          Operations & Events Wing Head
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:aanas2330094@bsds.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/abu-anas-9a2272311/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/abu.anas.874057"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/A-Anas-17"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Jamee.JPG"
                          alt="Farhan Tariq Jamee"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Farhan Tariq Jamee
                        </h3>
                        <p className="text-sm text-primary">
                          Creative and Content Wing Head
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:farhanjamee2003@gmail.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/farhan-tariq-jamee-0285272a8"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/farhan.jamee.3"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/Farhan-Jamee"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Lameya.JPG"
                          alt="Lamyea Tasnim"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Lamyea Tasnim
                        </h3>
                        <p className="text-sm text-primary">PR & Media Head</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:lamyeatasnim2003@gmail.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/lamyea-tasnim-349412315/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/lamyea.tasnim"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Nafiz.JPG"
                          alt="Ahammad Nafiz"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Ahammad Nafiz
                        </h3>
                        <p className="text-sm text-primary">
                          Research & Development (R&D) Wing Head
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:anafiz2330006@bsds.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/ahammad-nafiz/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/6dotleft"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/ahammadnafiz"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary">
                  Co-Heads & Other Positions
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1741801227/Habibur_Rahman_image_2_k4muww.jpg"
                          alt="Habibur Rahman"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Habibur Rahman
                        </h3>
                        <p className="text-sm text-primary">
                          Co-Head of Web Development Team
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://habiburrahmanv2.vercel.app/"
                          >
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Portfolio</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:habibur.web04@gmail.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/habiburrahman153/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/h.R4hM4n.8"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/habib-153"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Azmain.JPG"
                          alt="Azmain Islam"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Azmain Islam
                        </h3>
                        <p className="text-sm text-primary">
                          Co-Head Operations
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:azmainislam9@gmail.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/azmain-islam-aa3387278/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/azmainislam19"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/Az-main"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Fahim.JPG"
                          alt="Fahim Hasan"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Fahim Hasan
                        </h3>
                        <p className="text-sm text-primary">
                          Co-Head Event Management
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:mrfahimtalukder@gmail.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/talukder-fahim-hasan/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/fahim.hasan.75955"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/Talukder-Fahim"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/sunfi.png"
                          alt="Sazzad Sunfi"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Sazzad Sunfi
                        </h3>
                        <p className="text-sm text-primary">
                          Co-Head Photography
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:ksunfi2310002@bsds.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/sazzad-sunfi-3124a4325/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/sazzadsunfi/"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/sunfi-creator"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/mahin.png"
                          alt="HM Mahin"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          HM Mahin
                        </h3>
                        <p className="text-sm text-primary">
                          Co-Head Videography
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:hmmahin2588@gmail.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/hm-mahin-490630289/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/hmmahin2588"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1754575007/Siam.jpg"
                          alt="Redoan Arefin Siam"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Redoan Arefin Siam
                        </h3>
                        <p className="text-sm text-primary">
                          Co-Head Creative and Planning
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:siamredoan@gmail.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/siam-arefin-324b2027a"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/siam.arefin.180"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/tasfia.JPG"
                          alt="Tasfiya Binte Karim"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Tasfiya Binte Karim
                        </h3>
                        <p className="text-sm text-primary">
                          Co-Head Social Media Management
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:bintekarimtasfiya@gmail.com"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/tasfiya-binta-karim-450100290/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/tanaisha.binte"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/TasfiyaBintaKarim"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Mahera.JPG"
                          alt="Mahera Rezwan"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Mahera Rezwan
                        </h3>
                        <p className="text-sm text-primary">
                          Co-Head Communication
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:mrezwan2330080@bsds.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/mahera-rezwan-2360ab23b"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/mahera.rezwan.3"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://stg-dsc-prod.monzim.com/panel-25/Muntasir.JPG"
                          alt="Montasir Chowdhury"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Montasir Chowdhury
                        </h3>
                        <p className="text-sm text-primary">Research Co-Head</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/montasir-chowdhury-878309297/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/profile.php?id=61564115901577"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl bg-background/50 p-2 transition-all hover:bg-background/80">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <div className="max-h-96 aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1754557482/Rahi_Academics_gqvhqy.jpg"
                          alt="Atkia Mona Rahi"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="relative space-y-2 p-4">
                      <div className="space-y-1 text-center">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Atkia Mona Rahi
                        </h3>
                        <p className="text-sm text-primary">Academic Co-Head</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="p-4 flex justify-start space-x-4">
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="mailto:arahi2330011@bsds.uiu.ac.bd"
                          >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.linkedin.com/in/atkia-mona-rahi-76142029a/"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://www.facebook.com/atkiamona.rahi.9"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            className="text-muted-foreground hover:text-primary"
                            href="https://github.com/rahiatkiamona"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

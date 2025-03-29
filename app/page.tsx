"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Workflow,
  Layers,
  Globe,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const appImages: { [key: number]: string } = {
  1: "/gmail.png", // done
  2: "/sheets.png", // done
  3: "/drive.png", // done
  4: "/forms.png", // done
  5: "/photos.png", // done
  6: "/docs.png", // done
};

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect Your Apps, Automate Your Work
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Zapp connects your apps and automates workflows. Build
                    custom automations in minutes, not months.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-1 h-4 w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-1 h-4 w-4 text-primary" />
                    <span>Free plan available</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[350px] lg:h-[400px] xl:h-[500px]">
                  <Image
                    src="/hero_image.jpg"
                    alt="Zapp Dashboard"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Trusted by 10,000+ businesses
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Connect 1,000+ apps
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Zapp connects with all your favorite apps and services, making
                  automation easy and powerful.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm"
                >
                  <Image
                    src={appImages[i]}
                    alt={`Partner logo ${i}`}
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How Zapp Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Create powerful automations in just a few clicks. No coding
                  required.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">1. Choose a Trigger</h3>
                <p className="text-center text-muted-foreground">
                  Select the event that starts your automation from any of our
                  1,000+ app integrations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">2. Add Actions</h3>
                <p className="text-center text-muted-foreground">
                  Define what happens when your trigger fires. Add multiple
                  actions across different apps.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">3. Let Zapp Work</h3>
                <p className="text-center text-muted-foreground">
                  Turn on your Zapp and watch it run automatically whenever your
                  trigger conditions are met.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Features that power your workflow
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Zapp provides powerful features to help you automate your
                    work and save time.
                  </p>
                </div>
                <div className="mt-8 grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Multi-step Zaps</h3>
                      <p className="text-sm text-muted-foreground">
                        Create complex workflows with multiple actions across
                        different apps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Conditional Logic</h3>
                      <p className="text-sm text-muted-foreground">
                        Add conditions to your Zaps to control when actions run.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Custom Formatting</h3>
                      <p className="text-sm text-muted-foreground">
                        Format data exactly how you need it before sending to
                        other apps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src="/features.png"
                    alt="Zapp Features"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Pricing Plans
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for you and start automating
                  today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-10 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">
                    For individuals just getting started with automation.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>5 Zaps</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>100 Tasks/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Single-step Zaps</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Standard Support</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="outline">
                  Get Started
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">
                    For professionals who need more power and flexibility.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$19.99</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>20 Zaps</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>1,000 Tasks/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Multi-step Zaps</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Premium Support</span>
                  </li>
                </ul>
                <Button className="mt-8">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Team</h3>
                  <p className="text-muted-foreground">
                    For teams that need to collaborate on automations.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$49.99</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited Zaps</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>50,000 Tasks/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="outline">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to automate your work?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join thousands of businesses saving time with Zapp.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 flex justify-center items-center">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <p className="text-lg font-bold">Zapp</p>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Zapp. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

// import { useSession } from "next-auth/react";
// import { MoonLoader } from "react-spinners";

// export default function App() {
//   const { data: session } = useSession();
//   return (
//     <>
//       {session ? (
//         <div>
//           <h1>Session present: {session.user?.name}</h1>
//           <p>Session token: {(session as any).accessToken}</p>
//         </div>
//       ) : (
//         <div className="flex h-screen items-center justify-center">
//           <MoonLoader color="black" size={34} />
//         </div>
//       )}
//     </>
//   );
// }

import { useState } from "react";
import {
  Search,
  HelpCircle,
  Grid,
  X,
  Plus,
  Home,
  Globe,
  Zap,
  Database,
  Layout,
  MessageSquare,
  FileLineChartIcon as FlowChart,
  Bot,
  Package,
  Clock,
  MoreHorizontal,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function ZapierDashboard() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[190px] border-r border-gray-200 flex flex-col">
          <div className="p-2">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create
            </Button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-1 px-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Home className="w-4 h-4 text-gray-500" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span>Discover</span>
                </a>
              </li>
              <li className="border-t border-gray-200 my-2 pt-2"></li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Zap className="w-4 h-4 text-gray-500" />
                  <span>Zaps</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Database className="w-4 h-4 text-gray-500" />
                  <span>Tables</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Layout className="w-4 h-4 text-gray-500" />
                  <span>Interfaces</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <MessageSquare className="w-4 h-4 text-gray-500" />
                  <span>Chatbots</span>
                  <Badge
                    variant="outline"
                    className="ml-auto text-xs bg-gray-100 border-gray-200 text-gray-600 font-normal"
                  >
                    Beta
                  </Badge>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <FlowChart className="w-4 h-4 text-gray-500" />
                  <span>Canvas</span>
                  <Badge
                    variant="outline"
                    className="ml-auto text-xs bg-gray-100 border-gray-200 text-gray-600 font-normal"
                  >
                    Beta
                  </Badge>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Bot className="w-4 h-4 text-gray-500" />
                  <span>Agents</span>
                  <Badge
                    variant="outline"
                    className="ml-auto text-xs bg-gray-100 border-gray-200 text-gray-600 font-normal"
                  >
                    Beta
                  </Badge>
                </a>
              </li>
              <li className="border-t border-gray-200 my-2 pt-2"></li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Package className="w-4 h-4 text-gray-500" />
                  <span>Apps</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>Zap History</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <MoreHorizontal className="w-4 h-4 text-gray-500" />
                  <span>More</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="border-t border-gray-200 p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                <Package className="w-3 h-3 text-gray-600" />
              </div>
              <span className="text-sm font-medium">Free Plan</span>
            </div>
            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex justify-between">
                <span>Tasks</span>
                <span>0 / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Zaps</span>
                <span>Unlimited</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Usage resets in 3 weeks
              </div>
              <a
                href="#"
                className="text-blue-600 hover:underline text-xs block mt-1"
              >
                Manage plan
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          <div className="max-w-6xl mx-auto p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                What would you like to automate?
                <Badge className="ml-2 bg-gray-100 text-gray-700 font-normal">
                  AI beta
                </Badge>
              </h1>
              <div className="relative">
                <div className="absolute left-3 top-3 text-orange-500">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3L14.5 8.5L21 9.5L16.5 14L17.5 20.5L12 17.5L6.5 20.5L7.5 14L3 9.5L9.5 8.5L12 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <Input
                  className="pl-10 pr-10 py-3 border-gray-300 rounded-md text-gray-600"
                  placeholder="Example: When I add a reaction to a Slack message, create a card in Trello."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Start from scratch
              </h2>
              <div className="grid grid-cols-5 gap-4">
                {[
                  {
                    icon: <Zap className="w-5 h-5 text-white" />,
                    title: "Zap",
                    description: "Automated workflows",
                    bgColor: "bg-orange-500",
                  },
                  {
                    icon: <Database className="w-5 h-5 text-white" />,
                    title: "Table",
                    description: "Automated data",
                    bgColor: "bg-orange-500",
                  },
                  {
                    icon: <Layout className="w-5 h-5 text-white" />,
                    title: "Interface",
                    description: "Apps, forms, and pages",
                    bgColor: "bg-orange-500",
                  },
                  {
                    icon: <MessageSquare className="w-5 h-5 text-white" />,
                    title: "Chatbot",
                    description: "AI-powered chatbot",
                    bgColor: "bg-orange-500",
                  },
                  {
                    icon: <FlowChart className="w-5 h-5 text-white" />,
                    title: "Canvas",
                    description: "Process visualization",
                    bgColor: "bg-orange-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-md bg-white p-4 hover:shadow-sm transition-shadow"
                  >
                    <div
                      className={`w-8 h-8 ${item.bgColor} rounded-md flex items-center justify-center mb-2`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1 bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="w-full max-w-[200px]">
                    <div className="border border-gray-300 rounded mb-2 p-2 flex items-center justify-center bg-amber-50">
                      <div className="w-6 h-6 rounded bg-amber-500 flex items-center justify-center text-white">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="border border-gray-300 rounded mb-2 p-2 flex items-center justify-center bg-red-50">
                      <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center text-white">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="border border-gray-300 rounded p-2 flex items-center justify-center bg-purple-50">
                      <div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center text-white">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Get started with Zapier{" "}
                  <span className="text-gray-500 font-normal">8 min</span>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  We'll help you adopt an automation mindset and guide you
                  through the necessary steps to get things up and running.
                </p>
                <Button variant="outline" className="text-sm">
                  Get started
                </Button>
              </div>

              <div className="col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Popular templates
                  </h2>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Browse all templates
                  </a>
                </div>

                <Tabs defaultValue="popular" className="mb-6">
                  <TabsList className="bg-transparent border-b border-gray-200 p-0 gap-4">
                    <TabsTrigger
                      value="popular"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:shadow-none rounded-none bg-transparent px-0 py-2 text-gray-600 data-[state=active]:text-gray-900"
                    >
                      <Star className="w-4 h-4 mr-1" />
                      Most popular
                    </TabsTrigger>
                    <TabsTrigger
                      value="trending"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:shadow-none rounded-none bg-transparent px-0 py-2 text-gray-600 data-[state=active]:text-gray-900"
                    >
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending this week
                    </TabsTrigger>
                    <TabsTrigger
                      value="role"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:shadow-none rounded-none bg-transparent px-0 py-2 text-gray-600 data-[state=active]:text-gray-900"
                    >
                      <Users className="w-4 h-4 mr-1" />
                      Top by role
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      title: "Send mails based on user's feedback",
                      icons: ["/forms.png", "/sheets.png", "/gmail.png"],
                      usage: "Used by 8k",
                    },
                    // {
                    //   title: "Save new Gmail attachments to Google Drive",
                    //   icons: [
                    //     "/placeholder.svg?height=24&width=24",
                    //     "/placeholder.svg?height=24&width=24",
                    //     "/placeholder.svg?height=24&width=24",
                    //   ],
                    //   usage: "Used by 6k",
                    // },
                    // {
                    //   title:
                    //     "Add new Facebook Lead Ads leads to rows on Google Sheets",
                    //   icons: [
                    //     "/placeholder.svg?height=24&width=24",
                    //     "/placeholder.svg?height=24&width=24",
                    //   ],
                    //   usage: "Used by 5k",
                    // },
                  ].map((template, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-md bg-white p-4 hover:shadow-sm transition-shadow"
                      onClick={() => console.log(index)}
                    >
                      <div className="flex gap-1 mb-3">
                        {template.icons.map((icon, i) => (
                          <img
                            key={i}
                            src={icon || "/placeholder.svg"}
                            alt="App icon"
                            className="w-6 h-6 mx-1"
                          />
                        ))}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-6 text-sm">
                        {template.title}
                      </h3>
                      <div className="text-xs text-gray-500 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                            fill="currentColor"
                          />
                        </svg>
                        {template.usage}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-4">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="border-t border-gray-200 py-3 px-6 text-sm text-gray-500 flex justify-between">
        <div>© 2025 Zapier Inc.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Legal
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}

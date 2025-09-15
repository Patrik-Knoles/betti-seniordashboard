"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import {
  ArrowLeft,
  Utensils,
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle,
  Filter,
  Menu,
  X,
  User,
  Settings,
  Droplets,
  Pill,
  MapPin,
  CalendarIcon,
} from "lucide-react";


export default function HydrationPage() {
  const [dateFilter, setDateFilter] = useState("")
  const [timeFilter, setTimeFilter] = useState("all")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const hydrationLogs = [
    {
      id: 1,
      date: "2024-01-15",
      time: "08:00 AM",
      amount: "8 oz",
      type: "Water",
      source: "Manual Entry",
    },
    {
      id: 2,
      date: "2024-01-15",
      time: "10:30 AM",
      amount: "8 oz",
      type: "Water",
      source: "Smart Bottle",
    },
    {
      id: 3,
      date: "2024-01-15",
      time: "12:45 PM",
      amount: "12 oz",
      type: "Water with Lunch",
      source: "Manual Entry",
    },
    {
      id: 4,
      date: "2024-01-15",
      time: "03:15 PM",
      amount: "8 oz",
      type: "Water",
      source: "Smart Bottle",
    },
    {
      id: 5,
      date: "2024-01-15",
      time: "06:00 PM",
      amount: "10 oz",
      type: "Water with Dinner",
      source: "Manual Entry",
    },
    {
      id: 6,
      date: "2024-01-15",
      time: "08:30 PM",
      amount: "6 oz",
      type: "Herbal Tea",
      source: "Manual Entry",
    },
    {
      id: 7,
      date: "2024-01-14",
      time: "07:30 AM",
      amount: "8 oz",
      type: "Water",
      source: "Smart Bottle",
    },
    {
      id: 8,
      date: "2024-01-14",
      time: "11:00 AM",
      amount: "8 oz",
      type: "Water",
      source: "Smart Bottle",
    },
  ]

  const performanceMetrics = {
    dailyGoal: 64, // 8 glasses * 8 oz
    currentIntake: 52, // oz
    averageDaily: 58,
    status: "Good",
  }

  const filteredLogs = hydrationLogs.filter((log) => {
    if (dateFilter && !log.date.includes(dateFilter)) return false
    if (timeFilter !== "all") {
      const hour = Number.parseInt(log.time.split(":")[0])
      if (timeFilter === "morning" && (hour < 6 || hour >= 12)) return false
      if (timeFilter === "afternoon" && (hour < 12 || hour >= 18)) return false
      if (timeFilter === "evening" && (hour < 18 || hour >= 24)) return false
    }
    return true
  })

  const progressPercentage = Math.round((performanceMetrics.currentIntake / performanceMetrics.dailyGoal) * 100)

  const getEncouragementMessage = () => {
    if (progressPercentage >= 100) {
      return "Fantastic hydration today! You've reached your daily goal and your body is thanking you."
    } else if (progressPercentage >= 80) {
      return "Great job staying hydrated! You're almost at your daily goal - keep it up!"
    } else if (progressPercentage >= 60) {
      return "Good progress on your hydration! Remember, every sip counts towards better health."
    } else {
      return "Stay hydrated for better energy and health! Small, frequent sips make a big difference."
    }
  }

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-serif text-secondary-blue">
              Hydration Logs
            </h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2"
          >
            <Menu className="h-4 w-4" />
            Menu
          </Button>
        </div>

        {/* Side Menu Starts */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50"
            onClick={toggleMenu}
          >
            <div
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-secondary-blue">
                  Menu
                </h2>
                <Button onClick={toggleMenu} variant="ghost" size="sm">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <Link href="/profile" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <User className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Profile</div>
                      <div className="text-sm text-alt-dark-gray">
                        Personal information
                      </div>
                    </div>
                  </Button>
                </Link>

                <Link href="/settings" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <Settings className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Settings</div>
                      <div className="text-sm text-alt-dark-gray">
                        App preferences
                      </div>
                    </div>
                  </Button>
                </Link>

                <hr className="my-4 border-alt-light-gray" />

                <div className="text-sm font-medium text-alt-dark-gray mb-2">
                  Activity Logs
                </div>

                <Link href="/logs/restroom" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <MapPin className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Restroom Activity</div>
                      <div className="text-sm text-alt-dark-gray">
                        View bathroom visits
                      </div>
                    </div>
                  </Button>
                </Link>

                <Link href="/logs/appointments" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <Calendar className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Appointments</div>
                      <div className="text-sm text-alt-dark-gray">
                        Medical appointments log
                      </div>
                    </div>
                  </Button>
                </Link>

                <Link href="/logs/meals" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <Utensils className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Meals</div>
                      <div className="text-sm text-alt-dark-gray">
                        Food intake tracking
                      </div>
                    </div>
                  </Button>
                </Link>

                <Link href="/logs/medications" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <Pill className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Medications</div>
                      <div className="text-sm text-alt-dark-gray">
                        Medication history
                      </div>
                    </div>
                  </Button>
                </Link>

                <Link href="/logs/hydration" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent border-primary-green"
                  >
                    <Droplets className="mr-3 h-5 w-5 text-primary-green" />
                    <div>
                      <div className="font-medium text-primary-green">
                        Hydration
                      </div>
                      <div className="text-sm text-alt-dark-gray">
                        Water intake logs
                      </div>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* Side Menu Ends */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="text-2xl font-bold" style={{ color: "#5C7F39" }}>
                {performanceMetrics.currentIntake} oz
              </div>
              <div className="text-sm text-gray-600">Today's Intake</div>
              <Progress
                value={progressPercentage}
                className="mt-2 [&>div]:bg-primary-green"
              />
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="text-2xl font-bold" style={{ color: "#5C7F39" }}>
                {performanceMetrics.dailyGoal} oz
              </div>
              <div className="text-sm text-gray-600">Daily Goal</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="text-2xl font-bold" style={{ color: "#5C7F39" }}>
                {performanceMetrics.averageDaily} oz
              </div>
              <div className="text-sm text-gray-600">7-Day Average</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" style={{ color: "#5C7F39" }} />
                <Badge style={{ backgroundColor: "#5C7F39", color: "#ffffff" }}>
                  {performanceMetrics.status}
                </Badge>
              </div>
              <div className="text-sm text-gray-600">Performance Status</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle
              className="flex items-center gap-2"
              style={{ color: "#5C7F39" }}
            >
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">
                  Filter by Date
                </label>
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">
                  Filter by Time of Day
                </label>
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Day</SelectItem>
                    <SelectItem value="morning">
                      Morning (6 AM - 12 PM)
                    </SelectItem>
                    <SelectItem value="afternoon">
                      Afternoon (12 PM - 6 PM)
                    </SelectItem>
                    <SelectItem value="evening">
                      Evening (6 PM - 12 AM)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle
              className="flex items-center gap-2"
              style={{ color: "#5C7F39" }}
            >
              <Droplets className="h-5 w-5" />
              Hydration History ({filteredLogs.length} entries)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium">{log.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{log.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{log.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-lg font-bold"
                      style={{ color: "#5C7F39" }}
                    >
                      {log.amount}
                    </span>
                    <Badge
                      style={{
                        backgroundColor:
                          log.source === "Smart Bottle" ? "#5C7F39" : "#233E7D",
                        color: "#ffffff",
                      }}
                    >
                      {log.source}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <footer
          className="mt-8 p-6 rounded-lg text-center"
          style={{ backgroundColor: "#233E7D", color: "#ffffff" }}
        >
          <p className="text-lg font-serif">{getEncouragementMessage()}</p>
        </footer>
      </div>
    </div>
  );
}

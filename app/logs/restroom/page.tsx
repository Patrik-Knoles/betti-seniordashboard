"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  TrendingUp,
  Filter,
  Menu,
  X,
  User,
  Settings,
  Droplets,
  Pill,
  Utensils,
  CalendarIcon,
} from "lucide-react"

export default function RestroomActivityPage() {
  const [dateFilter, setDateFilter] = useState("")
  const [timeFilter, setTimeFilter] = useState("all")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const restroomLogs = [
    { id: 1, date: "2024-01-15", time: "08:30 AM", duration: "3 min", location: "Main Bathroom", frequency: "Normal" },
    { id: 2, date: "2024-01-15", time: "11:45 AM", duration: "2 min", location: "Main Bathroom", frequency: "Normal" },
    { id: 3, date: "2024-01-15", time: "02:15 PM", duration: "4 min", location: "Main Bathroom", frequency: "Normal" },
    { id: 4, date: "2024-01-15", time: "05:30 PM", duration: "3 min", location: "Main Bathroom", frequency: "Normal" },
    { id: 5, date: "2024-01-14", time: "09:00 AM", duration: "5 min", location: "Main Bathroom", frequency: "Longer" },
    { id: 6, date: "2024-01-14", time: "01:20 PM", duration: "2 min", location: "Main Bathroom", frequency: "Normal" },
    { id: 7, date: "2024-01-14", time: "06:45 PM", duration: "3 min", location: "Main Bathroom", frequency: "Normal" },
    { id: 8, date: "2024-01-13", time: "07:15 AM", duration: "4 min", location: "Main Bathroom", frequency: "Normal" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const performanceMetrics = {
    averageDaily: 4.2,
    averageDuration: "3.1 min",
    status: "Good",
    trend: "Stable",
  }

  const filteredLogs = restroomLogs.filter((log) => {
    if (dateFilter && !log.date.includes(dateFilter)) return false
    if (timeFilter !== "all") {
      const hour = Number.parseInt(log.time.split(":")[0])
      if (timeFilter === "morning" && (hour < 6 || hour >= 12)) return false
      if (timeFilter === "afternoon" && (hour < 12 || hour >= 18)) return false
      if (timeFilter === "evening" && (hour < 18 || hour >= 24)) return false
    }
    return true
  })

  const getEncouragementMessage = () => {
    const avgDaily = performanceMetrics.averageDaily
    if (avgDaily >= 4 && avgDaily <= 6) {
      return "Great job maintaining healthy restroom habits! Your regularity shows excellent digestive health."
    } else if (avgDaily < 4) {
      return "Consider staying hydrated and eating fiber-rich foods to support healthy digestion."
    } else {
      return "Your activity levels look good. Keep monitoring for any changes in your routine."
    }
  }

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-serif text-secondary-blue">
              Restroom Activity Logs
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
                    className="w-full justify-start text-left p-4 h-auto bg-transparent border-primary-green"
                  >
                    <MapPin className="mr-3 h-5 w-5 text-primary-green" />
                    <div>
                      <div className="font-medium text-primary-green">
                        Restroom Activity
                      </div>
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
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <Droplets className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Hydration</div>
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
                {performanceMetrics.averageDaily}
              </div>
              <div className="text-sm text-gray-600">Average Daily Visits</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="text-2xl font-bold" style={{ color: "#5C7F39" }}>
                {performanceMetrics.averageDuration}
              </div>
              <div className="text-sm text-gray-600">Average Duration</div>
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
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="text-2xl font-bold" style={{ color: "#5C7F39" }}>
                {performanceMetrics.trend}
              </div>
              <div className="text-sm text-gray-600">Trend</div>
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
              <MapPin className="h-5 w-5" />
              Activity History ({filteredLogs.length} entries)
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
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{log.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">
                      Duration: {log.duration}
                    </span>
                    <Badge
                      style={{
                        backgroundColor:
                          log.frequency === "Normal" ? "#5C7F39" : "#233E7D",
                        color: "#ffffff",
                      }}
                    >
                      {log.frequency}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg" style={{ backgroundColor: "#233E7D" }}>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5" style={{ color: "#ffffff" }} />
              <h3 className="text-lg font-serif" style={{ color: "#ffffff" }}>
                Daily Encouragement
              </h3>
            </div>
            <p style={{ color: "#ffffff" }} className="leading-relaxed">
              {getEncouragementMessage()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

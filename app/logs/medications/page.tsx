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

export default function MedicationsPage() {
  const [dateFilter, setDateFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const medicationLogs = [
    {
      id: 1,
      date: "2024-01-15",
      time: "08:00 AM",
      medication: "Lisinopril 10mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Blood Pressure",
      sideEffects: "None",
    },
    {
      id: 2,
      date: "2024-01-15",
      time: "02:00 PM",
      medication: "Metformin 500mg",
      dosage: "1 tablet",
      status: "Missed",
      condition: "Diabetes",
      sideEffects: "None",
    },
    {
      id: 3,
      date: "2024-01-15",
      time: "08:00 PM",
      medication: "Atorvastatin 20mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Cholesterol",
      sideEffects: "None",
    },
    {
      id: 4,
      date: "2024-01-14",
      time: "08:00 AM",
      medication: "Lisinopril 10mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Blood Pressure",
      sideEffects: "None",
    },
    {
      id: 5,
      date: "2024-01-14",
      time: "02:00 PM",
      medication: "Metformin 500mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Diabetes",
      sideEffects: "Mild nausea",
    },
    {
      id: 6,
      date: "2024-01-14",
      time: "08:00 PM",
      medication: "Atorvastatin 20mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Cholesterol",
      sideEffects: "None",
    },
  ]

  const healthMetrics = {
    adherenceRate: 88,
    improvementScore: 92,
    status: "Excellent",
    trend: "Improving",
  }

  const filteredMedications = medicationLogs.filter((med) => {
    if (dateFilter && !med.date.includes(dateFilter)) return false
    if (statusFilter !== "all" && med.status.toLowerCase() !== statusFilter) return false
    return true
  })

  const getEncouragementMessage = () => {
    if (healthMetrics.adherenceRate >= 90) {
      return "Outstanding medication adherence! Your commitment to your health is truly inspiring."
    } else if (healthMetrics.adherenceRate >= 80) {
      return "Great job staying on track with your medications! Keep up the excellent work."
    } else if (healthMetrics.adherenceRate >= 70) {
      return "You're doing well with your medication routine. Small improvements can make a big difference!"
    } else {
      return "Every step towards better medication adherence is progress. You've got this!"
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
              Medication History
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
                    className="w-full justify-start text-left p-4 h-auto bg-transparent border-primary-green"
                  >
                    <Pill className="mr-3 h-5 w-5 text-primary-green" />
                    <div>
                      <div className="font-medium text-primary-green">
                        Medications
                      </div>
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
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#5C7F39" }}
                >
                  {healthMetrics.adherenceRate}%
                </div>
              </div>
              <div className="text-sm text-gray-600">Adherence Rate</div>
              <Progress
                value={healthMetrics.adherenceRate}
                className="mt-2 [&>div]:bg-primary-green"
              />
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#5C7F39" }}
                >
                  {healthMetrics.improvementScore}%
                </div>
              </div>
              <div className="text-sm text-gray-600">Health Improvement</div>
              <Progress
                value={healthMetrics.improvementScore}
                className="mt-2 [&>div]:bg-primary-green"
              />
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" style={{ color: "#5C7F39" }} />
                <Badge style={{ backgroundColor: "#5C7F39", color: "#ffffff" }}>
                  {healthMetrics.status}
                </Badge>
              </div>
              <div className="text-sm text-gray-600">Overall Status</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="text-2xl font-bold" style={{ color: "#5C7F39" }}>
                {healthMetrics.trend}
              </div>
              <div className="text-sm text-gray-600">Health Trend</div>
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
                  Filter by Status
                </label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="taken">Taken</SelectItem>
                    <SelectItem value="missed">Missed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {filteredMedications.map((med) => (
            <Card key={med.id} className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle
                    className="flex items-center gap-2"
                    style={{ color: "#5C7F39" }}
                  >
                    <Pill className="h-5 w-5" />
                    {med.medication}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    {med.status === "Taken" ? (
                      <CheckCircle
                        className="h-5 w-5"
                        style={{ color: "#5C7F39" }}
                      />
                    ) : (
                      <X className="h-5 w-5 text-red-500" />
                    )}
                    <Badge
                      style={{
                        backgroundColor:
                          med.status === "Taken" ? "#5C7F39" : "#dc2626",
                        color: "#ffffff",
                      }}
                    >
                      {med.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium">{med.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{med.time}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Dosage: </span>
                      <span>{med.dosage}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Condition: </span>
                      <span style={{ color: "#5C7F39" }}>{med.condition}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Side Effects:
                    </div>
                    <div className="text-sm text-gray-600">
                      {med.sideEffects === "None" ? (
                        <span className="text-green-600">
                          No side effects reported
                        </span>
                      ) : (
                        <span className="text-orange-600">
                          {med.sideEffects}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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

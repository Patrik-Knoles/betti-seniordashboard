"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  Droplets,
  Pill,
  Activity,
  Shield,
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  Bed,
  Footprints,
  Utensils,
  Calendar,
  Lock,
  Home,
  AlertTriangle,
  Menu,
  X,
  User,
  Settings,
} from "lucide-react"

export default function SeniorDashboard() {
  const [wellBeingScore] = useState(85)
  const [lastOkTime, setLastOkTime] = useState("2 hours ago")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [latestAlert, setLatestAlert] = useState<string | null>(null)
  const [okButtonText, setOkButtonText] = useState("I'm OK")
  const [showAlertSnapshot, setShowAlertSnapshot] = useState(false)
  const [emergencyStatus, setEmergencyStatus] = useState("")

  useEffect(() => {
    const hasShownAlert = sessionStorage.getItem("alertShown")

    if (!hasShownAlert) {
      const alerts = [
        "Medication reminder: Take your afternoon pills",
        "Hydration reminder: You haven't had water in 3 hours",
        "Restroom reminder: It's been 4 hours since your last visit",
        "Shower reminder: Daily shower scheduled for 2 PM",
      ]

      const randomAlert = alerts[Math.floor(Math.random() * alerts.length)]
      setLatestAlert(randomAlert)
      sessionStorage.setItem("alertShown", "true")

      const timer = setTimeout(() => {
        setLatestAlert(null)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleOkButton = () => {
    setOkButtonText("Thank you! Status recorded.")
    setLastOkTime("Just now")
    setTimeout(() => {
      setOkButtonText("I'm OK")
    }, 3000)
  }

  const handlePanicButton = () => {
    setEmergencyStatus("Calling 911...")
    setTimeout(() => {
      setEmergencyStatus("Emergency services contacted. Help is on the way.")
    }, 2000)
    setTimeout(() => {
      setEmergencyStatus("")
    }, 8000)
  }

  const handleViewAlerts = () => {
    setShowAlertSnapshot(true)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const dismissAlert = () => {
    setLatestAlert(null)
  }

  const alertsSnapshot = [
    { id: 1, message: "Medication reminder: Take your afternoon pills", time: "2:00 PM", priority: "high" },
    { id: 2, message: "Hydration reminder: You haven't had water in 3 hours", time: "1:30 PM", priority: "medium" },
    {
      id: 3,
      message: "Restroom reminder: It's been 4 hours since your last visit",
      time: "12:45 PM",
      priority: "medium",
    },
    { id: 4, message: "Shower reminder: Daily shower scheduled for 2 PM", time: "11:00 AM", priority: "low" },
    { id: 5, message: "Appointment reminder: Dr. Smith tomorrow at 2:00 PM", time: "10:30 AM", priority: "high" },
  ]

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {latestAlert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl">
              <Image
                src="/images/betti-logo.png"
                alt="Betti Logo"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-serif text-secondary-blue mb-2">
                Hello, Margaret!
              </h2>
              <div className="border border-alt-light-gray rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <AlertTriangle className="h-6 w-6 text-primary-green" />
                  <div className="font-medium text-primary-green">
                    Latest Alert
                  </div>
                </div>
                <div className="text-alt-dark-gray">{latestAlert}</div>
              </div>
              <Button
                onClick={dismissAlert}
                className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-2"
              >
                Got it!
              </Button>
            </div>
          </div>
        )}

        {showAlertSnapshot && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif text-secondary-blue">
                  Recent Alerts
                </h2>
                <Button
                  onClick={() => setShowAlertSnapshot(false)}
                  variant="ghost"
                  size="sm"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-3 mb-6">
                {alertsSnapshot.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between p-3 bg-alt-light-gray rounded"
                  >
                    <div className="flex-1">
                      <div className="text-sm text-alt-dark-gray">
                        {alert.message}
                      </div>
                      <div className="text-xs text-alt-dark-gray mt-1">
                        {alert.time}
                      </div>
                    </div>
                    <Badge
                      className={
                        alert.priority === "high"
                          ? "bg-red-500 text-white"
                          : alert.priority === "medium"
                          ? "bg-primary-green text-white"
                          : "bg-secondary-blue text-white"
                      }
                    >
                      {alert.priority}
                    </Badge>
                  </div>
                ))}
              </div>
              <Link href="/alerts">
                <Button className="w-full bg-secondary-blue hover:bg-secondary-blue/90 text-white">
                  View All Alerts
                </Button>
              </Link>
            </div>
          </div>
        )}

        {emergencyStatus && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl">
              <Image
                src="/images/betti-logo.png"
                alt="Betti Logo"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <div className="bg-red-100 border border-red-400 rounded-lg p-6">
                <Phone className="h-12 w-12 mx-auto mb-4 text-red-600" />
                <div className="text-red-700 font-medium text-lg">
                  {emergencyStatus}
                </div>
              </div>
            </div>
          </div>
        )}

{/* Navbar Starts */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/betti-logo.png"
              alt="Betti Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-3xl font-serif text-secondary-blue">
                Betti Dashboard
              </h1>
              <p className="text-lg text-alt-dark-gray">
                Welcome Back, Margaret
              </p>
            </div>
          </div>

          <Button
            onClick={toggleMenu}
            variant="outline"
            size="lg"
            className="border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white bg-transparent"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
{/* Navbar Ends */}

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Heart className="h-6 w-6 text-primary-green" />
                Daily Well-being Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="text-6xl font-bold text-primary-green">
                  {wellBeingScore}
                </div>
                <div className="text-right">
                  <div className="text-sm text-alt-dark-gray">Out of 100</div>
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: "#5C7F39",
                      color: "#ffffff",
                    }}
                  >
                    Excellent
                  </span>
                </div>
              </div>
              <Progress
                value={wellBeingScore}
                className="mb-4 [&>div]:bg-primary-green"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <Droplets className="h-5 w-5 mx-auto mb-1 text-primary-green" />
                  <div className="font-medium text-alt-dark-gray">
                    Hydration
                  </div>
                  <div className="text-alt-dark-gray">Good</div>
                </div>
                <div className="text-center">
                  <Bed className="h-5 w-5 mx-auto mb-1 text-primary-green" />
                  <div className="font-medium text-alt-dark-gray">Sleep</div>
                  <div className="text-alt-dark-gray">7.5 hrs</div>
                </div>
                <div className="text-center">
                  <Pill className="h-5 w-5 mx-auto mb-1 text-primary-green" />
                  <div className="font-medium text-alt-dark-gray">
                    Medications
                  </div>
                  <div className="text-alt-dark-gray">On track</div>
                </div>
                <div className="text-center">
                  <Footprints className="h-5 w-5 mx-auto mb-1 text-primary-green" />
                  <div className="font-medium text-alt-dark-gray">Movement</div>
                  <div className="text-alt-dark-gray">Active</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-primary-green font-serif">
                  Quick Check-in
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handleOkButton}
                  className="w-full bg-primary-green hover:bg-primary-green/90 text-white text-lg py-6"
                >
                  <CheckCircle className="mr-2 h-6 w-6" />
                  {okButtonText}
                </Button>
                <div className="text-sm text-alt-dark-gray text-center">
                  Last check-in: {lastOkTime}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-primary-green font-serif">
                  Emergency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handlePanicButton}
                  variant="destructive"
                  className="w-full text-lg py-6"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Panic Button
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-primary-green font-serif">
                  Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleViewAlerts}
                  className="w-full bg-secondary-blue hover:bg-secondary-blue/90 text-white"
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  View Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Droplets className="h-5 w-5 text-primary-green" />
                Hydration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary-green mb-2">
                6/8
              </div>
              <div className="text-sm text-alt-dark-gray mb-3">
                Glasses today
              </div>
              <Progress value={75} className="mb-2 [&>div]:bg-primary-green" />
              <div className="text-xs text-alt-dark-gray">
                Goal: 8 glasses daily
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Pill className="h-5 w-5 text-primary-green" />
                Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary-green mb-2">
                3/4
              </div>
              <div className="text-sm text-alt-dark-gray mb-3">Taken today</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-alt-dark-gray">Morning pills</span>
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                </div>
                <div className="flex justify-between">
                  <span className="text-alt-dark-gray">Afternoon pills</span>
                  <Clock className="h-4 w-4 text-gradient-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Utensils className="h-5 w-5 text-primary-green" />
                Meals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary-green mb-2">
                2/3
              </div>
              <div className="text-sm text-alt-dark-gray mb-3">Meals today</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-alt-dark-gray">Breakfast</span>
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                </div>
                <div className="flex justify-between">
                  <span className="text-alt-dark-gray">Lunch</span>
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                </div>
                <div className="flex justify-between">
                  <span className="text-alt-dark-gray">Dinner</span>
                  <Clock className="h-4 w-4 text-gradient-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Activity className="h-5 w-5 text-primary-green" />
                Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary-green mb-2">
                2,847
              </div>
              <div className="text-sm text-alt-dark-gray mb-3">Steps today</div>
              <Progress value={57} className="mb-2 [&>div]:bg-primary-green" />
              <div className="text-xs text-alt-dark-gray">
                Goal: 5,000 steps daily
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Calendar className="h-5 w-5 text-primary-green" />
                Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-alt-light-gray rounded">
                  <div>
                    <div className="font-medium text-sm text-alt-dark-gray">
                      Dr. Smith
                    </div>
                    <div className="text-xs text-alt-dark-gray">
                      Tomorrow 2:00 PM
                    </div>
                  </div>
                  <Badge className="bg-primary-green text-white text-xs">
                    Confirmed
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-alt-light-gray rounded">
                  <div>
                    <div className="font-medium text-sm text-alt-dark-gray">
                      Physical Therapy
                    </div>
                    <div className="text-xs text-alt-dark-gray">
                      Friday 10:00 AM
                    </div>
                  </div>
                  <Badge className="bg-secondary-blue text-white text-xs">
                    Scheduled
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Home className="h-5 w-5 text-primary-green" />
                Smart Home
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-primary-green" />
                    <span className="text-sm text-alt-dark-gray">
                      Front Door
                    </span>
                  </div>
                  <Badge className="bg-primary-green text-white">Locked</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-primary-green" />
                    <span className="text-sm text-alt-dark-gray">
                      Back Door
                    </span>
                  </div>
                  <Badge className="bg-primary-green text-white">Locked</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-primary-green" />
                    <span className="text-sm text-alt-dark-gray">
                      Security System
                    </span>
                  </div>
                  <Badge className="bg-primary-green text-white">Armed</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <MapPin className="h-5 w-5 text-primary-green" />
                Restroom Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary-green mb-2">
                4
              </div>
              <div className="text-sm text-alt-dark-gray mb-4">
                Visits today
              </div>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-alt-dark-gray">Last visit:</span>
                  <span className="text-alt-dark-gray">1 hour ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-alt-dark-gray">Average frequency:</span>
                  <span className="text-alt-dark-gray">Normal</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Shield className="h-5 w-5 text-primary-green" />
                Safety Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-alt-dark-gray">Fall Detection</span>
                  <Badge className="bg-primary-green text-white">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-alt-dark-gray">Emergency Contacts</span>
                  <Badge className="bg-primary-green text-white">
                    3 Available
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-alt-dark-gray">Voice Assistant</span>
                  <Badge className="bg-primary-green text-white">
                    Connected
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <MapPin className="h-5 w-5 text-primary-green" />
                Current Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary-green mb-2">
                Living Room
              </div>
              <div className="text-sm text-alt-dark-gray mb-4">
                Last updated: 5 minutes ago
              </div>
              <div className="text-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-alt-dark-gray">Time in room:</span>
                  <span className="text-alt-dark-gray">45 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-alt-dark-gray">Activity level:</span>
                  <span className="text-alt-dark-gray">Normal</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-secondary-blue text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-2">Daily Encouragement</h3>
              <p className="text-lg leading-relaxed">
                You're doing wonderfully today, Margaret! Your consistent health
                habits are paying off. Remember, every small step counts toward
                your well-being. Your family is proud of how well you're taking
                care of yourself.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

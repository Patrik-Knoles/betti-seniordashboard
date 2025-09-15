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
  Calendar,
  Clock,
  User,
  FileText,
  CheckCircle,
  Filter,
  Menu,
  X,
  Settings,
  MapPin,
  Utensils,
  Pill,
  Droplets,
} from "lucide-react"

export default function AppointmentsPage() {
  const [dateFilter, setDateFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [confirmedNotes, setConfirmedNotes] = useState<number[]>([])

  const appointments = [
    {
      id: 1,
      date: "2024-01-16",
      time: "02:00 PM",
      doctor: "Dr. Smith",
      type: "General Checkup",
      status: "Confirmed",
      notes: "Blood pressure check and routine examination. Patient is doing well.",
      noteConfirmed: false,
    },
    {
      id: 2,
      date: "2024-01-18",
      time: "10:00 AM",
      doctor: "Physical Therapist",
      type: "Physical Therapy",
      status: "Scheduled",
      notes: "",
      noteConfirmed: false,
    },
    {
      id: 3,
      date: "2024-01-10",
      time: "09:30 AM",
      doctor: "Dr. Johnson",
      type: "Cardiology",
      status: "Completed",
      notes: "Heart rate and rhythm normal. Continue current medication regimen. Next visit in 3 months.",
      noteConfirmed: true,
    },
    {
      id: 4,
      date: "2024-01-05",
      time: "11:15 AM",
      doctor: "Dr. Williams",
      type: "Dermatology",
      status: "Completed",
      notes: "Skin examination complete. Minor age spots noted, no concerns. Use sunscreen daily.",
      noteConfirmed: true,
    },
    {
      id: 5,
      date: "2023-12-28",
      time: "03:45 PM",
      doctor: "Dr. Brown",
      type: "Eye Exam",
      status: "Completed",
      notes: "Vision stable. Prescription unchanged. Schedule next exam in 12 months.",
      noteConfirmed: false,
    },
  ]

  const handleConfirmNote = (appointmentId: number) => {
    setConfirmedNotes((prev) => [...prev, appointmentId])
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const filteredAppointments = appointments.filter((appointment) => {
    if (dateFilter && !appointment.date.includes(dateFilter)) return false
    if (statusFilter !== "all" && appointment.status.toLowerCase() !== statusFilter) return false
    return true
  })

  const completedAppointments = appointments.filter((apt) => apt.status === "Completed").length
  const totalAppointments = appointments.length
  const completionRate = Math.round((completedAppointments / totalAppointments) * 100)

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50" onClick={toggleMenu}>
            <div
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-secondary-blue">Menu</h2>
                <Button onClick={toggleMenu} variant="ghost" size="sm">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <Link href="/profile" className="block">
                  <Button variant="outline" className="w-full justify-start text-left p-4 h-auto bg-transparent">
                    <User className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Profile</div>
                      <div className="text-sm text-alt-dark-gray">Personal information</div>
                    </div>
                  </Button>
                </Link>

                <Link href="/settings" className="block">
                  <Button variant="outline" className="w-full justify-start text-left p-4 h-auto bg-transparent">
                    <Settings className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Settings</div>
                      <div className="text-sm text-alt-dark-gray">App preferences</div>
                    </div>
                  </Button>
                </Link>

                <hr className="my-4 border-alt-light-gray" />

                <div className="text-sm font-medium text-alt-dark-gray mb-2">Activity Logs</div>

                <Link href="/logs/restroom" className="block">
                  <Button variant="outline" className="w-full justify-start text-left p-4 h-auto bg-transparent">
                    <MapPin className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Restroom Activity</div>
                      <div className="text-sm text-alt-dark-gray">View bathroom visits</div>
                    </div>
                  </Button>
                </Link>

                <Link href="/logs/appointments" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent border-primary-green"
                  >
                    <Calendar className="mr-3 h-5 w-5 text-primary-green" />
                    <div>
                      <div className="font-medium text-primary-green">Appointments</div>
                      <div className="text-sm text-alt-dark-gray">Medical appointments log</div>
                    </div>
                  </Button>
                </Link>

                <Link href="/logs/meals" className="block">
                  <Button variant="outline" className="w-full justify-start text-left p-4 h-auto bg-transparent">
                    <Utensils className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Meals</div>
                      <div className="text-sm text-alt-dark-gray">Food intake tracking</div>
                    </div>
                  </Button>
                </Link>

                <Link href="/logs/medications" className="block">
                  <Button variant="outline" className="w-full justify-start text-left p-4 h-auto bg-transparent">
                    <Pill className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Medications</div>
                      <div className="text-sm text-alt-dark-gray">Medication history</div>
                    </div>
                  </Button>
                </Link>

                <Link href="/logs/hydration" className="block">
                  <Button variant="outline" className="w-full justify-start text-left p-4 h-auto bg-transparent">
                    <Droplets className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Hydration</div>
                      <div className="text-sm text-alt-dark-gray">Water intake logs</div>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-serif text-secondary-blue">Medical Appointments</h1>
          </div>

          <Button
            onClick={toggleMenu}
            variant="outline"
            size="lg"
            className="border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white bg-transparent"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: "#5C7F39" }}>
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">Filter by Date</label>
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">Filter by Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {filteredAppointments.map((appointment) => (
            <Card key={appointment.id} className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2" style={{ color: "#5C7F39" }}>
                    <Calendar className="h-5 w-5" />
                    {appointment.type}
                  </CardTitle>
                  <Badge
                    style={{
                      backgroundColor:
                        appointment.status === "Completed"
                          ? "#5C7F39"
                          : appointment.status === "Confirmed"
                            ? "#233E7D"
                            : "#59595B",
                      color: "#ffffff",
                    }}
                  >
                    {appointment.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium">{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{appointment.doctor}</span>
                    </div>
                  </div>
                </div>

                {appointment.notes && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Doctor's Notes</span>
                      </div>
                      {(appointment.noteConfirmed || confirmedNotes.includes(appointment.id)) && (
                        <CheckCircle className="h-4 w-4" style={{ color: "#5C7F39" }} />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{appointment.notes}</p>
                    {!appointment.noteConfirmed &&
                      !confirmedNotes.includes(appointment.id) &&
                      appointment.status === "Completed" && (
                        <Button
                          onClick={() => handleConfirmNote(appointment.id)}
                          size="sm"
                          style={{ backgroundColor: "#5C7F39", color: "#ffffff" }}
                          className="hover:opacity-90"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Confirm Receipt of Note
                        </Button>
                      )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-secondary-blue text-white shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-2">Health Journey Progress</h3>
              <p className="text-lg leading-relaxed">
                {completionRate >= 80
                  ? "Excellent work staying on top of your medical appointments! Your commitment to regular check-ups is keeping you healthy and strong."
                  : completionRate >= 60
                    ? "You're doing well with your medical care! Keep up the good work attending your appointments and following your doctor's advice."
                    : "Remember, regular medical check-ups are important for your health. Don't hesitate to schedule appointments when needed - your health is worth it!"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

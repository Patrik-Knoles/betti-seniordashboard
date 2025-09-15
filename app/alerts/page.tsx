"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Droplets, Pill, Clock, Flower as Shower, Bell, CheckCircle, X } from "lucide-react"

export default function AlertsPage() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "medication",
      title: "Afternoon Medication",
      message: "Time for your 2:00 PM medication",
      time: "2:00 PM",
      priority: "high",
      dismissed: false,
    },
    {
      id: 2,
      type: "hydration",
      title: "Hydration Reminder",
      message: "You haven't had water in 2 hours. Time to hydrate!",
      time: "3:30 PM",
      priority: "medium",
      dismissed: false,
    },
    {
      id: 3,
      type: "restroom",
      title: "Restroom Check",
      message: "It's been 4 hours since your last restroom visit",
      time: "4:00 PM",
      priority: "medium",
      dismissed: false,
    },
    {
      id: 4,
      type: "shower",
      title: "Shower Reminder",
      message: "Don't forget your evening shower routine",
      time: "6:00 PM",
      priority: "low",
      dismissed: false,
    },
  ])

  const dismissAlert = (id: number) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, dismissed: true } : alert)))
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "medication":
        return <Pill className="h-5 w-5" />
      case "hydration":
        return <Droplets className="h-5 w-5" />
      case "restroom":
        return <Clock className="h-5 w-5" />
      case "shower":
        return <Shower className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-500 bg-red-50"
      case "medium":
        return "border-primary-green bg-primary-green/10"
      case "low":
        return "border-secondary-blue bg-secondary-blue/10"
      default:
        return "border-alt-light-gray bg-white"
    }
  }

  const activeAlerts = alerts.filter((alert) => !alert.dismissed)

  return (
    <div className="min-h-screen bg-alt-light-gray p-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <Image src="/images/betti-logo.png" alt="BEetti Logo" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-3xl font-serif text-secondary-blue">Alerts & Reminders</h1>
              <p className="text-alt-dark-gray">Manage your daily health reminders</p>
            </div>
          </div>
        </div>

        {/* Alert Summary */}
        <Card className="bg-white border-alt-light-gray">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-secondary-blue font-serif">
              <Bell className="h-6 w-6 text-primary-green" />
              Alert Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">
                  {alerts.filter((a) => a.priority === "high" && !a.dismissed).length}
                </div>
                <div className="text-sm text-alt-dark-gray">High Priority</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-green">
                  {alerts.filter((a) => a.priority === "medium" && !a.dismissed).length}
                </div>
                <div className="text-sm text-alt-dark-gray">Medium Priority</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-blue">
                  {alerts.filter((a) => a.priority === "low" && !a.dismissed).length}
                </div>
                <div className="text-sm text-alt-dark-gray">Low Priority</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-green">{alerts.filter((a) => a.dismissed).length}</div>
                <div className="text-sm text-alt-dark-gray">Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Alerts */}
        <Card className="bg-white border-alt-light-gray">
          <CardHeader>
            <CardTitle className="text-secondary-blue font-serif">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeAlerts.length === 0 ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-primary-green mx-auto mb-4" />
                  <p className="text-lg text-primary-green font-medium">All caught up!</p>
                  <p className="text-alt-dark-gray">No active alerts at this time.</p>
                </div>
              ) : (
                activeAlerts.map((alert) => (
                  <Alert key={alert.id} className={`${getPriorityColor(alert.priority)} border-2`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="text-secondary-blue mt-1">{getAlertIcon(alert.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-secondary-blue">{alert.title}</h4>
                            <Badge
                              className={`text-xs ${
                                alert.priority === "high"
                                  ? "bg-red-500 text-white"
                                  : alert.priority === "medium"
                                    ? "bg-primary-green text-white"
                                    : "bg-secondary-blue text-white"
                              }`}
                            >
                              {alert.priority}
                            </Badge>
                          </div>
                          <AlertDescription className="text-alt-dark-gray">{alert.message}</AlertDescription>
                          <div className="text-xs text-alt-dark-gray mt-2">Scheduled for: {alert.time}</div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => dismissAlert(alert.id)}
                        className="text-alt-dark-gray hover:text-primary-green"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </Alert>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Dismissed Alerts */}
        {alerts.filter((a) => a.dismissed).length > 0 && (
          <Card className="bg-white border-alt-light-gray">
            <CardHeader>
              <CardTitle className="text-secondary-blue font-serif">Completed Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts
                  .filter((a) => a.dismissed)
                  .map((alert) => (
                    <div key={alert.id} className="flex items-center gap-3 p-3 bg-primary-green/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary-green" />
                      <div className="flex-1">
                        <div className="font-medium text-secondary-blue">{alert.title}</div>
                        <div className="text-sm text-alt-dark-gray">{alert.message}</div>
                      </div>
                      <div className="text-xs text-alt-dark-gray">{alert.time}</div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

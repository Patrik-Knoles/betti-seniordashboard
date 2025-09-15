"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { Bell, Volume2, Eye, Shield, ArrowLeft, Save, RotateCcw } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Notification Preferences
    medicationReminders: true,
    hydrationReminders: true,
    appointmentReminders: true,
    restroomReminders: false,
    showerReminders: true,
    silentHoursEnabled: true,
    silentStart: "22:00",
    silentEnd: "07:00",

    // Voice & Interaction
    voiceType: "female",
    speechSpeed: [1.0],
    voiceVolume: [75],
    confirmationSounds: true,

    // Accessibility Features
    largeText: false,
    highContrast: false,
    buttonSize: "normal",
    screenReader: false,

    // Privacy & Sharing
    shareWithFamily: true,
    shareWithDoctor: true,
    dataRetention: "1year",
    locationTracking: true,
  })

  const handleSave = () => {
    console.log("Settings saved:", settings)
    // Here you would typically save to a database
  }

  const handleReset = () => {
    // Reset to default settings
    setSettings({
      medicationReminders: true,
      hydrationReminders: true,
      appointmentReminders: true,
      restroomReminders: false,
      showerReminders: true,
      silentHoursEnabled: true,
      silentStart: "22:00",
      silentEnd: "07:00",
      voiceType: "female",
      speechSpeed: [1.0],
      voiceVolume: [75],
      confirmationSounds: true,
      largeText: false,
      highContrast: false,
      buttonSize: "normal",
      screenReader: false,
      shareWithFamily: true,
      shareWithDoctor: true,
      dataRetention: "1year",
      locationTracking: true,
    })
  }

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <Image src="/images/betti-logo.png" alt="Betti Logo" width={50} height={50} className="rounded-full" />
            <div>
              <h1 className="text-3xl font-serif text-secondary-blue">App Settings</h1>
              <p className="text-lg text-alt-dark-gray">Customize your preferences</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSave} className="bg-primary-green hover:bg-primary-green/90 text-white">
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
            <Button onClick={handleReset} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Default
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="medication-reminders">Medication Reminders</Label>
                <Switch
                  id="medication-reminders"
                  checked={settings.medicationReminders}
                  onCheckedChange={(checked) => setSettings({ ...settings, medicationReminders: checked })}
                  style={{
                    backgroundColor: settings.medicationReminders ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="hydration-reminders">Hydration Reminders</Label>
                <Switch
                  id="hydration-reminders"
                  checked={settings.hydrationReminders}
                  onCheckedChange={(checked) => setSettings({ ...settings, hydrationReminders: checked })}
                  style={{
                    backgroundColor: settings.hydrationReminders ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="appointment-reminders">Appointment Reminders</Label>
                <Switch
                  id="appointment-reminders"
                  checked={settings.appointmentReminders}
                  onCheckedChange={(checked) => setSettings({ ...settings, appointmentReminders: checked })}
                  style={{
                    backgroundColor: settings.appointmentReminders ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="restroom-reminders">Restroom Reminders</Label>
                <Switch
                  id="restroom-reminders"
                  checked={settings.restroomReminders}
                  onCheckedChange={(checked) => setSettings({ ...settings, restroomReminders: checked })}
                  style={{
                    backgroundColor: settings.restroomReminders ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="shower-reminders">Shower Reminders</Label>
                <Switch
                  id="shower-reminders"
                  checked={settings.showerReminders}
                  onCheckedChange={(checked) => setSettings({ ...settings, showerReminders: checked })}
                  style={{
                    backgroundColor: settings.showerReminders ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="silent-hours">Silent Hours</Label>
                  <Switch
                    id="silent-hours"
                    checked={settings.silentHoursEnabled}
                    onCheckedChange={(checked) => setSettings({ ...settings, silentHoursEnabled: checked })}
                    style={{
                      backgroundColor: settings.silentHoursEnabled ? "#5C7F39" : "#e5e7eb",
                    }}
                  />
                </div>
                {settings.silentHoursEnabled && (
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-xs">Start Time</Label>
                      <Select
                        value={settings.silentStart}
                        onValueChange={(value) => setSettings({ ...settings, silentStart: value })}
                      >
                        <SelectTrigger className="h-8" style={{ borderColor: "#5C7F39" }}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent style={{ backgroundColor: "#5C7F39", color: "#ffffff" }}>
                          <SelectItem value="20:00" style={{ color: "#ffffff" }}>
                            8:00 PM
                          </SelectItem>
                          <SelectItem value="21:00" style={{ color: "#ffffff" }}>
                            9:00 PM
                          </SelectItem>
                          <SelectItem value="22:00" style={{ color: "#ffffff" }}>
                            10:00 PM
                          </SelectItem>
                          <SelectItem value="23:00" style={{ color: "#ffffff" }}>
                            11:00 PM
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">End Time</Label>
                      <Select
                        value={settings.silentEnd}
                        onValueChange={(value) => setSettings({ ...settings, silentEnd: value })}
                      >
                        <SelectTrigger className="h-8" style={{ borderColor: "#5C7F39" }}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent style={{ backgroundColor: "#5C7F39", color: "#ffffff" }}>
                          <SelectItem value="06:00" style={{ color: "#ffffff" }}>
                            6:00 AM
                          </SelectItem>
                          <SelectItem value="07:00" style={{ color: "#ffffff" }}>
                            7:00 AM
                          </SelectItem>
                          <SelectItem value="08:00" style={{ color: "#ffffff" }}>
                            8:00 AM
                          </SelectItem>
                          <SelectItem value="09:00" style={{ color: "#ffffff" }}>
                            9:00 AM
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Volume2 className="h-5 w-5" />
                Voice & Interaction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="voice-type">Voice Type</Label>
                <Select
                  value={settings.voiceType}
                  onValueChange={(value) => setSettings({ ...settings, voiceType: value })}
                >
                  <SelectTrigger className="mt-1" style={{ borderColor: "#5C7F39" }}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: "#5C7F39", color: "#ffffff" }}>
                    <SelectItem value="female" style={{ color: "#ffffff" }}>
                      Female Voice
                    </SelectItem>
                    <SelectItem value="male" style={{ color: "#ffffff" }}>
                      Male Voice
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="speech-speed">Speech Speed: {settings.speechSpeed[0]}x</Label>
                <Slider
                  id="speech-speed"
                  min={0.5}
                  max={2.0}
                  step={0.1}
                  value={settings.speechSpeed}
                  onValueChange={(value) => setSettings({ ...settings, speechSpeed: value })}
                  className="mt-2"
                  style={
                    {
                      "--slider-track": "#5C7F39",
                      "--slider-range": "#5C7F39",
                      "--slider-thumb": "#ffffff",
                    } as React.CSSProperties
                  }
                />
              </div>

              <div>
                <Label htmlFor="voice-volume">Voice Volume: {settings.voiceVolume[0]}%</Label>
                <Slider
                  id="voice-volume"
                  min={0}
                  max={100}
                  step={5}
                  value={settings.voiceVolume}
                  onValueChange={(value) => setSettings({ ...settings, voiceVolume: value })}
                  className="mt-2"
                  style={
                    {
                      "--slider-track": "#5C7F39",
                      "--slider-range": "#5C7F39",
                      "--slider-thumb": "#ffffff",
                    } as React.CSSProperties
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="confirmation-sounds">Confirmation Sounds</Label>
                <Switch
                  id="confirmation-sounds"
                  checked={settings.confirmationSounds}
                  onCheckedChange={(checked) => setSettings({ ...settings, confirmationSounds: checked })}
                  style={{
                    backgroundColor: settings.confirmationSounds ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Eye className="h-5 w-5" />
                Accessibility Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="large-text">Large Text</Label>
                <Switch
                  id="large-text"
                  checked={settings.largeText}
                  onCheckedChange={(checked) => setSettings({ ...settings, largeText: checked })}
                  style={{
                    backgroundColor: settings.largeText ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="high-contrast">High Contrast Mode</Label>
                <Switch
                  id="high-contrast"
                  checked={settings.highContrast}
                  onCheckedChange={(checked) => setSettings({ ...settings, highContrast: checked })}
                  style={{
                    backgroundColor: settings.highContrast ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>

              <div>
                <Label htmlFor="button-size">Button Size</Label>
                <Select
                  value={settings.buttonSize}
                  onValueChange={(value) => setSettings({ ...settings, buttonSize: value })}
                >
                  <SelectTrigger className="mt-1" style={{ borderColor: "#5C7F39" }}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: "#5C7F39", color: "#ffffff" }}>
                    <SelectItem value="small" style={{ color: "#ffffff" }}>
                      Small
                    </SelectItem>
                    <SelectItem value="normal" style={{ color: "#ffffff" }}>
                      Normal
                    </SelectItem>
                    <SelectItem value="large" style={{ color: "#ffffff" }}>
                      Large
                    </SelectItem>
                    <SelectItem value="extra-large" style={{ color: "#ffffff" }}>
                      Extra Large
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="screen-reader">Screen Reader Support</Label>
                <Switch
                  id="screen-reader"
                  checked={settings.screenReader}
                  onCheckedChange={(checked) => setSettings({ ...settings, screenReader: checked })}
                  style={{
                    backgroundColor: settings.screenReader ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Shield className="h-5 w-5" />
                Privacy & Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="share-family">Share Data with Family</Label>
                <Switch
                  id="share-family"
                  checked={settings.shareWithFamily}
                  onCheckedChange={(checked) => setSettings({ ...settings, shareWithFamily: checked })}
                  style={{
                    backgroundColor: settings.shareWithFamily ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="share-doctor">Share Data with Doctor</Label>
                <Switch
                  id="share-doctor"
                  checked={settings.shareWithDoctor}
                  onCheckedChange={(checked) => setSettings({ ...settings, shareWithDoctor: checked })}
                />
              </div>

              <div>
                <Label htmlFor="data-retention">Data Retention Period</Label>
                <Select
                  value={settings.dataRetention}
                  onValueChange={(value) => setSettings({ ...settings, dataRetention: value })}
                >
                  <SelectTrigger className="mt-1" style={{ borderColor: "#5C7F39" }}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: "#5C7F39", color: "#ffffff" }}>
                    <SelectItem value="3months" style={{ color: "#ffffff" }}>
                      3 Months
                    </SelectItem>
                    <SelectItem value="6months" style={{ color: "#ffffff" }}>
                      6 Months
                    </SelectItem>
                    <SelectItem value="1year" style={{ color: "#ffffff" }}>
                      1 Year
                    </SelectItem>
                    <SelectItem value="2years" style={{ color: "#ffffff" }}>
                      2 Years
                    </SelectItem>
                    <SelectItem value="indefinite" style={{ color: "#ffffff" }}>
                      Indefinite
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="location-tracking">Location Tracking</Label>
                <Switch
                  id="location-tracking"
                  checked={settings.locationTracking}
                  onCheckedChange={(checked) => setSettings({ ...settings, locationTracking: checked })}
                  style={{
                    backgroundColor: settings.locationTracking ? "#5C7F39" : "#e5e7eb",
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

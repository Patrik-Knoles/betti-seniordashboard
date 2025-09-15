"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"
import { User, Phone, MapPin, Users, Heart, ArrowLeft, Edit, Save, X } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Margaret Johnson",
    dateOfBirth: "1945-03-15",
    phone: "(555) 123-4567",
    email: "margaret.johnson@email.com",
    address: "123 Oak Street, Springfield, IL 62701",
    emergencyContact1: "Sarah Johnson (Daughter) - (555) 987-6543",
    emergencyContact2: "Michael Johnson (Son) - (555) 456-7890",
    emergencyContact3: "Dr. Smith (Primary Care) - (555) 234-5678",
    medicalConditions: "Hypertension, Type 2 Diabetes",
    allergies: "Penicillin, Shellfish",
    medications: "Metformin 500mg twice daily, Lisinopril 10mg once daily",
    notes: "Prefers morning appointments. Uses walker for mobility assistance.",
  })

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to a database
    console.log("Profile saved:", profileData)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset to original data if needed
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
              <h1 className="text-3xl font-serif text-secondary-blue">Profile Information</h1>
              <p className="text-lg text-alt-dark-gray">Manage your personal details</p>
            </div>
          </div>

          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button onClick={handleSave} className="bg-primary-green hover:bg-primary-green/90 text-white">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-secondary-blue hover:bg-secondary-blue/90 text-white"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <User className="h-5 w-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                {isEditing ? (
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.name}</div>
                )}
              </div>

              <div>
                <Label htmlFor="dob">Date of Birth</Label>
                {isEditing ? (
                  <Input
                    id="dob"
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">
                    {new Date(profileData.dateOfBirth).toLocaleDateString()}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Phone className="h-5 w-5" />
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                {isEditing ? (
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.phone}</div>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.email}</div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <MapPin className="h-5 w-5" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="address">Home Address</Label>
                {isEditing ? (
                  <Textarea
                    id="address"
                    value={profileData.address}
                    onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                    className="mt-1"
                    rows={2}
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.address}</div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Users className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="emergency1">Primary Emergency Contact</Label>
                {isEditing ? (
                  <Input
                    id="emergency1"
                    value={profileData.emergencyContact1}
                    onChange={(e) => setProfileData({ ...profileData, emergencyContact1: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.emergencyContact1}</div>
                )}
              </div>

              <div>
                <Label htmlFor="emergency2">Secondary Emergency Contact</Label>
                {isEditing ? (
                  <Input
                    id="emergency2"
                    value={profileData.emergencyContact2}
                    onChange={(e) => setProfileData({ ...profileData, emergencyContact2: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.emergencyContact2}</div>
                )}
              </div>

              <div>
                <Label htmlFor="emergency3">Medical Emergency Contact</Label>
                {isEditing ? (
                  <Input
                    id="emergency3"
                    value={profileData.emergencyContact3}
                    onChange={(e) => setProfileData({ ...profileData, emergencyContact3: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.emergencyContact3}</div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Heart className="h-5 w-5" />
                Health Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="conditions">Medical Conditions</Label>
                {isEditing ? (
                  <Textarea
                    id="conditions"
                    value={profileData.medicalConditions}
                    onChange={(e) => setProfileData({ ...profileData, medicalConditions: e.target.value })}
                    className="mt-1"
                    rows={2}
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.medicalConditions}</div>
                )}
              </div>

              <div>
                <Label htmlFor="allergies">Allergies</Label>
                {isEditing ? (
                  <Input
                    id="allergies"
                    value={profileData.allergies}
                    onChange={(e) => setProfileData({ ...profileData, allergies: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.allergies}</div>
                )}
              </div>

              <div>
                <Label htmlFor="medications">Current Medications</Label>
                {isEditing ? (
                  <Textarea
                    id="medications"
                    value={profileData.medications}
                    onChange={(e) => setProfileData({ ...profileData, medications: e.target.value })}
                    className="mt-1"
                    rows={2}
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.medications}</div>
                )}
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                {isEditing ? (
                  <Textarea
                    id="notes"
                    value={profileData.notes}
                    onChange={(e) => setProfileData({ ...profileData, notes: e.target.value })}
                    className="mt-1"
                    rows={3}
                  />
                ) : (
                  <div className="mt-1 p-2 bg-alt-light-gray rounded">{profileData.notes}</div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

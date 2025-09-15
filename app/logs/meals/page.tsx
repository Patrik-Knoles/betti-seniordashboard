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
  Filter,
  Menu,
  X,
  User,
  Settings,
  Droplets,
  Pill,
  MapPin,
  CalendarIcon,
} from "lucide-react"

export default function MealsPage() {
  const [dateFilter, setDateFilter] = useState("")
  const [mealFilter, setMealFilter] = useState("all")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const mealLogs = [
    {
      id: 1,
      date: "2024-01-15",
      time: "08:00 AM",
      meal: "Breakfast",
      items: ["Oatmeal with berries", "Orange juice", "Coffee"],
      calories: 350,
      nutrition: "Balanced",
    },
    {
      id: 2,
      date: "2024-01-15",
      time: "12:30 PM",
      meal: "Lunch",
      items: ["Grilled chicken salad", "Whole grain roll", "Water"],
      calories: 420,
      nutrition: "Excellent",
    },
    {
      id: 3,
      date: "2024-01-15",
      time: "06:00 PM",
      meal: "Dinner",
      items: ["Baked salmon", "Steamed vegetables", "Brown rice"],
      calories: 480,
      nutrition: "Excellent",
    },
    {
      id: 4,
      date: "2024-01-14",
      time: "08:15 AM",
      meal: "Breakfast",
      items: ["Scrambled eggs", "Toast", "Apple juice"],
      calories: 320,
      nutrition: "Good",
    },
    {
      id: 5,
      date: "2024-01-14",
      time: "01:00 PM",
      meal: "Lunch",
      items: ["Vegetable soup", "Crackers", "Tea"],
      calories: 280,
      nutrition: "Light",
    },
    {
      id: 6,
      date: "2024-01-14",
      time: "07:30 PM",
      meal: "Dinner",
      items: ["Pasta with marinara", "Side salad", "Garlic bread"],
      calories: 520,
      nutrition: "Good",
    },
  ]

  const performanceMetrics = {
    averageCalories: 395,
    mealsPerDay: 2.8,
    nutritionScore: 85,
    status: "Good",
  }

  const filteredMeals = mealLogs.filter((meal) => {
    if (dateFilter && !meal.date.includes(dateFilter)) return false
    if (mealFilter !== "all" && meal.meal.toLowerCase() !== mealFilter) return false
    return true
  })

  const getEncouragementMessage = () => {
    const nutritionScore = performanceMetrics.nutritionScore
    const mealsPerDay = performanceMetrics.mealsPerDay

    if (nutritionScore >= 80 && mealsPerDay >= 3) {
      return "Excellent nutrition habits! You're maintaining a balanced diet with regular meals."
    } else if (nutritionScore >= 70) {
      return "Good progress on your nutrition goals. Keep focusing on balanced meals throughout the day."
    } else {
      return "Consider adding more variety to your meals and maintaining regular eating schedules for better nutrition."
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
              Meal Tracking Logs
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
                    className="w-full justify-start text-left p-4 h-auto bg-transparent border-primary-green"
                  >
                    <Utensils className="mr-3 h-5 w-5 text-primary-green" />
                    <div>
                      <div className="font-medium text-primary-green">
                        Meals
                      </div>
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
                {performanceMetrics.averageCalories}
              </div>
              <div className="text-sm text-gray-600">
                Average Daily Calories
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="text-2xl font-bold" style={{ color: "#5C7F39" }}>
                {performanceMetrics.mealsPerDay}
              </div>
              <div className="text-sm text-gray-600">Meals Per Day</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#5C7F39" }}
                >
                  {performanceMetrics.nutritionScore}%
                </div>
              </div>
              <div className="text-sm text-gray-600">Nutrition Score</div>
              <Progress
                value={performanceMetrics.nutritionScore}
                className="mt-2 [&>div]:bg-primary-green"
              />
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
                  Filter by Meal Type
                </label>
                <Select value={mealFilter} onValueChange={setMealFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select meal type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Meals</SelectItem>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {filteredMeals.map((meal) => (
            <Card key={meal.id} className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle
                    className="flex items-center gap-2"
                    style={{ color: "#5C7F39" }}
                  >
                    <Utensils className="h-5 w-5" />
                    {meal.meal}
                  </CardTitle>
                  <Badge
                    style={{
                      backgroundColor:
                        meal.nutrition === "Excellent"
                          ? "#5C7F39"
                          : meal.nutrition === "Good"
                          ? "#233E7D"
                          : meal.nutrition === "Balanced"
                          ? "#99CA3C"
                          : "#59595B",
                      color: "#ffffff",
                    }}
                  >
                    {meal.nutrition}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium">{meal.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{meal.time}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Calories: </span>
                      <span style={{ color: "#5C7F39" }}>{meal.calories}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Food Items:
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {meal.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white border-gray-200 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Utensils className="h-5 w-5" style={{ color: "#5C7F39" }} />
              <h3 className="text-lg font-serif" style={{ color: "#5C7F39" }}>
                Daily Encouragement
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {getEncouragementMessage()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

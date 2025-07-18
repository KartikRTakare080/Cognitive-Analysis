"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { Brain, Clock, Target, TrendingUp } from 'lucide-react'

const performanceData = [
  { session: 1, accuracy: 78, speed: 65, focus: 82 },
  { session: 2, accuracy: 82, speed: 70, focus: 85 },
  { session: 3, accuracy: 85, speed: 75, focus: 88 },
  { session: 4, accuracy: 88, speed: 78, focus: 90 },
  { session: 5, accuracy: 91, speed: 82, focus: 92 },
  { session: 6, accuracy: 94, speed: 85, focus: 95 },
]

const brainwaveData = [
  { frequency: "Alpha", value: 45, color: "#3b82f6" },
  { frequency: "Beta", value: 32, color: "#8b5cf6" },
  { frequency: "Theta", value: 18, color: "#10b981" },
  { frequency: "Delta", value: 5, color: "#f59e0b" },
]

const students = [
  {
    id: 1,
    name: "Alice Chen",
    age: 12,
    level: "Advanced",
    accuracy: 96,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Bob Kumar",
    age: 11,
    level: "Intermediate",
    accuracy: 89,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Carol Zhang",
    age: 13,
    level: "Advanced",
    accuracy: 94,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Park",
    age: 10,
    level: "Beginner",
    accuracy: 76,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Performance Trends
            </CardTitle>
            <CardDescription>Student performance over recent sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="session" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="speed" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="focus" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Brainwave Analysis
            </CardTitle>
            <CardDescription>Current EEG frequency distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={brainwaveData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="frequency" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Student List */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Active Students</CardTitle>
          <CardDescription>Current abacus learning participants</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {students.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 rounded-lg border bg-white/50">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">Age: {student.age}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    variant={
                      student.level === "Advanced"
                        ? "default"
                        : student.level === "Intermediate"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {student.level}
                  </Badge>
                  <div className="text-right">
                    <p className="text-sm font-medium">{student.accuracy}% Accuracy</p>
                    <Progress value={student.accuracy} className="w-20" />
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cognitive Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-700">Avg Response Time</p>
                <p className="text-2xl font-bold text-blue-900">2.3s</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-purple-700">Focus Score</p>
                <p className="text-2xl font-bold text-purple-900">8.7/10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-green-700">Cognitive Load</p>
                <p className="text-2xl font-bold text-green-900">Medium</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
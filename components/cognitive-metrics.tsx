"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts"
import { Brain, Clock, Target, Zap, TrendingUp, Activity } from 'lucide-react'

const attentionData = [
  { time: "0s", attention: 65, focus: 70 },
  { time: "30s", attention: 72, focus: 75 },
  { time: "60s", attention: 78, focus: 82 },
  { time: "90s", attention: 85, focus: 88 },
  { time: "120s", attention: 88, focus: 92 },
  { time: "150s", attention: 92, focus: 95 },
  { time: "180s", attention: 89, focus: 91 },
]

const brainwaveDistribution = [
  { name: "Alpha (8-12 Hz)", value: 45, color: "#3b82f6" },
  { name: "Beta (13-30 Hz)", value: 32, color: "#8b5cf6" },
  { name: "Theta (4-7 Hz)", value: 18, color: "#10b981" },
  { name: "Delta (0.5-3 Hz)", value: 5, color: "#f59e0b" },
]

const cognitiveLoad = [
  { name: "Working Memory", value: 85, fill: "#3b82f6" },
  { name: "Processing Speed", value: 78, fill: "#8b5cf6" },
  { name: "Attention Control", value: 92, fill: "#10b981" },
]

export default function CognitiveMetrics() {
  return (
    <div className="space-y-6">
      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-700">Attention Score</p>
                <p className="text-2xl font-bold text-blue-900">8.9/10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-purple-700">Response Time</p>
                <p className="text-2xl font-bold text-purple-900">1.8s</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-green-700">Accuracy Rate</p>
                <p className="text-2xl font-bold text-green-900">94.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-600 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-orange-700">Mental Load</p>
                <p className="text-2xl font-bold text-orange-900">Medium</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attention and Focus Trends */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Attention & Focus Trends
          </CardTitle>
          <CardDescription>Real-time attention and focus levels during abacus practice</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={attentionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[60, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="attention" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="focus" stackId="2" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Brainwave Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-600" />
              Brainwave Distribution
            </CardTitle>
            <CardDescription>EEG frequency band analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={brainwaveDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {brainwaveDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Cognitive Load Analysis</CardTitle>
            <CardDescription>Working memory and processing metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={cognitiveLoad}>
                <RadialBar dataKey="value" cornerRadius={10} />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Cognitive Assessment */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Detailed Cognitive Assessment</CardTitle>
          <CardDescription>Comprehensive analysis of cognitive abilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Memory Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Working Memory</span>
                  <Badge variant="default">Excellent</Badge>
                </div>
                <Progress value={92} className="h-2" />

                <div className="flex justify-between items-center">
                  <span className="text-sm">Short-term Memory</span>
                  <Badge variant="secondary">Good</Badge>
                </div>
                <Progress value={85} className="h-2" />

                <div className="flex justify-between items-center">
                  <span className="text-sm">Pattern Recognition</span>
                  <Badge variant="default">Excellent</Badge>
                </div>
                <Progress value={94} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Processing Abilities</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mental Arithmetic</span>
                  <Badge variant="default">Excellent</Badge>
                </div>
                <Progress value={96} className="h-2" />

                <div className="flex justify-between items-center">
                  <span className="text-sm">Visual Processing</span>
                  <Badge variant="secondary">Good</Badge>
                </div>
                <Progress value={88} className="h-2" />

                <div className="flex justify-between items-center">
                  <span className="text-sm">Decision Making</span>
                  <Badge variant="default">Excellent</Badge>
                </div>
                <Progress value={91} className="h-2" />
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Recommendations</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Continue with advanced abacus techniques to maintain high performance</li>
              <li>• Focus on speed training to improve response times</li>
              <li>• Incorporate complex multi-digit calculations for enhanced cognitive load</li>
              <li>• Regular breaks recommended to maintain optimal attention levels</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
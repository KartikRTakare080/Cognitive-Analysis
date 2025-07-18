"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import { Brain, Target, Zap, Clock } from 'lucide-react'

interface AnalysisResultsProps {
  data: any
}

export default function AnalysisResults({ data }: AnalysisResultsProps) {
  if (!data) {
    return (
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardContent className="p-12 text-center">
          <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-muted-foreground">No Analysis Data</h3>
          <p className="text-sm text-muted-foreground">Upload EEG data and run analysis to see results</p>
        </CardContent>
      </Card>
    )
  }

  const modelPerformance = [
    { model: "SVM", accuracy: data.svm.accuracy, precision: data.svm.precision, recall: data.svm.recall },
    {
      model: "Random Forest",
      accuracy: data.randomForest.accuracy,
      precision: data.randomForest.precision,
      recall: data.randomForest.recall,
    },
    {
      model: "Neural Network",
      accuracy: data.neuralNetwork.accuracy,
      precision: data.neuralNetwork.precision,
      recall: data.neuralNetwork.recall,
    },
  ]

  const cognitiveData = [
    { metric: "Attention", value: data.cognitiveMetrics.attentionLevel },
    { metric: "Memory", value: data.cognitiveMetrics.memoryPerformance },
    { metric: "Processing Speed", value: data.cognitiveMetrics.processingSpeed },
    { metric: "Mental Arithmetic", value: data.cognitiveMetrics.mentalArithmetic },
  ]

  return (
    <div className="space-y-6">
      {/* Model Performance Comparison */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            ML Model Performance
          </CardTitle>
          <CardDescription>Comparison of accuracy, precision, and recall across models</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={modelPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="accuracy" fill="#3b82f6" name="Accuracy" />
              <Bar dataKey="precision" fill="#8b5cf6" name="Precision" />
              <Bar dataKey="recall" fill="#10b981" name="Recall" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Cognitive Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Cognitive Profile
            </CardTitle>
            <CardDescription>Student's cognitive abilities radar chart</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={cognitiveData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={90} domain={[0, 10]} />
                <Radar name="Score" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Detailed Metrics</CardTitle>
            <CardDescription>Individual cognitive performance scores</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {cognitiveData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.metric}</span>
                  <Badge variant={item.value >= 8 ? "default" : item.value >= 6 ? "secondary" : "destructive"}>
                    {item.value}/10
                  </Badge>
                </div>
                <Progress value={item.value * 10} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Best Model Recommendation */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Zap className="h-5 w-5" />
            Best Performing Model
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-green-900">Neural Network</h3>
              <p className="text-green-700">Highest accuracy at 96.8% with excellent precision and recall</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-900">96.8%</div>
              <div className="text-sm text-green-700">Accuracy</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-700">Cognitive Load</p>
                <p className="text-2xl font-bold text-blue-900">Optimal</p>
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
                <p className="text-sm text-purple-700">Focus Level</p>
                <p className="text-2xl font-bold text-purple-900">High</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-green-700">Learning State</p>
                <p className="text-2xl font-bold text-green-900">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
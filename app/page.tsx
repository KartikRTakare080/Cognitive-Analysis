"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Brain, Users, BarChart3, Upload, Activity, TrendingUp } from 'lucide-react'
import StudentDashboard from "@/components/student-dashboard"
import DataUpload from "@/components/data-upload"
import AnalysisResults from "@/components/analysis-results"
import ModelComparison from "@/components/model-comparison"
import CognitiveMetrics from "@/components/cognitive-metrics"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [analysisData, setAnalysisData] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  NeuroAbacus
                </h1>
                <p className="text-sm text-muted-foreground">EEG Cognitive Analysis Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Activity className="h-3 w-3 mr-1" />
                System Active
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Students</p>
                  <p className="text-3xl font-bold">247</p>
                </div>
                <Users className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">EEG Sessions</p>
                  <p className="text-3xl font-bold">1,432</p>
                </div>
                <Activity className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Accuracy Rate</p>
                  <p className="text-3xl font-bold">94.2%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Models Active</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <BarChart3 className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Data Upload
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Analysis
            </TabsTrigger>
            <TabsTrigger value="models" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              ML Models
            </TabsTrigger>
            <TabsTrigger value="metrics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Metrics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <StudentDashboard />
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <DataUpload onAnalysisComplete={setAnalysisData} />
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <AnalysisResults data={analysisData} />
          </TabsContent>

          <TabsContent value="models" className="space-y-6">
            <ModelComparison />
          </TabsContent>

          <TabsContent value="metrics" className="space-y-6">
            <CognitiveMetrics />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
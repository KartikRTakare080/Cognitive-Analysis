# NeuroAbacus: EEG Cognitive Analysis Platform

## Overview

NeuroAbacus is an advanced platform designed for the cognitive analysis of abacus students using Electroencephalography (EEG) data. It integrates a modern React/Next.js frontend with a robust backend for data processing and machine learning model inference. The platform provides insights into students' cognitive states, performance trends, and the effectiveness of various machine learning models in predicting cognitive metrics.

## Features

*   **EEG Data Upload:** Securely upload EEG data files (.edf, .csv, .mat, .txt) for analysis.
*   **Machine Learning Integration:** Utilizes three distinct ML models (SVM, Random Forest, Neural Network) for comprehensive data processing and prediction.
*   **Cognitive Metrics:** Visualizes key cognitive metrics such as attention level, memory performance, processing speed, and mental arithmetic abilities.
*   **Interactive Dashboards:** Provides dynamic dashboards for student performance trends, brainwave analysis, and detailed cognitive assessments.
*   **Model Comparison:** Offers insights into the performance (accuracy, precision, recall) and training progress of different ML models.
*   **Responsive Design:** Built with Tailwind CSS and shadcn/ui for a modern, responsive user interface.
*   **API Routes:** Backend API routes for handling file uploads, data analysis, and student data management.
*   **Python Scripts:** Includes Python scripts for EEG signal preprocessing and the core machine learning pipeline.

## Technologies Used

**Frontend:**
*   Next.js (App Router)
*   React
*   Tailwind CSS
*   shadcn/ui (for UI components)
*   Recharts (for data visualization)
*   Lucide React (for icons)

**Backend:**
*   Next.js API Routes (for data handling and ML integration)
*   Node.js

**Machine Learning & Data Processing:**
*   Python 3.x
*   NumPy
*   Pandas
*   SciPy
*   Scikit-learn
*   Matplotlib
*   Joblib

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1.  **Node.js (LTS version) and npm:**
    *   Download from: https://nodejs.org/en/download/
    *   **Important:** During installation, ensure "Add to PATH" is selected.
    *   Verify installation in PowerShell:
        ```powershell
        node -v
        npm -v

import numpy as np
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
import time

def train_ml_models():
    """
    Train 3 ML models for EEG cognitive analysis
    """
    print("🤖 Training ML models for EEG cognitive analysis...")
    
    # Generate synthetic EEG features
    np.random.seed(42)
    n_samples = 1000
    n_features = 8
    
    # Create synthetic data for 3 classes (Low, Medium, High attention)
    X = np.random.randn(n_samples, n_features)
    y = np.random.randint(0, 3, n_samples)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Scale features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Initialize models
    models = {
        'SVM': SVC(kernel='rbf', random_state=42),
        'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
        'Neural Network': MLPClassifier(hidden_layer_sizes=(100, 50), max_iter=1000, random_state=42)
    }
    
    results = {}
    
    # Train and evaluate each model
    for name, model in models.items():
        print(f"\n🔄 Training {name}...")
        start_time = time.time()
        
        # Train model
        model.fit(X_train_scaled, y_train)
        training_time = time.time() - start_time
        
        # Make predictions
        y_pred = model.predict(X_test_scaled)
        accuracy = accuracy_score(y_test, y_pred)
        
        results[name] = {
            'accuracy': accuracy,
            'training_time': training_time
        }
        
        print(f"✅ {name} - Accuracy: {accuracy:.3f}, Time: {training_time:.2f}s")
    
    # Find best model
    best_model = max(results.keys(), key=lambda k: results[k]['accuracy'])
    
    print("\n" + "="*60)
    print("🏆 MODEL COMPARISON RESULTS")
    print("="*60)
    
    for name, metrics in results.items():
        print(f"{name:15} - Accuracy: {metrics['accuracy']:.3f} - Time: {metrics['training_time']:.2f}s")
    
    print(f"\n🥇 Best performing model: {best_model}")
    print(f"🎯 Best accuracy: {results[best_model]['accuracy']:.3f}")
    
    print("\n🎉 ML model training completed successfully!")
    return results

if __name__ == "__main__":
    train_ml_models()
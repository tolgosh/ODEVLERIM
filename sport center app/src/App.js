import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection/HomeSection';
import StatisticsSection from './components/StatisticsSection/StatisticsSection';
import ClassesSection from './components/ClassesSection/ClassesSection';
import BMICalculator from './components/BMICalculator/BMICalculator';
import TrainersSection from './components/TrainersSection/TrainersSection';
import PurchaseSection from './components/PurchaseSection/PurchaseSection';
import ReviewSection from './components/ReviewSection/ReviewSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <StatisticsSection />
      <ClassesSection />
      <BMICalculator />
      <TrainersSection />
      <PurchaseSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

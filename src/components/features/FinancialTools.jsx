import '../style/Home.css';


export default function FinancialTools() {
  return (
    <div className="featuresContainer">
      <div className="featureCard">
        <h3>Budget Planner</h3>
        <p>Track your income and expenses with our easy-to-use budget planner. Set financial goals and receive insights to help you stay on track every month.</p>
      </div>
      <div className="featureCard">
        <h3>Investment Insights</h3>
        <p>Access personalized investment recommendations and performance reports designed to help you make smarter financial decisions for long-term growth.</p>
      </div>
      <div className="featureCard">
        <h3>Loan Calculator</h3>
        <p>Estimate monthly payments and interest rates instantly with our built-in loan calculator—helping you plan your finances with confidence.</p>
      </div>
      <div className="featureCard">
        <h3>Spending Analytics</h3>
        <p>Visualize your spending patterns with detailed analytics and charts, empowering you to identify saving opportunities and manage your budget effectively.</p>
      </div>
    </div>
  );
}

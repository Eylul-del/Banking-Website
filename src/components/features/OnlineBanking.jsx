import '../style/Home.css';

export default function OnlineBanking(){
    return(
      <div className="featuresContainer">
        <div className="featureCard">
          <h3>24/7 Account Access</h3>
          <p>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
        </div>
        <div className="featureCard">
          <h3>Mobile Banking App</h3>
          <p>Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.</p>
        </div>
        <div className="featureCard">
          <h3>Secure Transactions</h3>
          <p>Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.</p>
        </div>
        <div className="featureCard">
          <h3>Bill Pay and Trnsfers</h3>
          <p>Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.</p>
        </div>
      </div>
    )
}
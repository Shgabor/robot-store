import React from 'react';
import { Button } from '@/components/ui/button.jsx'

const RobotCard = ({ robot }) => {
  const handleBuyNow = () => {
    const subject = `Inquiry about ${robot.name}`;
    const body = `Hello,\n\nI am interested in learning more about the ${robot.name}.\n\nPlease provide me with more information including:\n- Detailed specifications\n- Pricing\n- Availability\n- Delivery options\n\nThank you!`;
    window.location.href = `mailto:inquiry@robotshowcase.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="robot-card">
      <div className="robot-card-header">
        <h3>{robot.name}</h3>
        <p className="manufacturer">{robot.manufacturer}</p>
      </div>
      <div className="robot-card-body">
        <p className="description">{robot.description}</p>
        <div className="price-section">
          <span className="price">{robot.price}</span>
        </div>
        <div className="links-section">
          {robot.officialWebsite && (
            <a href={robot.officialWebsite} target="_blank" rel="noopener noreferrer" className="official-link">
              Official Website
            </a>
          )}
          {robot.productPage && (
            <a href={robot.productPage} target="_blank" rel="noopener noreferrer" className="product-link">
              Product Page
            </a>
          )}
        </div>
      </div>
      <div className="robot-card-footer">
        <Button onClick={handleBuyNow} className="buy-now-button">
          Buy Now / Inquire
        </Button>
      </div>
    </div>
  );
};

export default RobotCard;


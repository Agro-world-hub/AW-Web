import Blue from '../../images/BlueCart.png';
import PC from '../../images/PC.png';
import MP from '../../images/MP.png';
const CardData = [
    {
      image:Blue, // Replace with your image paths
      topic: "InvestmentFarm Web Portal",
      texts: [
        "Identify opportunities to invest in fund-raising farms",
        "Purchase agri-stocks in a particular crop",
        "Monitor the progress of the Crop & Track returns",
      ],
      arrowLink: "/InvestmentFarm",
    },
    {
      image: PC,
      topic: "Plant Care Mobile App",
      texts: [
        "Receive specific advice on individual crop care",
        "Auto detect crop health, pests, and diseases with AI",
        "Provide regular crop progress updates to investors",
      ],
      arrowLink: "/PlantCare",
    },
    {
      image: MP,
      topic: "MarketPlace Web",
      texts: [
        "Auto-publish crop stock updates to e-marketplaces",
        "Set optimal pricing based on market trends",
        "Forecast potential shortages or surpluses",
      ],
      arrowLink: "/MarketPlace",
    },
  ];
  
  export default CardData;
  
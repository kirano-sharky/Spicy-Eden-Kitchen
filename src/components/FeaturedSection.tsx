
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredItems = [
  {
    id: 1,
    name: "Ghost Pepper Wings",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=2000",
    description: "Crispy chicken wings coated in our signature ghost pepper sauce.",
    price: "$12.99",
    heatLevel: "Hot",
  },
  {
    id: 2,
    name: "Habanero Tacos",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2000",
    description: "Authentic street tacos with habanero salsa and pickled jalapeños.",
    price: "$10.99",
    heatLevel: "Medium",
  },
  {
    id: 3,
    name: "Carolina Reaper Curry",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?q=80&w=2000",
    description: "Traditional curry infused with the world's hottest pepper.",
    price: "$15.99",
    heatLevel: "Extreme",
  },
];

const FeaturedSection = () => {
  return (
    <section id="featured" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-spicy-orange text-spicy-orange">
            Special Selection
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Spicy Delights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular dishes that bring the perfect balance of flavor and heat to excite your taste buds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-xl">{item.name}</h3>
                  <Badge className={`${
                    item.heatLevel === "Extreme" ? "bg-spicy-red" : 
                    item.heatLevel === "Hot" ? "bg-spicy-orange" : 
                    "bg-yellow-500"
                  } text-white`}>
                    {item.heatLevel}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{item.price}</span>
                  <Button size="sm" className="spicy-gradient text-white">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import fruits from "../../../../assets/shop/fruits.png";
import Link from "next/link";

const page = () => {
  const orders = [
    {
      id: 1,
      title: "Vegetable",
      price: 345,
      details: "Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)",
      image: fruits,
    },
    {
      id: 2,
      title: "Vegetable",
      price: 345,
      details: "Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)",
      image: fruits,
    },
  ];
  return (
    <div>
      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-5">My Profile</h1>

        <Card className="shadow-none mb-5">
          <CardContent className="grid gap-2 p-5">
            <p>
              <span className="font-medium">SIRET Number:</span> 154846541654
            </p>
            <p>
              <span className="font-medium">Phone:</span> 01547475
            </p>
            <p>
              <span className="font-medium">Email:</span> moa@rentaly.com
            </p>
            <p>
              <span className="font-medium">Address:</span> Lieu Dit Les Ris,
              Lieu-dit, 03190 Vallon-en-Sully, France
            </p>
          </CardContent>
        </Card>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-5">Active Order</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <Card
                key={order.id}
                className="flex items-center justify-between p-5 shadow-none"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={order.image}
                    alt={order.title}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-medium">{order.title}</p>
                    <p className="text-sm text-gray-500">{order.details}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <p className="font-semibold">${order.price}</p>
                  <Link href={"/my-profile/profile/id"}>
                    <Button className="bg-green-600 hover:bg-green-700">
                      View details
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;

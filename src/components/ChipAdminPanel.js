import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ClipPlayer from "./ClipPlayer";

const ChipAdminPanel = () => {
  const prices = [100, 200, 500];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {prices.map((price) => (
        <Card key={price} className="bg-white rounded-2xl shadow-md">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">₹{price} Clip</h2>
            <ClipPlayer price={price} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ChipAdminPanel;

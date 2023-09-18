import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React from "react";

const Amenities = ({ items }) => {
  console.log(items);

  return (
    <div className="grid grid-cols-4 mt-3 gap-5">
      <div className="flex gap-3">
        <PaperAirplaneIcon width={20} />
        <div>
          <span className="text-xs">Lot</span>
          <br />
          <span className="text-sm">{items.fly}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <PaperAirplaneIcon width={20} />
        <div>
          <span className="text-xs">Wyżywienie</span>
          <br />
          <span className="text-sm">{items.food}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <PaperAirplaneIcon width={20} />
        <div>
          <span className="text-xs">Rodzaj</span>
          <br />
          <span className="text-sm">{items.type}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <PaperAirplaneIcon width={20} />
        <div>
          <span className="text-xs">Plaża</span>
          <br />
          <span className="text-sm">Do {items.beach}m</span>
        </div>
      </div>
      <div className="flex gap-3">
        <PaperAirplaneIcon width={20} />
        <div>
          <span className="text-xs">Bagaż</span>
          <br />
          <span className="text-sm">{items.luggage ? "W cenie" : "Za dopłatą"}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <PaperAirplaneIcon width={20} />
        <div>
          <span className="text-xs">Rezydent</span>
          <br />
          <span className="text-sm">{items.resident ? "Na miejscu" : "Brak"}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <PaperAirplaneIcon width={20} />
        <div>
          <span className="text-xs">Transfer</span>
          <br />
          <span className="text-sm">{items.transfer ? "W cenie" : "Za dopłatą"}</span>
        </div>
      </div>
    </div>
  );
};

export default Amenities;

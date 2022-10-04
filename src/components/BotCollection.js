import React from "react";
import BotCard from "./BotCard";

function BotCollection({ data, addToArmy, deleteBot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {data.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleBot={addToArmy}
            deleteBot={deleteBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;